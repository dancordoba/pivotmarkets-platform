/**
 * Cryptocurrency payment service using NOWPayments API
 * Supports XRP and 200+ other cryptocurrencies
 * Documentation: https://documenter.getpostman.com/view/7907941/S1a32n38
 */

import axios from 'axios';

const NOWPAYMENTS_API_URL = 'https://api.nowpayments.io/v1';
const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY;

interface PaymentRequest {
  price_amount: number;
  price_currency: string; // USD, EUR, etc.
  pay_currency?: string; // XRP, BTC, ETH, etc. (optional - user can choose)
  order_id?: string;
  order_description?: string;
  ipn_callback_url?: string;
  success_url?: string;
  cancel_url?: string;
}

interface PaymentResponse {
  payment_id: string;
  payment_status: string;
  pay_address: string;
  price_amount: number;
  price_currency: string;
  pay_amount: number;
  pay_currency: string;
  order_id?: string;
  order_description?: string;
  payment_url: string;
  created_at: string;
  updated_at: string;
}

/**
 * Get list of available cryptocurrencies
 */
export async function getAvailableCurrencies() {
  try {
    const response = await axios.get(`${NOWPAYMENTS_API_URL}/currencies`, {
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
      },
    });
    return { success: true, currencies: response.data.currencies };
  } catch (error) {
    console.error('[Crypto] Failed to get currencies:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Create a cryptocurrency payment
 */
export async function createPayment(data: PaymentRequest): Promise<{ success: boolean; payment?: PaymentResponse; error?: string }> {
  try {
    if (!NOWPAYMENTS_API_KEY) {
      throw new Error('NOWPAYMENTS_API_KEY not configured');
    }

    const response = await axios.post<PaymentResponse>(
      `${NOWPAYMENTS_API_URL}/payment`,
      data,
      {
        headers: {
          'x-api-key': NOWPAYMENTS_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    return { success: true, payment: response.data };
  } catch (error: any) {
    console.error('[Crypto] Failed to create payment:', error.response?.data || error);
    return { success: false, error: error.response?.data?.message || String(error) };
  }
}

/**
 * Get payment status
 */
export async function getPaymentStatus(paymentId: string) {
  try {
    const response = await axios.get(`${NOWPAYMENTS_API_URL}/payment/${paymentId}`, {
      headers: {
        'x-api-key': NOWPAYMENTS_API_KEY,
      },
    });
    return { success: true, payment: response.data };
  } catch (error) {
    console.error('[Crypto] Failed to get payment status:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Get minimum payment amount for a currency
 */
export async function getMinimumAmount(currencyFrom: string, currencyTo: string) {
  try {
    const response = await axios.get(
      `${NOWPAYMENTS_API_URL}/min-amount`,
      {
        params: { currency_from: currencyFrom, currency_to: currencyTo },
        headers: {
          'x-api-key': NOWPAYMENTS_API_KEY,
        },
      }
    );
    return { success: true, minAmount: response.data.min_amount };
  } catch (error) {
    console.error('[Crypto] Failed to get minimum amount:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Estimate price in cryptocurrency
 */
export async function estimatePrice(amount: number, currencyFrom: string, currencyTo: string) {
  try {
    const response = await axios.get(
      `${NOWPAYMENTS_API_URL}/estimate`,
      {
        params: {
          amount,
          currency_from: currencyFrom,
          currency_to: currencyTo,
        },
        headers: {
          'x-api-key': NOWPAYMENTS_API_KEY,
        },
      }
    );
    return { success: true, estimate: response.data };
  } catch (error) {
    console.error('[Crypto] Failed to estimate price:', error);
    return { success: false, error: String(error) };
  }
}
