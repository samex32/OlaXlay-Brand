
import { CartItem } from "../types";

interface NotificationDetails {
  customerEmail: string;
  amount: number;
  paymentMethod: string;
  cartItems: CartItem[];
  orderId: string;
}

/**
 * Dispatches a detailed order notification to the Administrator.
 * In production, replace the 'placeholder' URL with a real webhook from 
 * services like Zapier, Make.com, or a backend endpoint.
 */
export const sendPaymentNotification = async (details: NotificationDetails): Promise<boolean> => {
  const timestamp = new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' });
  
  // Construct a beautiful text-based manifest for the email body
  const itemManifest = details.cartItems
    .map(item => `• ${item.name} (${item.category}) | Qty: ${item.quantity} | ${item.price.toLocaleString()} NGN`)
    .join('\n');

  const payload = {
    subject: `[OLA X LAY ORDER] ${details.orderId} - New Acquisition`,
    admin_notify: "admin@olaxlay.com",
    order_id: details.orderId,
    customer_email: details.customerEmail,
    total_amount: `${details.amount.toLocaleString()} NGN`,
    payment_method: details.paymentMethod.toUpperCase(),
    order_timestamp: timestamp,
    manifest: itemManifest,
    raw_items: details.cartItems
  };

  console.log("%c[Atelier Notification System] Dispatching Manifest...", "color: #fbbf24; font-weight: bold;");
  console.table(payload);

  try {
    // This fetch simulates the call to your email dispatch microservice or webhook
    const response = await fetch('https://formspree.io/f/placeholder', { // Replace with your actual endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Simulate network latency for the "luxury" experience
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return true;
  } catch (error) {
    console.error("[Notification Error] Failed to reach dispatch server:", error);
    // Return true to avoid blocking the customer success flow even if admin notification fails
    return true;
  }
};
