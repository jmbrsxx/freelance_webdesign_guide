import path from 'path';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config({
  path: path.resolve(process.cwd(), '.env.local'),
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-05-27.dahlia',
});

interface PriceConfig {
  currency: string;
  unit_amount: number;
  label: string;
}

const priceConfigs: PriceConfig[] = [
  { currency: 'usd', unit_amount: 2700, label: 'USD' },
  { currency: 'gbp', unit_amount: 2100, label: 'GBP' },
  { currency: 'cad', unit_amount: 3700, label: 'CAD' },
  { currency: 'aud', unit_amount: 4100, label: 'AUD' },
  { currency: 'eur', unit_amount: 2500, label: 'EUR' },
  { currency: 'brl', unit_amount: 15000, label: 'BRL' },
  { currency: 'inr', unit_amount: 220000, label: 'INR' },
  { currency: 'aed', unit_amount: 9900, label: 'AED' },
];

async function setupStripePrices() {
  try {
    console.log('🚀 Creating Stripe Product and Multi-Currency Prices...\n');

    // Create Product
    const product = await stripe.products.create({
      name: 'Freelance Web Design & Development Course',
      description: 'Complete freelance web design and development course with 47 lessons',
    });

    console.log('✅ Product created:');
    console.log(`   Product ID: ${product.id}\n`);

    // Create Prices for each currency
    console.log('📋 Creating prices for each currency:\n');
    
    for (const config of priceConfigs) {
      const price = await stripe.prices.create({
        product: product.id,
        currency: config.currency,
        unit_amount: config.unit_amount,
        tax_behavior: 'exclusive',
      });

      console.log(`${config.label} Price ID: ${price.id}`);
    }

    console.log('\n✨ Setup complete!');
    console.log('\n📋 Add these to your .env.local file:');
    console.log(`STRIPE_COURSE_PRODUCT_ID=${product.id}\n`);
    console.log('Then create prices by running this script and copying the Price IDs above.');
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

setupStripePrices();
