# PowerNest E-commerce Platform

PowerNest is a high-performance, full-stack e-commerce solution built with the latest web technologies. It features a comprehensive suite of tools for customers, support staff, and administrators, designed to deliver a premium user experience and robust backend management.

## 🚀 Teck Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PostgreSQL (Vercel Postgres)](https://vercel.com/docs/storage/vercel-postgres)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ✨ Key Features

### 👤 Multi-Role Ecosystem
- **Customer Portal**: Personalized dashboard, order tracking, and product reviews.
- **Support Staff Dashboard**: Advanced ticketing system, inventory management, and return processing.
- **Admin Command Center**: Complete oversight of users, products, orders, and system settings.

### 🛒 E-commerce Engine
- **Searchable Selectors**: Optimized UI for filtering hospitals, services, and products.
- **Dynamic Cart**: Real-time cart updates and secure checkout flow.
- **Flexible Payments**: Support for multiple payment methods, including M-Pesa and Card.
- **Order Tracking**: Detailed 5-step progress tracking for every order.

### 🛠️ Backend & Security
- **Robust Schema**: A comprehensive PostgreSQL schema with 23+ models.
- **Audit Logging**: Comprehensive tracking of all critical system actions for compliance and security.
- **2FA Support**: Ready for Two-Factor Authentication.
- **Soft Delete**: Data safety with soft-deletion policies across critical models.

## 📁 Project Structure

```text
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── src/
    ├── app/              # Next.js App Router (Pages, Layouts)
    │   ├── admin/        # Admin dashboard pages
    │   ├── support-staff/# Staff management pages
    │   └── auth/         # Authentication flows
    ├── components/       # Reusable React components
    │   ├── layout/       # Navigation, Sidebars, Header
    │   └── ui/           # Shared Shadcn UI components
    └── lib/              # Utility functions and shared logic
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:WinterJackson/powernest-.git
   cd powernest-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory and add your database URL:
   ```env
   DATABASE_URL="postgresql://..."
   DIRECT_URL="postgresql://..."
   ```

4. **Initialize the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is private and for internal use only.
