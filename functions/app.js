require('dotenv').config();

const paypalClientId = process.env.PAYPAL_CLIENT_ID;

function loadPayPalSDK() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=PHP`;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}


module.exports = {
  loadPayPalSDK,
  createDonationOrder: async (amount, currency) => {
    // In a real app, you would call your backend API here
    console.log(`Creating donation order for ${amount} ${currency}`);
    return { id: 'simulated_order_id' };
  },
  captureDonation: async (orderId) => {
    // In a real app, you would call your backend API here
    console.log(`Capturing donation with order ID: ${orderId}`);
    return { status: 'COMPLETED' };
  }
};