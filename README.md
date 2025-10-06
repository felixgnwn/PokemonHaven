# 🎮 Pokemon Haven

A modern web application for exploring and discovering Pokemon, built with React, TypeScript, and Vite.

## ✨ Features

- **Home Page**: Welcome page with project overview
- **Pokédex**: Browse and search through Pokemon
- **Responsive Navigation**: Clean navbar with active link highlighting
- **Modern UI**: Built with TailwindCSS for a sleek design

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **TailwindCSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/felixgnwn/PokemonHaven.git
cd PokemonHaven
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, etc.)
├── components/      # Reusable components
│   └── Navbar.tsx
├── layouts/         # Layout components
│   └── MainLayout.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   └── PokeDex.tsx
├── router/          # Routing configuration
│   ├── constant/
│   │   └── routes.tsx
│   └── router.tsx
├── App.tsx          # Root component
└── main.tsx         # Entry point
```

## 🎨 Styling

This project uses TailwindCSS 4 for styling. The configuration is set up with the Vite plugin for optimal performance.

## 📝 License

This project is open source and available under the MIT License.
