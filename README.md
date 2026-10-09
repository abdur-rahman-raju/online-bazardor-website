# 🛒 BazarDor — Online Market Price Tracker

BazarDor is a responsive web application that helps users explore daily prices of essential products in Bangladesh. Users can browse products, compare market prices, view price changes, and access detailed product information through a simple and user-friendly interface.

## 🌟 Features

* **Daily Product Prices:** Browse essential products and their latest available prices.
* **Price Change Tracking:** Identify products whose prices have increased or decreased.
* **Category Filtering:** Explore products by category.
* **Price Sorting:** Sort products from lowest to highest price or highest to lowest price.
* **Product Details:** View detailed price summaries and market-based pricing information.
* **User Authentication:** Sign up and sign in using email and password.
* **Social Authentication:** Support for Google and GitHub login.
* **Protected Routes:** Restrict access to product details for authenticated users.
* **User Profile:** View and update user information.
* **Responsive Design:** Enjoy a smooth experience on mobile, tablet, and desktop devices.
* **Loading and Notifications:** Provide loading states and helpful success or error messages.
* **Custom 404 Page:** Display a friendly message for invalid routes.

## 🛠️ Technologies Used

* **Next.js** — React framework for building web applications.
* **React** — Component-based user interface development.
* **TypeScript** — Type safety and improved code maintainability.
* **Tailwind CSS** — Utility-first styling and responsive layouts.
* **DaisyUI / UI Components** — Reusable interface components.
* **Better Auth** — Authentication and session management.
* **REST API** — Fetching product and category information.
* **React Hot Toast** — User notifications.
* **Git & GitHub** — Version control and source code hosting.
* **Vercel** — Application deployment.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js and pnpm installed on your computer.


## 📁 Project Structure



## 📡 API Endpoints

Base API: `https://api.api-store.workers.dev/api/bazardor`

| Endpoint                  | Description                 |
| ------------------------- | --------------------------- |
| `/products`               | Retrieve all products       |
| `/products?category=chal` | Filter products by category |
| `/products/1`             | Retrieve a single product   |
| `/categories`             | Retrieve all categories     |
| `/categories/chal`        | Retrieve a single category  |

Alternative API: `https://api.abcz.workers.dev/api/bazardor`

## 🌐 Deployment

Deploy the application using Vercel or another supported hosting platform. Configure all required environment variables in the deployment settings before launching the application.

## ⚠️ Disclaimer

Displayed prices are indicative and may vary depending on market conditions, location, and availability. Users should verify prices with local markets before making purchasing decisions.

## 👨‍💻 Author

**Abdur Rahman Raju**

GitHub: [abdur-rahman-raju](https://github.com/abdur-rahman-raju)

---

Built with ❤️ to make everyday market price information easier to access.
