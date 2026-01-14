# 🛍️ Bandage E-Commerce

![Project Status](https://img.shields.io/badge/status-active-success.svg?style=flat&logo=git)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)
![React](https://img.shields.io/badge/react-19.0-61dafb.svg?style=flat&logo=react)
![Redux](https://img.shields.io/badge/redux-5.0-764abc.svg?style=flat&logo=redux)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1-38b2ac.svg?style=flat&logo=tailwindcss)

**Bandage** is a robust, full-featured E-commerce frontend application built to deliver a seamless shopping experience. It combines modern design principles with powerful state management to handle complex user flows like authentication, product filtering, and persistent cart operations.

---

## � Table of Contents

- [🚀 Key Features](#-key-features)
- [📦 Project Structure](#-project-structure)
- [🏗️ Component Architecture](#-component-architecture)
- [💾 State Management](#-state-management)
- [🛠️ Tech Stack](#-tech-stack)
- [💻 Installation & Setup](#-installation--setup)
- [🤝 Contributing](#-contributing)

---

## 🚀 Key Features

### 🛒 Advanced Shopping Cart
- **Persistence:** Cart data is automatically saved to `LocalStorage`, ensuring users don't lose their items on refresh.
- **Manual Input Controls:** Users can type specific quantities directly into input fields or use stepper buttons.
- **Smart Validation:** Inputs enforce positive integers (1-9999) and handle empty states gracefully.
- **Real-time Totals:** Automatic calculation of subtotal and grand total.

### 🔐 User Experience & Auth
- **Authentication:** Integrated Login and Registration flows using Redux for user session management.
- **Responsive Layouts:** Mobile-first design using Tailwind CSS grid and flexbox utilities.
- **Interactive UI:** 
  - Dynamic **Hero Slider** for featured content.
  - **Shop Page** with category inputs and product grids.
  - **Product Detail** pages with rich imagery and descriptions.

### ⚡ Performance & Quality
- **Optimized Builds:** Powered by Vite for instant Hot Module Replacement (HMR) and efficient production builds.
- **Form Handling:** Robust validation using `react-hook-form`.
- **Toast Notifications:** Instant feedback for user actions (success/error messages) via `react-toastify`.

### 4. 📜 Order Management
- **Order History:** Users can view their past orders, including product details and total amounts.
- **Product Navigation:** Clickable product items in order history redirect to the respective product detail page.
- **Localization:** Full English support and currency standardization ($).

---

## 📦 Project Structure

```text
src/
├── api/                # Axios instance and API interaction layers
├── assets/             # Static assets (images, global styles)
├── components/         # Reusable UI components
│   ├── common/         # Buttons, inputs, generic wrappers
│   ├── home/           # Homepage-specific widgets (Hero, EditorsPick)
│   ├── layout/         # Header, Footer, Page layouts
│   ├── product/        # Product cards, lists, and detail views
│   └── shop/           # Shop page filters, cart dropdowns
├── pages/              # Route components (HomePage, CartPage, LoginPage, etc.)
├── store/              # Redux setup
│   ├── actions/        # Thunk (async) and synchronous actions
│   ├── reducers/       # Slice reducers (client, product, cart)
│   └── store.js        # Store configuration and persistence middleware
├── App.jsx             # Main application component & Routing
└── main.jsx            # Entry point
```

---

## 🏗️ Component Architecture

The application follows a **Atomic Design** inspired approach, separating generic UI elements from domain-specific business logic.

- **Layout Components:** `Header` and `Footer` provide consistent navigation wrapper around `pages`.
- **Smart vs. Dumb Components:**
  - **Smart (Container):** Connect to Redux (e.g., `ProductOverview`, `CartDropdown`).
  - **Dumb (Presentational):** Receive data via props (e.g., `ProductCard`, `TeamCard`).
- **Cart System:**
  - `CartDropdown`: A mini-view available in the header for quick access.
  - `CartPage`: A full-page detailed view for reviewing orders before checkout.

---

## 💾 State Management

We use **Redux** with **Redux Thunk** for asynchronous side effects. The global state is divided into three main slices:

1.  **`client`**
    *   Holds user authentication status `user`, `token`.
    *   Manages login/register loading states and errors.

2.  **`product`**
    *   Stores fetched product lists `productList`.
    *   Manages pagination, sorting, and category filters.
    *   Handles "fetching" states (`FETCH_STATES.FETCHING`, `FETCHED`, `FAILED`).

3.  **`shoppingCart`**
    *   **`cart`**: Array of items `{ count, product }`.
    *   **`payment`**: Payment method details.
    *   **`address`**: User shipping address.
    *   *Note: This slice persists to LocalStorage.*

---

## 🛠️ Tech Stack

| Category | Technology | Usage |
|----------|------------|-------|
| **Core** | React 19 | Component capability |
| **Build** | Vite | Dev server & bundler |
| **State** | Redux + Thunk | Global state mgmt |
| **Styling** | Tailwind CSS v4 | Utility-first styling |
| **Routing** | React Router DOM v5 | Client-side routing |
| **Icons** | Lucide React | Modern SVG icons |
| **Types** | JavaScript (ES6+) | Application logic |

---

##  Installation & Setup

Prerequisites: Node.js (v18+) and npm.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AliYcll/e-commerce.git
    cd e-commerce
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  Open an **Issue** to discuss the proposed change.
2.  Fork the repo and create a `feature/your-feature-name` branch.
3.  Commit your changes following **Conventional Commits** (e.g., `feat: add wishlist`).
4.  Submit a **Pull Request**.

---

## ⚠️ Disclaimer

This project is for educational purposes and was developed with the assistance of AI.

---

Made with ❤️ by **Ali Yücel**
