# Bandage E-Commerce

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, responsive full-featured E-commerce application built with **React**, **Redux**, and **Tailwind CSS**. This project features a robust shopping cart with persistence, user authentication flows, and a polished UI component library.

## 🚀 Features

- **Responsive Design:** Mobile-first approach ensuring perfect layout on all devices (Mobile, Tablet, Desktop).
- **State Management:** Centralized state using **Redux** with **Redux Thunk** for asynchronous operations.
- **Shopping Cart:** 
  - Persistent cart state using LocalStorage.
  - Manual quantity input with validation (1-9999).
  - Real-time total calculation.
- **Product Management:** dynamic product listing, detail pages, and category filtering.
- **Modern UI/UX:** 
  - Custom component library (Header, HeroSlider, InfiniteClients, etc.).
  - Interactive UI elements with **Lucide React** icons.
  - Toast notifications via **React Toastify**.
- **Forms:** Form handling and validation using **React Hook Form**.

## 🛠️ Tech Stack

### Core
- **Framework:** [React 19](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM v5](https://v5.reactrouter.com/)

### State Management & Data
- **Redux:** [Redux](https://redux.js.org/) & [React Redux](https://react-redux.js.org/)
- **Middleware:** Redux Thunk & Redux Logger
- **HTTP Client:** [Axios](https://axios-http.com/)

### Styling & UI
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📦 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/AliYcll/e-commerce.git
cd e-commerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ by **Ali Yücel**
