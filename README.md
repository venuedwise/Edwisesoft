# EdWiseSoft Solutions LLP Website

## Project Overview
A modern, professional company website for EdWiseSoft Solutions LLP, built with Vite, React, TypeScript, and Material UI. 

---

## 🚀 Setup & Scripts

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run locally:**
   ```sh
   npm run dev
   ```
3. **Lint:**
   ```sh
   npm run lint
   ```
4. **Test:**
   ```sh
   npm run test
   ```
5. **Build for production:**
   ```sh
   npm run build
   ```
6. **Preview production build:**
   ```sh
   npm run preview
   ```
7. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```

---

## 🗺️ Site Map

- Home (Hero)
- About
- Services
- Why Us
- Resources
- Contact
- Footer

---

## 🌳 Component Tree Diagram

```
<App>
  ├── Navbar
  ├── Hero
  ├── About
  ├── Services
  ├── WhyUs
  ├── Resources
  ├── Contact
  └── Footer
```

---

## 📝 What I Learned

- **Trade-offs:**
  - Used Material UI for rapid, consistent design, trading off some customizability for speed and accessibility.
  - Chose Vite for fast dev/build times and modern tooling.
- **Bugs Fixed:**
  - Fixed test failures by aligning test queries with actual UI text and roles.
  - Resolved TypeScript errors (unused imports, duplicate identifiers) and test/build conflicts.
  - Handled React import issues for test compatibility with `@ts-expect-error`.
- **Performance Wins:**
  - Used Vite’s code-splitting and chunking for faster loads.
  - Optimized images and assets for production.

---

## 📚 Decisions
- **Stack:** Vite + React + TypeScript + Material UI + Framer Motion + EmailJS
- **Testing:** Vitest + React Testing Library
- **CI/CD:** GitHub Actions for lint, test, and build
- **Deployment:** vercel

---
