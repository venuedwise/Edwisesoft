# Copilot Rules — EdWiseSoft Solutions LLP Website

## Project Overview
Build a **single-page company website** using **React + TypeScript** for EdWiseSoft Solutions LLP, Hyderabad.  
The website should be **responsive, accessible, and professional**, highlighting services, industries, and company expertise.

---

## Tech Stack
- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Routing:** React Router (single-page navigation with smooth scroll)
- **UI Library:** Material UI (MUI)
- **Animations:** Framer Motion
- **Testing:** Vitest + React Testing Library
- **Code Quality:** ESLint + Prettier
- **CI/CD:** GitHub Actions

---

## Guidelines for Code
- Always use **functional components** with React hooks.
- Components should be **modular and reusable**:
  - `/components` → reusable UI components (buttons, cards, forms)
  - `/sections` → main sections (Home, About, Services, Resources, Why Us, Contact)
- **Accessibility first:** semantic HTML, alt text for images, aria labels where needed.
- Ensure **responsive design** (mobile → tablet → desktop).
- Use **framer-motion** for smooth fade, slide, or staggered animations.
- Always format code using **ESLint + Prettier**.

---

## Sections & Content
### Hero Section
- Headline: "Smart Software. Wise Strategies. Real Impact."
- Subheadline: "We deliver AI, Web, and Enterprise solutions that empower businesses to grow, innovate, and thrive in the digital era."
- CTA Buttons: "Get Free Consultation" and "Explore Services"

### About Section
- Company intro
- Mission: Transform businesses with smart, efficient, impactful software solutions
- Vision: Trusted technology partner delivering value through innovation and wisdom

### Services Section
- AI & Machine Learning
- Web & Mobile Development
- Enterprise Solutions
- IT Consulting & Staffing

### Industries Section
- Finance & Banking, Healthcare, Education, Retail & E-commerce, Startups & SMBs

### Why Us Section
- Expertise with Insight
- Tailored Solutions
- Results That Matter
- End-to-End Partnership

### Testimonials Section
- Placeholder quotes from clients

### Contact Section
- Form fields: Name, Email, Company, Message
- Hyderabad office info
- Social media links

---

## Testing
- Every component should have a corresponding **Vitest + RTL test file**.
- Test main rendering, user interactions, and accessibility attributes.

---

## CI/CD
- Use **GitHub Actions** for:
  - Linting (`npm run lint`)
  - Running tests (`npm run test`)
  - Building (`npm run build`)
- Optional: auto-deploy to Vercel or Netlify.

---

## Best Practices
- Always prioritize **readable and maintainable code**.
- Keep **consistent naming conventions** for files, components, and functions.
- Avoid legacy React patterns (no class components, no deprecated lifecycle methods).
- When adding new sections or features, maintain the same **structure and design pattern** as existing sections.