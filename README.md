# Crypto Price Tracker

## Overview
This project consists of two main parts:
1. **Web App (`/web-app/`)** - A Next.js-based cryptocurrency price tracker that fetches live data from the CoinCap API.
2. **Documentation (`/docs/`)** - A Docusaurus-based documentation site providing detailed information about the project.

---

## 📂 Folder Structure
```
crypto-tracker/
│-- web-app/          # Next.js application
│   │-- components/   # Reusable UI components (CryptoCard, Loader, etc.)
│   │-- pages/        # Next.js pages (home, API integration, etc.)
│   │-- styles/       # SCSS styles for the app
│   │-- utils/        # Helper functions, enums, and API calls
│   └-- public/       # Static assets (favicons, logos, etc.)
│
│-- docs/             # Docusaurus documentation site
│   │-- docs/         # Markdown documentation files
│   │-- src/          # Static assets and UI components for docs
│   │-- static/       # Images, logos, and additional static files
│   └-- docusaurus.config.js  # Configuration for the documentation site
```

---

## 🚀 Running the Web App (`/web-app/`)

### Prerequisites
Ensure you have **Node.js** and **Yarn** installed:
```sh
node -v  # Ensure you have Node.js installed
yarn -v  # Ensure you have Yarn installed
```

### Installation & Running the App
```sh
cd web-app
yarn install   # Install dependencies
yarn dev       # Start the development server
```
The app will run at **http://localhost:3000**.

---

## 📖 Running the Documentation (`/docs/`)

### Installation & Running the Docs
```sh
cd docs
yarn install   # Install dependencies
yarn start     # Start the Docusaurus server
```
The documentation will be available at **http://localhost:3001**.

### Building for Production
```sh
yarn build   # Generates a static site for deployment
```

---

## 📌 Features & App Flow
### **Web App (`/web-app/`)**
- Fetches **live cryptocurrency prices** using React Query and the CoinCap API.
- Displays key crypto **metrics** like market cap, supply, and price change.
- Includes **search functionality** for easy tracking.
- Provides a **manual refresh** button to update prices.
- Fully **responsive UI** with SCSS styling.

### **Documentation (`/docs/`)**
- Covers **project overview, API integration, and state management**.
- Documents all **components, utilities, and Next.js pages**.
- Custom sidebar with manually structured categories.
- Styled with **Docusaurus v3** for a clean UI.

---

## 🔗 Additional Notes
- Ensure you have a **stable internet connection** when fetching data from the CoinCap API.
- Modify `utils/constants.ts` if you need to change API endpoints.
- If you encounter broken links in Docusaurus, check `sidebars.js` for incorrect paths.

Way to go! 🚀
