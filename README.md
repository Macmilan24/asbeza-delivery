# Asbeza Delivery

Asbeza Delivery is a minimalist and user-friendly grocery ordering web application. The platform allows users to browse through grocery stores, select products, and place orders for next-day delivery. The app is designed for ease of use, focusing on accessibility for users of all ages, primarily targeting parents and families.

## Features

- **Search Functionality:** Quickly search for products from multiple stores.
- **Today's Best Prices:** A section displaying the best deals on groceries.
- **Product Listings:** View products from various stores with the ability to compare prices.
- **Order Tracking:** Track the status of your order from placement to delivery.
- **Delivery Management:** Assign orders to the nearest delivery person based on location.
- **Recommendations:** Smart suggestions for products based on previous purchases.
- **Cart and Checkout:** Manage items in your cart and proceed through a simple checkout process.
- **Payment Integration:** Supports Telebirr and CBE payments for seamless transactions.

## Tech Stack

- **Frontend:** Next.js (React)
- **Backend:** Firebase
- **Authentication:** Clerk
- **Payments:** Telebirr, CBE
- **Deployment:** Vercel (for development), AWS (for production)
- **Styling:** Tailwind CSS, Material UI

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- Firebase CLI
- Vercel CLI (optional, for development deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Macmilan24/asbeza-delivery.git
   cd asbeza-delivery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of your project and add your Firebase, Clerk, Telebirr, and CBE API keys:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
   NEXT_PUBLIC_CLERK_API_KEY=your-clerk-api-key
   NEXT_PUBLIC_TELEBIRR_API_KEY=your-telebirr-api-key
   NEXT_PUBLIC_CBE_API_KEY=your-cbe-api-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Deployment

For development, the app can be deployed using Vercel:

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

For production deployment, use AWS for hosting:

- Refer to AWS documentation on [hosting a Next.js app](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-nextjs.html).

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Contact

For any inquiries or issues, please contact Samuel Dagng at [cpt.macmilan24@gmail.com].
