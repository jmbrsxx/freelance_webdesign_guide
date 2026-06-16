'use client';

import React, { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

interface PaymentFormProps {
  amount: number;
  courseTitle: string;
  email: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function PaymentForm({
  amount,
  courseTitle,
  email,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe not loaded');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Step 1: Create payment intent on backend (secret key stays safe)
      const paymentResponse = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          courseTitle,
        }),
      });

      if (!paymentResponse.ok) {
        const errorData = await paymentResponse.json();
        throw new Error(errorData.error || 'Failed to create payment');
      }

      const { clientSecret } = await paymentResponse.json();

      // Step 2: Confirm payment with card details
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        throw new Error('Card element not found');
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email,
          },
        },
      });

      if (result.error) {
        setError(result.error.message || 'Payment failed');
        onError?.(result.error.message || 'Payment failed');
      } else if (result.paymentIntent?.status === 'succeeded') {
        console.log('✅ Payment successful:', result.paymentIntent.id);
        onSuccess?.();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Payment failed';
      setError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-white p-4 rounded border border-gray-300">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded">
        <p className="text-sm text-gray-600">
          <strong>Amount:</strong> ${amount.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Course:</strong> {courseTitle}
        </p>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  );
}
