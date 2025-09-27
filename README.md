# BNP Paribas Admin Dashboard

A comprehensive admin dashboard for customer churn prediction and sales forecasting, built with Next.js, TypeScript, and Firebase. This application provides business intelligence tools for data-driven decision making.

## 🚀 Features

### 🔐 Authentication & Security
- **Firebase Authentication** - Secure admin login with email/password
- **Protected Routes** - Dashboard access restricted to authenticated users
- **Session Management** - Automatic login state management

### 📊 Business Intelligence
- **Customer Churn Prediction** - Identify customers at risk of churning
- **Sales Forecasting** - Predict future sales with confidence intervals
- **Customer Segmentation** - Group customers by churn likelihood
- **Demand Forecasting** - Optimize inventory management

### 📈 Data Visualization
- **Interactive Charts** - Line charts, bar charts, pie charts, and area charts
- **Real-time Metrics** - Key performance indicators and trends
- **Responsive Dashboards** - Mobile-friendly data visualization
- **Export Capabilities** - Download reports and data

### 🛠️ Technical Stack
- **Next.js 15.5.4** - Latest version with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Firebase** - Authentication and database
- **Recharts** - Data visualization library
- **Heroicons** - Beautiful SVG icons

## 📁 Project Structure

```
bnp-nextjs-app/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── docs/           # Documentation page
│   │   ├── features/       # Features page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── components/         # Reusable components
│       ├── Button.tsx      # Button component
│       ├── Card.tsx        # Card component
│       └── Navigation.tsx  # Navigation component
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.ts         # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bnp-nextjs-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts
- `npm run analyze` - Analyze bundle size

## 🎨 Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Project information and technology stack
- **Features** (`/features`) - Detailed feature list and performance metrics
- **Documentation** (`/docs`) - Development guides and resources
- **Contact** (`/contact`) - Contact form and information

## 🧩 Components

### Button
A reusable button component with multiple variants and sizes.

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

### Card
A flexible card component for content containers.

```tsx
<Card hover className="p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Navigation
Responsive navigation component with active state highlighting.

## 🎯 Key Features

### Performance
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Image optimization
- Code splitting
- Bundle optimization

### Developer Experience
- TypeScript for type safety
- ESLint for code quality
- Hot Module Replacement
- Modern React patterns
- Component-based architecture

### UI/UX
- Responsive design
- Dark mode support
- Accessibility features
- Modern animations
- Professional styling

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect your repository and deploy
- **Railway**: Use the Next.js template
- **Docker**: Use the included Dockerfile

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please:
- Check the documentation
- Search existing issues
- Create a new issue
- Contact the maintainers

---

Built with ❤️ using Next.js, React, and TypeScript.
