# 🎨 Innovate9 — Creative Agency Landing Page

> A sleek, modern creative agency website built with **React 19** + **Tailwind CSS v4** + **Headless UI**.

🌐 **Live Demo:** [innovate9.vercel.app](https://innovate9.vercel.app/)

---

## 📌 About The Project

**Innovate9** is a fully responsive creative agency landing page built with React 19 and Vite. The site features a multi-section layout covering everything from services and pricing to customer reviews and a contact query form — all powered by smooth component-based architecture and styled with Tailwind CSS v4.

---

## 🗂️ Page Sections

| Section | Description |
|---|---|
| 🏠 **Banner** | Hero section with main headline and CTA |
| 🖥️ **Platform** | Platforms and tools the agency works with |
| ⚡ **Feature** | Key features and highlights of the agency |
| 📱 **App Showcase** | Featured apps or works showcase |
| 🛠️ **Service** | Services offered by the agency |
| 💬 **Customer** | Client testimonials and reviews |
| 💰 **Pricing** | Pricing plans and packages |
| 🗣️ **Talking** | Stats or social proof section |
| 📩 **Query** | Contact / inquiry form |

---

## ✨ Features

- 🎨 **Modern Agency UI** — Professional creative studio design
- 🧩 **Component-based** — Each section is a clean, reusable React component
- 🧭 **Client-side Routing** — Smooth navigation with React Router DOM v7
- 🎛️ **Accessible UI** — Headless UI components for dropdowns, modals & more
- ⚡ **Blazing Fast** — Powered by Vite v7
- 📱 **Fully Responsive** — Mobile, tablet, and desktop ready
- 🔷 **Rich Icons** — React Icons v5 throughout the UI

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | v19 | UI Framework |
| Vite | v7 | Build Tool |
| Tailwind CSS | v4 | Styling |
| Headless UI | v2 | Accessible UI Components |
| React Router DOM | v7 | Client-side Routing |
| React Icons | v5 | Icon Library |

---

## 📁 Project Structure

```
innovate9/
├── public/                 # Static assets
├── src/
│   ├── component/          # Reusable section components
│   │   ├── Bannar.jsx      # Hero/Banner section
│   │   ├── Platform.jsx    # Platform section
│   │   ├── Feature.jsx     # Features section
│   │   ├── Appsc.jsx       # App showcase section
│   │   ├── Service.jsx     # Services section
│   │   ├── Customer.jsx    # Customer reviews section
│   │   ├── Pricing.jsx     # Pricing plans section
│   │   ├── Talking.jsx     # Stats/social proof section
│   │   └── Query.jsx       # Contact/query form section
│   ├── pages/
│   │   └── Home.jsx        # Main home page (assembles all sections)
│   ├── App.jsx             # Root component with routes
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/innovate9.git
   cd innovate9
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy anywhere.

---

## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own version:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Set **Framework Preset** to `Vite`
4. Click **Deploy** — done! ✅

---

## 📄 License

This project is private. All rights reserved © Innovate9.

---

⭐ If you like this project, give it a star!
