#  Bandage E-Commerce

A frontend-focused e-commerce application built to practice real-world shopping flows such as authentication, cart management, product listing, and state management. The project emphasizes clean component structure, predictable state handling, and practical frontend architecture.

---

## Overview

This project was developed as a hands-on learning and portfolio project. It simulates the core behaviors of a typical e-commerce platform, including login flow, product navigation, cart persistence, and order history. The goal is not to over-engineer the system, but to demonstrate practical frontend development skills with maintainable structure.

---

## Demo Login Information

This project works with a predefined backend structure. **New user registration is disabled.** Only the following users can log in:

* [customer@commerce.com](mailto:customer@commerce.com)
* [store@commerce.com](mailto:store@commerce.com)
* [admin@commerce.com](mailto:admin@commerce.com)

Password for all users:

* 123456

---

## Key Features

### Shopping Cart

* Cart data persists via LocalStorage
* Quantity can be updated manually or via buttons
* Validation prevents invalid values
* Subtotal and total are calculated automatically

### Authentication Flow

* Login handled through Redux state
* User session stored globally
* Role-based behavior supported by backend structure

### UI and UX

* Responsive layout using Tailwind CSS
* Homepage sections (hero, categories, featured products)
* Product listing and product detail pages
* Cart page and order history page

### Forms and Feedback

* Form validation with react-hook-form
* Toast notifications with react-toastify
* Error and success feedback for user actions

---

## Project Structure

src/
api/ → Axios and API logic
assets/ → Images and static files
components/ → Reusable UI components
pages/ → Route-based pages
store/ → Redux store, reducers, actions
App.jsx → Routing
main.jsx → Entry point

The structure is designed to keep UI components, page logic, and state management clearly separated.

---

## State Management

Redux + Thunk is used for global state management. The store is divided into logical areas:

client: authentication state (user, token)
product: product list, filters, pagination
shoppingCart: cart items, address, payment data (persisted to LocalStorage)

This structure makes the app predictable and easier to debug as it grows.

---

## Tech Stack

React (with Vite)
Redux + Redux Thunk
Tailwind CSS
React Router DOM
JavaScript (ES6+)
Postman (for API testing during development)

---

## Installation & Setup

Clone the repository:

git clone [https://github.com/AliYcll/e-commerce.git](https://github.com/AliYcll/e-commerce.git)
cd e-commerce

Install dependencies:

npm install

Run the project:

npm run dev

Open in browser:

[http://localhost:5173](http://localhost:5173)

---

## Purpose

This project was built to strengthen practical frontend development skills, including:

* Component-based UI development
* State management with Redux
* Handling real-world UI flows
* Structuring a medium-sized React application
* Writing cleaner and more maintainable code

---

## Disclaimer

This project was built for educational and portfolio purposes.
AI tools were occasionally used as a development aid, while all architectural decisions and implementation understanding belong to me.

---
