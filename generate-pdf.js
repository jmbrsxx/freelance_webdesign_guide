const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Read the free course content
const freeCourseFile = fs.readFileSync(path.join(__dirname, 'pages/free-course.tsx'), 'utf-8');
const startIdx = freeCourseFile.indexOf('const freeCourseText = `') + 'const freeCourseText = `'.length;
const endIdx = freeCourseFile.lastIndexOf('`\n\nexport default');
const courseText = freeCourseFile.slice(startIdx, endIdx);

// Parse modules and lessons
const modules = [];
const moduleMatches = courseText.match(/MODULE \d[\s\S]*?(?=MODULE \d|$)/g) || [];

moduleMatches.slice(0, 3).forEach((moduleText, idx) => {
  const moduleTitleMatch = moduleText.match(/MODULE (\d)/);
  const moduleNum = moduleTitleMatch ? moduleTitleMatch[1] : idx + 1;
  
  const titleMatch = moduleText.match(/MODULE \d[\s\S]*?\n(.*?)\n/);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  const quoteMatch = moduleText.match(/"([^"]*)"/);
  const quote = quoteMatch ? quoteMatch[1] : '';
  
  const milestoneMatch = moduleText.match(/MILESTONE\n(.*?)(?=\n\nLessons|$)/);
  const milestone = milestoneMatch ? milestoneMatch[1].trim() : '';
  
  // Extract lessons
  const lessons = [];
  const lessonMatches = moduleText.match(/LESSON \d+\.\d+[\s\S]*?(?=LESSON \d+\.\d+|$)/g) || [];
  
  lessonMatches.forEach((lessonText) => {
    const lessonMatch = lessonText.match(/LESSON (\d+\.\d+)\n(.*?)\n([\s\S]*?)(?=LESSON \d+\.\d+|$)/);
    if (lessonMatch) {
      const [, id, title, content] = lessonMatch;
      lessons.push({
        id,
        title: title.trim(),
        subtitle: '',
        content: content.trim().slice(0, 2000)
      });
    }
  });
  
  modules.push({
    number: moduleNum,
    title,
    quote,
    milestone,
    lessons
  });
});

// Create PDF
const doc = new PDFDocument({ margins: 40, size: 'A4' });
const stream = fs.createWriteStream(path.join(__dirname, 'public/free-course.pdf'));
doc.pipe(stream);

// Colors matching the PDF design
const colors = {
  darkBlue: '#1e3a8a',
  white: '#ffffff',
  yellow: '#fbbf24',
  green: '#22c55e',
  lightGray: '#9ca3af',
  darkGray: '#374151'
};

// Helper function to draw a box
function drawBox(doc, x, y, width, height, fillColor, strokeColor = null) {
  if (fillColor) {
    doc.rect(x, y, width, height).fill(fillColor);
  }
  if (strokeColor) {
    doc.rect(x, y, width, height).stroke(strokeColor);
  }
}

// Table of Contents Page
doc.fontSize(28).fillColor(colors.darkBlue).font('Helvetica-Bold').text('TABLE OF CONTENTS', 50, 50);
doc.moveDown(1);

modules.forEach((mod) => {
  doc.fontSize(12).fillColor(colors.green).font('Helvetica-Bold').text(`[FREE] MODULE ${mod.number} — ${mod.title}`);
  mod.lessons.forEach((lesson) => {
    doc.fontSize(10).fillColor(colors.darkGray).font('Helvetica').text(`  ${lesson.id} ${lesson.title}`, { indent: 20 });
  });
  doc.moveDown(0.5);
});

doc.addPage();

// Modules content
modules.forEach((mod, modIdx) => {
  // Module header background box
  drawBox(doc, 0, 0, 595, 200, colors.darkBlue);
  
  // FREE MODULE label
  doc.fontSize(11).fillColor(colors.green).font('Helvetica-Bold').text('FREE MODULE', 50, 30);
  
  // MODULE NUMBER (huge)
  doc.fontSize(48).fillColor(colors.white).font('Helvetica-Bold').text(`MODULE ${mod.number}`, 50, 55);
  
  // Module Title (yellow, big)
  doc.fontSize(32).fillColor(colors.yellow).font('Helvetica-Bold').text(mod.title, 50, 115);
  
  // Quote (transparent/light)
  doc.fontSize(12).fillColor(colors.lightGray).font('Helvetica-Oblique').text(`"${mod.quote}"`, 50, 155);
  
  // MILESTONE section
  doc.fontSize(10).fillColor(colors.yellow).font('Helvetica-Bold').text('MILESTONE', 50, 178);
  doc.fontSize(10).fillColor(colors.white).font('Helvetica').text(mod.milestone, 50, 192);
  
  doc.y = 220;
  
  // Lessons heading
  doc.fontSize(14).fillColor(colors.darkBlue).font('Helvetica-Bold').text('Lessons in this module');
  doc.moveDown(0.5);
  
  mod.lessons.forEach((lesson) => {
    doc.fontSize(11).fillColor(colors.darkBlue).font('Helvetica-Bold').text(`${lesson.id} ${lesson.title}`);
  });
  
  doc.addPage();
  
  // Content pages for lessons
  mod.lessons.forEach((lesson, lessonIdx) => {
    // Lesson header background
    drawBox(doc, 0, 0, 595, 140, colors.darkBlue);
    
    // MODULE and LESSON labels
    doc.fontSize(10).fillColor(colors.yellow).font('Helvetica-Bold').text(`MODULE ${mod.number}`, 50, 20);
    doc.fontSize(10).fillColor(colors.yellow).font('Helvetica-Bold').text(`LESSON ${lesson.id}`, 50, 35);
    
    // Lesson title (white, large, bold)
    doc.fontSize(28).fillColor(colors.white).font('Helvetica-Bold').text(lesson.title, 50, 60, { width: 500 });
    
    // Subtitle (light gray)
    doc.fontSize(11).fillColor(colors.lightGray).font('Helvetica').text(lesson.subtitle || '', 50, 115);
    
    doc.y = 160;
    
    // Content with proper formatting
    const paragraphs = lesson.content.split('\n\n');
    
    paragraphs.forEach((para, paraIdx) => {
      if (para.trim()) {
        // Check if it's a heading (all caps or contains colon)
        if (para.toUpperCase() === para || para.includes(':')) {
          doc.fontSize(12).fillColor(colors.darkBlue).font('Helvetica-Bold').text(para.trim());
        } else {
          doc.fontSize(10).fillColor(colors.darkGray).font('Helvetica').text(para.trim(), { align: 'left', width: 480 });
        }
        doc.moveDown(0.4);
      }
    });
    
    if (lessonIdx < mod.lessons.length - 1) {
      doc.addPage();
    }
  });
  
  if (modIdx < modules.length - 1) {
    doc.addPage();
  }
});

// Finalize PDF
doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully: public/free-course.pdf');
  process.exit(0);
});

stream.on('error', (err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
