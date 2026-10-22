# KunyahKunyah — Next.js Jastip Budget MVP

A mobile-first jastip storefront with editable product prices, descriptions, persuasive promo copy, budget tracker, cart, WhatsApp checkout, order-text copy, out-of-stock flags, bank transfer and QRIS details, and a local admin demo.

## Getting started

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Publish to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository.
3. Keep Framework Preset **Next.js** and click **Deploy**.
4. Open the Admin tab → **Pengaturan toko** and set WhatsApp number (international format, e.g. 62812...), bank account details, and an optional public QRIS image URL.
5. In Admin → **Produk & copywriting**, replace the sample catalog, images, prices, descriptions, and selling copy.

## IMPORTANT: read before accepting real orders

This is a **front-end demo**, NOT a production-ready multi-user order management system.

- Product/config/cart/order data is saved in the **current browser's localStorage only**. A customer opening the Vercel URL will not receive product edits made in your browser, and customer orders will not appear in your admin's rekap. The included sample products are hard-coded default data.
- **Admin is not authenticated or protected**. Do not treat it as a private admin panel. Production requires authentication/authorization and server-side validation.
- Copying or opening WhatsApp saves an order **only locally**; it doesn't confirm sending, inventory, or payment. WhatsApp message must be sent manually by the customer.
- Inventory is a yes/no marker rather than a synchronized stock count.
- Payment uses manually displayed bank/QRIS data; no payment verification/integration.
- Remote image URLs require public availability.

### Recommended production upgrade

Connect Supabase (Postgres + Auth + Storage) or another managed DB, protect `/admin` with server-side authentication, move product/config/order CRUD to API/server actions, preserve orders and stock centrally, and validate stock and totals on the server. Optionally add Midtrans/Xendit for payment links, store QRIS securely, and enable customer order statuses. Be mindful of consent and privacy for customer WhatsApp numbers.

## Customize sample defaults

Update `demoProducts` and `defaultConfig` in `app/page.tsx`. To clear old browser demo data, use Admin → Pengaturan toko → Reset data demo.
