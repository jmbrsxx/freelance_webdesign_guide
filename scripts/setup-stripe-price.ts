import path from 'path';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

async function setupStripePrice() {
  try {
    console.log('🚀 Creating Stripe Product and Price...\n');

    // Create Product
    const product = await stripe.products.create({
      name: 'Freelance Web Design & Development Course',
      description: 'Complete freelance web design and development course with 47 lessons',
    });

    console.log('✅ Product created:');
    console.log(`   Product ID: ${product.id}\n`);

    // Create Price with Adaptive Pricing support
    // tax_behavior: 'exclusive' is required for Adaptive Pricing to work correctly
    const price = await stripe.prices.create({
      product: product.id,
      currency: 'usd',
      unit_amount: 100, // $1.00 USD
      tax_behavior: 'exclusive',
    });

    console.log('✅ Price created:');
    console.log(`   Price ID: ${price.id}`);
    console.log(`   Amount: $${(price.unit_amount! / 100).toFixed(2)} USD\n`);

    console.log('📋 Environment variable to set:');
    console.log(`   STRIPE_COURSE_PRICE_ID=${price.id}\n`);

    console.log('✨ Setup complete! Add the Price ID to your .env.local file.');
  } catch (error) {
    console.error('❌ Error creating Stripe Product/Price:');
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

setupStripePrice();
