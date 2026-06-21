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
    console.log('🚀 Creating Stripe Product and Prices...\n');

    // Create Product
    const product = await stripe.products.create({
      name: 'Freelance Web Design & Development Course',
      description: 'Complete freelance web design and development course with 47 lessons',
    });

    console.log('✅ Product created:');
    console.log(`   Product ID: ${product.id}\n`);

    // Create USD Price
    const priceUSD = await stripe.prices.create({
      product: product.id,
      currency: 'usd',
      unit_amount: 100, // $1.00 USD
      tax_behavior: 'exclusive',
    });

    console.log('✅ USD Price created:');
    console.log(`   Price ID: ${priceUSD.id}`);
    console.log(`   Amount: $${(priceUSD.unit_amount! / 100).toFixed(2)} USD\n`);

    // Create BRL Price
    const priceBRL = await stripe.prices.create({
      product: product.id,
      currency: 'brl',
      unit_amount: 500, // R$5.00 BRL
      tax_behavior: 'exclusive',
    });

    console.log('✅ BRL Price created:');
    console.log(`   Price ID: ${priceBRL.id}`);
    console.log(`   Amount: R$${(priceBRL.unit_amount! / 100).toFixed(2)} BRL\n`);

    console.log('📋 Environment variables to set:');
    console.log(`   STRIPE_COURSE_PRICE_ID_USD=${priceUSD.id}`);
    console.log(`   STRIPE_COURSE_PRICE_ID_BRL=${priceBRL.id}\n`);

    console.log('✨ Setup complete! Add both Price IDs to your .env.local file.');
  } catch (error) {
    console.error('❌ Error creating Stripe Product/Prices:');
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

setupStripePrice();
