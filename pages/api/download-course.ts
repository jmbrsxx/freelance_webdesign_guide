import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Add authentication here
    // For now, allow access after payment (future: verify payment in database/session)
    // Example implementation:
    // const session = await getServerSession(req, res, authOptions);
    // if (!session?.user || !session.user.hasPaidForCourse) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }

    // Path to the course PDF
    const filePath = path.join(
      process.cwd(),
      'Freelance_Web_Design_Course free course.pdf'
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Course file not found' });
    }

    // Get file stats to determine size
    const stats = fs.statSync(filePath);

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="Freelance_Web_Design_Full_Course.pdf"'
    );
    res.setHeader('Content-Length', stats.size);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    fileStream.on('error', (error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('File stream error:', error);
      }
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to download file' });
      }
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Download error:', error);
    }
    res.status(500).json({ error: 'Download failed' });
  }
}
