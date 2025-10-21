# 🌍 My Touristic Site - Rwanda Safari Experience

A modern, responsive tourism website showcasing Rwanda's beautiful safari destinations, built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This project is a full-featured Single Page Application (SPA) for a tourism company specializing in Rwandan safari experiences. The application demonstrates professional React development practices with proper routing, component architecture, and reusable design patterns.

## ✨ Features

- **🧭 Client-Side Routing** - Seamless navigation using React Router DOM
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🎨 Reusable Components** - DRY principles with prop-driven architecture
- **⚡ Fast Performance** - Built with Vite for lightning-fast HMR
- **🔍 Type Safety** - TypeScript for robust code quality
- **🎯 SEO Ready** - Configured for deployment with proper routing fallbacks

## 📋 Project Checks ✅

### ✅ Makes use of routing properly
- Implements React Router DOM v6 with proper route configuration
- Client-side navigation using `Link` components (no page reloads)
- Configured with `vercel.json` for SPA routing on deployment
- All routes properly defined in `App.tsx`

### ✅ Components breakdown is clear
```
src/
├── components/          # Reusable UI components
│   ├── Footer.tsx      # Site footer with contact info
│   ├── Form.tsx        # Contact form component
│   ├── GuestInfo.tsx   # Booking info component (reusable)
│   ├── Hero.tsx        # Hero section (prop-driven)
│   ├── Navigation.tsx  # Main navigation with mobile menu
│   ├── Plans.tsx       # Tour packages display
│   └── TopNav.tsx      # Top navigation bar
├── pages/              # Route-level components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Gallery.tsx     # Image gallery
│   └── Package.tsx     # Tour packages page
└── App.tsx             # Router configuration
```

### ✅ Components are reusable
- **Hero Component**: Accepts `title`, `currentPage`, and `backgroundImage` props
- **GuestInfo Component**: Customizable with `buttonColor`, `buttonHoverColor`, and `textColor` props
- **Navigation Component**: Shared across all pages with React Router integration
- **Footer Component**: Single source of truth for footer content
- All components follow PascalCase naming conventions

### ✅ Code duplication is avoided
- Shared layouts (TopNav, Navigation, Footer) used across all pages
- Hero section parameterized instead of duplicated
- Consistent styling patterns using Tailwind utility classes
- TypeScript interfaces for type reusability

### ✅ Design is pixel perfect
- Responsive design with Tailwind CSS breakpoints
- Consistent color scheme (teal-900, yellow-600)
- Mobile-first approach with hamburger menu
- Smooth transitions and hover effects
- Grid layouts for gallery and packages
- Proper spacing and typography hierarchy

## 🛠️ Tech Stack

- **React 18.3** - Modern React with hooks
- **TypeScript 5.6** - Type-safe development
- **Vite 5.0** - Next-generation frontend tooling
- **React Router DOM 6.27** - Declarative routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons** - Icon library
- **Heroicons** - Additional icon set

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/solonkonora/my-touristic-site.git

# Navigate to project directory
cd my-touristic-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**
2. **Connect repository to Vercel**
3. **Vercel auto-detects Vite configuration**
4. **Deploy!**

Build configuration:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite

The `vercel.json` file ensures all routes redirect to `index.html` for proper SPA routing.

## 📁 Project Structure

```
my-touristic-site/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Page components
│   ├── assets/         # Assets processed by Vite
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── vercel.json         # Vercel deployment config
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Design Principles

- **Component Reusability**: Props-based customization
- **Type Safety**: TypeScript interfaces for all components
- **Responsive First**: Mobile-to-desktop design approach
- **Performance**: Optimized builds with code splitting
- **Maintainability**: Clear folder structure and naming conventions

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Author

**Repository**: [solonkonora/my-touristic-site](https://github.com/solonkonora/my-touristic-site)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Vite for blazing-fast development experience
- Rwanda tourism for inspiration

---

**Built with ❤️ for exploring the Land of a Thousand Hills**