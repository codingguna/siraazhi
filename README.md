# 🌿 Siraazhi (சிறாழி) — Authentic Cold-Pressed Oils & Organic Wellness Platform

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.71-orange?style=for-the-badge&logo=oxc&logoColor=white)](https://oxc.rs/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**Siraazhi (சிறாழி)** is a modern, high-performance web platform for an authentic South Indian cold-pressed oil and organic wellness brand. Siraazhi blends ancient traditional heritage—such as native **Vagai Wood Marachekku (மரச்செக்கு)** oil extraction—with a state-of-the-art e-commerce & B2B digital experience built using **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🌟 Key Features

### 🌐 Dynamic Bilingual Experience (English & Tamil)
- **Instant Language Toggle**: Seamlessly switch between **English** and **Tamil (தமிழ்)** across all store sections, headers, product cards, checkout drawers, and admin views without reloading.
- **Localized Content**: Complete native translation dataset covering product descriptions, nutrition specs, recipes, trust badges, and B2B pricing calculators.

### 🛍️ Interactive Product Catalog & Quick Cart
- **Categorized Storefront**: Explore traditional cold-pressed oils (Coconut, Sesame, Groundnut), sulfur-free raw seeds (Copra, Peanuts, Black Sesame), and curated trio combo packs.
- **Variant Selector & Pricing**: Dynamic variant selection (500 ml, 1 Litre, 5 Litre Cans, 1 Kg to 50 Kg Jute Bags) with real-time price & savings calculation.
- **Nutrition & Smoke Point Insights**: Transparency metrics for every item, including fat composition, smoke point, and recommended cooking/Ayurvedic uses.

### 🪵 Traditional Marachekku Process Visualizer
- **4-Step Craftsmanship Timeline**: Step-by-step interactive visualizer illustrating copra sun-drying, Vagai wood-pressing without heat, zero-chemical filtration, and eco-friendly bottling.
- **Quality Assurances**: Clear verification badges for 0% sulfur, 0g trans fats, cold-extracted purity, and farm-direct sourcing.

### 💚 Health & Wellness Guide
- **Cold-Pressed vs. Refined Comparison**: Comprehensive chart comparing nutritional retention, Lauric acid, Vitamin E, free fatty acids, and heat degradation.
- **Ayurvedic Routine Tips**: Guidance for traditional Oil Pulling, Abhyanga oil bath, and culinary uses.

### 🍲 Authentic South Indian Recipes
- **Curated Culinary Pairings**: Traditional recipes (e.g., *Kara Kuzhambu*, *Ellu Podi Dip*, *Deep Fried Snacks*) paired with the ideal Siraazhi oil for optimal taste and wellness.
- **Step-by-Step Cooking Instructions**: Complete ingredients list and preparation instructions.

### 🏬 B2B & Wholesale Inquiry Portal
- **Interactive Volume Calculator**: Real-time volume estimation (100L to 5000L+) with automatic tier-based wholesale discount breakdown (10% to 25% OFF).
- **Custom Packaging Options**: Bulk choices including 15L Tins, 200L HDPE Barrels, and Custom White-Label OEM branding.
- **Instant Quote Requests**: Built-in inquiry form with toast feedback and automatic lead capture.

### 🛒 Slide-Over Shopping Cart & Multi-Step Checkout
- **Real-Time Cart Drawer**: Quick quantity adjustments, item removal, cart clear, and price breakdown (Subtotal, GST, Delivery fees, Discounts).
- **Multi-Step Order Placement**: Integrated checkout modal supporting address collection, delivery speeds (Standard Express, Same-day Fresh), payment options (UPI, GPay/PhonePe, Card, Cash on Delivery), and victory confetti animation on order completion.

### 🔑 Integrated Admin Management Dashboard
- **Admin Switcher**: Switch between Customer Storefront and Store Admin Dashboard with one click from the header.
- **Business Metrics**: At-a-glance KPI stats (Total Revenue, Active Orders, Wholesale Leads, Low Stock Warnings).
- **Order Pipeline & Status Tracker**: Manage customer orders with live status toggles (*Pending*, *Processing*, *Shipped*, *Delivered*).
- **Inventory & Lead Manager**: Real-time stock level updates and B2B quote lead inspection.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | **React 19** (`react`, `react-dom`) | Component-based UI engine & state management |
| **Build Tooling** | **Vite 8** (`vite`, `@vitejs/plugin-react`) | Lightning-fast HMR and optimized production bundling |
| **Styling & Design** | **Tailwind CSS v4** (`@tailwindcss/vite`) | Utility-first CSS & custom botanical color tokens |
| **Icons** | **Lucide React** (`lucide-react`) | Modern UI icons |
| **Visual Effects** | **Canvas Confetti** (`canvas-confetti`) | Interactive celebration animations on checkout |
| **Linting** | **Oxlint** (`oxlint`) | Ultra-fast JS/JSX code linting |

---

## 📂 Directory Structure

```
siraazhi/
├── public/                    # Static assets & public media files
│   └── assets/                # High-res product images & diagrams
├── src/
│   ├── components/            # Modular React UI components
│   │   ├── AdminDashboard.jsx    # Store management, inventory & order tracking
│   │   ├── CartDrawer.jsx        # Slide-over cart drawer & multi-step checkout
│   │   ├── CustomerReviews.jsx   # Ratings, reviews & feedback submission modal
│   │   ├── Footer.jsx            # Multi-column footer & quick navigation
│   │   ├── HealthBenefits.jsx    # Cold-pressed vs Refined comparison table
│   │   ├── HeroSection.jsx       # Hero banner with call-to-action buttons
│   │   ├── Navbar.jsx            # Dynamic header with lang toggle & cart counter
│   │   ├── ProcessVisualizer.jsx # 4-step Marachekku timeline visualizer
│   │   ├── ProductCatalog.jsx    # Product cards, category filters & variant pickers
│   │   ├── RecipesSection.jsx    # South Indian culinary recipes & pairings
│   │   ├── TrustBadges.jsx       # Certifications & quality assurances
│   │   └── WholesalePortal.jsx   # B2B volume calculator & quote request form
│   ├── data/                  # Static datasets & localization
│   │   ├── products.js           # Full catalog dataset, variants & nutritional specs
│   │   └── translations.js       # English & Tamil translation dictionaries
│   ├── App.css                # App-level layout rules
│   ├── App.jsx                # Root app container & global state handler
│   ├── index.css              # Custom CSS design system, fonts & Tailwind imports
│   └── main.jsx               # Application entrypoint
├── .oxlintrc.json             # Oxlint configuration
├── index.html                 # Main HTML document & meta tags
├── package.json               # Dependencies & build scripts
├── vite.config.js             # Vite configuration with Tailwind CSS plugin
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 1. Installation
Clone the repository and install the project dependencies:
```bash
# Clone the repository
git clone https://github.com/codingguna/siraazhi.git

# Navigate to project directory
cd siraazhi

# Install node dependencies
npm install
```

### 2. Run Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### 3. Build for Production
To build the application for production deployment:
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 4. Preview Production Build
To locally test the production build bundle:
```bash
npm run preview
```

### 5. Linting Codebase
Run Oxlint to check code quality and static analysis rules:
```bash
npm run lint
```

---

## 🎨 Design System & Aesthetics

Siraazhi uses a custom botanical design system configured via CSS custom properties in `src/index.css`:

- **Primary Colors**: Deep Forest Green (`#1b4332`), Mid Leaf (`#2d6a4f`), Soft Mint (`#d8f3dc`)
- **Accent Colors**: Warm Gold (`#d4a017`), Bright Gold (`#f4c430`), Cream Gold (`#fdf6e2`)
- **Backgrounds**: Eco Organic Cream (`#faf6ee`), Pure White (`#ffffff`), Subtle Sand (`#f4eee1`)
- **Typography**: 
  - Headings: `Outfit` & `Playfair Display`
  - Body: `Plus Jakarta Sans`
- **UI Elements**: Glassmorphism (`.glass-panel`, `.glass-dark`), smooth hover lifts (`.hover-lift`), custom scrollbars, and toast alerts.

---

## 📄 License

This project is licensed under the **MIT License**.

---

Designed with ❤️ for authentic South Indian wellness and sustainable agriculture.
