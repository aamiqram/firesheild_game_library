# Firesheild Game Library 🎮

## 🌐 Live Demo
**[Visit Firesheild GameHub →](https://firesheild-gamehub.netlify.app)**

---

## 📝 Project Overview

Firesheild Game Library (GameHub) is an immersive online platform designed for discovering and celebrating independent game developers. This vibrant web application showcases a carefully curated collection of 20+ indie games, providing users with comprehensive information including game titles, categories, ratings, detailed descriptions, and direct download links.

Built as a modern single-page application (SPA) using React, GameHub features a stunning urban-themed interface with neon accents, smooth animations, and full responsiveness across all devices. The platform combines aesthetic appeal with functionality, offering seamless navigation and an engaging user experience.

Users can browse games publicly, but must authenticate through Firebase to access detailed game information and manage their profiles. The application emphasizes visual impact with 3D tilt effects, parallax scrolling, particle backgrounds, and glassmorphism design elements that create an unforgettable gaming discovery experience.

---

## ⚡ Core Features

### 🎨 Visual Design & Animations
- **Urban Neon Theme:** Dark navy gradient backgrounds with vibrant neon purple, pink, and cyan accents
- **Glassmorphism Cards:** Frosted glass effect cards with backdrop blur for modern aesthetics
- **3D Tilt Hover Effects:** Interactive card tilting on hover for depth perception
- **Parallax Scrolling:** Smooth parallax effects on banner for dynamic feel
- **Particle Background:** Animated particle systems creating atmospheric ambiance
- **Typing Animation:** Animated banner titles with typewriter effect
- **Smooth Transitions:** Framer Motion-powered animations throughout the app
- **Mouse Glow Trail:** Subtle glow effects following cursor movement
- **Fade-in Effects:** Elegant element appearances on scroll and load

### 🎮 Game Discovery Features
- **Curated Collection:** Browse 20+ carefully selected indie games
- **Popular Games Section:** Featured games grid with 3D hover effects
- **All Games Page:** Comprehensive 20-game grid layout for easy browsing
- **Game Details Pages:** Individual pages with complete game information
- **Category Filtering:** Games organized by genre and category
- **Rating System:** Visual star ratings for each game
- **Download Links:** Direct links to game downloads
- **Developer Information:** Details about game creators and studios

### 🔐 Authentication & Security
- **Firebase Authentication:** Robust user authentication system
- **Email/Password Login:** Traditional authentication method
- **Google OAuth:** One-click sign-in with Google account
- **User Registration:** Secure account creation with validation
- **Forgot Password:** Email-based password recovery with Gmail helper
- **Profile Management:** Update user name and profile photo URL
- **Protected Routes:** Secure access to game details and profile pages
- **Auto-redirect:** Unauthenticated users redirected to login page

### 📱 Responsive Design
- **Mobile-First Approach:** Optimized for smartphones with touch gestures
- **Tablet Optimization:** Perfect layout for medium-sized screens
- **Desktop Experience:** Full-featured design for large displays
- **Flexible Grids:** Smart grid systems that stack on small screens
- **Collapsible Navigation:** Mobile-friendly hamburger menu
- **Touch-Friendly:** Large tap targets and swipe gestures
- **Breakpoint Management:** Tailwind CSS responsive utilities

### 🌟 User Experience
- **Single Page App:** Lightning-fast navigation without page reloads
- **Dynamic Routing:** React Router v7 for efficient client-side routing
- **Hero Section:** Eye-catching landing area with call-to-action
- **About Page:** Comprehensive information about the platform
  - Hero section with mission statement
  - Features grid highlighting key benefits
  - Mock team cards showcasing developers
  - Testimonials carousel with user reviews
  - Call-to-action for user registration
- **Error Handling:** Custom 404 page and "App Not Found" pages
- **Loading States:** Smooth loading indicators for better UX
- **Toast Notifications:** Real-time feedback for user actions

### 📊 Data Management
- **Static JSON Data:** 20 popular games with complete information
- **Image Links:** High-quality game cover images
- **Rating System:** 5-star rating scale for game quality
- **Developer Profiles:** Information about game creators
- **Category Tags:** Genre and category classification
- **Download Statistics:** Track game popularity

---

## 🛠 Technologies Used

### Frontend Stack
![React](https://img.shields.io/badge/React_19_RC-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Key Technologies:**
- **React & React-DOM (v19.0.0-rc):** Latest React release candidate for cutting-edge features
- **React Router DOM (v7.0.0):** Advanced routing with loaders and actions API
- **Firebase (v10.12.2):** Authentication services (Email/Password, Google OAuth)
- **Framer Motion (v11.3.29):** Professional-grade animation library
  - Hover animations and card tilts
  - Page transitions and parallax effects
  - Stagger animations for list items
- **React Firebase Hooks (v5.1.1):** Simplified Firebase integration with custom hooks
- **React Icons (v5.3.0):** Comprehensive icon library (FontAwesome, Feather, etc.)
- **DaisyUI (v5.3.8):** Tailwind component library
  - Buttons, cards, hero sections
  - Stats components, carousels
  - Modal and drawer components
- **Tailwind CSS (v4.1.0-alpha.1):** Next-generation CSS framework
  - Custom neon gradients
  - Responsive utilities
  - Dark mode support
- **Vite (v5.4.8):** Modern build tool
  - Lightning-fast development server
  - Optimized production builds
  - Hot module replacement

---

## 📦 Dependencies

```json
{
  "react": "^19.0.0-rc",
  "react-dom": "^19.0.0-rc",
  "react-router-dom": "^7.0.0",
  "firebase": "^10.12.2",
  "framer-motion": "^11.3.29",
  "react-firebase-hooks": "^5.1.1",
  "react-icons": "^5.3.0",
  "daisyui": "^5.3.8",
  "@tailwindcss/vite": "^4.1.0-alpha.1",
  "tailwindcss": "^4.1.0-alpha.1",
  "vite": "^5.4.8"
}
```

---

## 🚀 How to Run Locally

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Firebase Project** with Authentication enabled

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/aamiqram/firesheild_game_library.git
cd firesheild_game_library
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

**To get Firebase credentials:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Navigate to Project Settings > General
4. Scroll to "Your apps" section
5. Copy the configuration values

#### 4. Enable Firebase Authentication

In Firebase Console:
1. Go to Authentication > Sign-in method
2. Enable Email/Password authentication
3. Enable Google sign-in provider
4. Add authorized domains (localhost for development)

#### 5. Start Development Server

```bash
npm run dev
```

#### 6. Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🔗 Related Links

- **Live Website:** [firesheild-gamehub.netlify.app](https://firesheild-gamehub.netlify.app)
- **GitHub Repository:** [github.com/aamiqram/firesheild_game_library](https://github.com/aamiqram/firesheild_game_library)
- **Firebase Console:** [console.firebase.google.com](https://console.firebase.google.com)
- **Netlify Dashboard:** [app.netlify.com](https://app.netlify.com)

---

## 🎯 Project Structure

```
firesheild_game_library/
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/           # Route-based page components
│   ├── data/            # Static game data (JSON)
│   ├── config/          # Firebase configuration
│   ├── assets/          # Images and static files
│   └── App.jsx          # Main application component
├── public/              # Public assets
├── .env                 # Environment variables
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

---

## 👨‍💻 Author

**Abu Abdullah Mohammed Iqram**
- **GitHub:** [@aamiqram](https://github.com/aamiqram)
- **LinkedIn:** [aamiqram](https://www.linkedin.com/in/aamiqram/)
- **Email:** aamiqram.dev@gmail.com
- **Portfolio:** [portfolio-aami.vercel.app](https://portfolio-aami.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- Firebase for seamless authentication
- Framer Motion for stunning animations
- Tailwind CSS & DaisyUI for beautiful styling
- React team for the amazing framework
- Netlify for reliable hosting
- Indie game developers for inspiration

---

**⭐ If you love indie games and this project, give it a star on GitHub!**
