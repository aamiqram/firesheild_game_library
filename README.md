# Firesheild-Game-Library

## Purpose

Gamehub is an engaging online library designed for discovering and supporting indie game developers. Users can browse a curated collection of 20+ games, view detailed information (titles, categories, ratings, descriptions, and download links), and access protected features like game details and user profiles after successful Firebase authentication. The app features a vibrant urban-themed UI with neon accents, smooth animations, and full responsiveness for mobile, tablet, and desktop. Built as a single-page application (SPA) with React, it's designed for seamless navigation and high user engagement.

# 🔗Live URL

## [https://gamehub-library.netlify.app](https://firesheild-gamehub.netlify.app/)

# ✨ Key Features

- **Responsive Design:** Mobile-first layout implemented with Tailwind CSS and DaisyUI. Grids stack neatly on small screens, and the navigation collapses correctly.

- **Game Browsing:** Features a dynamic homepage with a parallax banner, a popular games section (using 3D tilt hovers), an "All Games" browse page (20-game grid), and individual details pages.

- **Dynamic Routing:** Uses React Router v7 for efficient page loading, seamless client-side navigation, and route protection (unauthenticated users are redirected to the login page).

- **Animations & Effects:** Utilizes Framer Motion for effects like hover tilts, smooth fade-ins, parallax scrolling, particle backgrounds, and typing effects on banner titles.

- **Urban Neon Theme:** Features a dark navy gradient background, vibrant neon purple, pink, and cyan accents, glassmorphism cards, and subtle mouse glow trails.

- **About Page:** A polished showcase including a hero section, features grid, mock team cards, testimonials carousel, and a call-to-action (CTA) for signup.

- **Firebase Authentication:** Supports Email/Password and Google OAuth login/registration. Includes functionality for protected routes, forgot password (with a Gmail redirect helper), and profile updates (name/photoURL).

- **Data:** Uses static JSON data containing 20 popular games, complete with image links, ratings, and developer information.

- **SPA Hosting:** Built with Vite for fast development and bundling, utilizing environment variables for secure Firebase configuration.

# 📦 NPM Packages Used

- **react & react-dom (^19.0.0-rc):** Core React library for UI components.

- **react-router-dom (^7.0.0):** Routing and data APIs (loaders/actions for pages/auth).

- **firebase (^10.12.2):** Authentication (email/password, Google OAuth).

- **framer-motion (^11.3.29):** Animations (hovers, transitions, parallax).

- **react-firebase-hooks (^5.1.1):** Hooks for auth state (useAuthState).

- **react-icons (^5.3.0):** Icons (Fa, Fc, etc.).

- **daisyui (^5.3.8):** Tailwind component library (btn, card, hero, stats, carousel).

- **@tailwindcss/vite (^4.1.0-alpha.1) & tailwindcss (^4.1.0-alpha.1):** Styling with neon gradients and responsive utilities.

- **vite (^5.4.8):** Build tool for fast dev server and bundling.
