# Malek Larif Portfolio Website

A responsive portfolio website built for architect Malek Larif. The site presents selected professional work and provides a central place to explore the architect's portfolio.

Live website: https://malek-larif-portfolio.vercel.app

## Project structure

The repository contains a Vite and React application in `frontend/`. It is a frontend-focused website and does not include a separate application backend.

## Interface and implementation

The project uses:

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- GSAP
- Lenis for smooth scrolling
- React Router
- React Hook Form
- react-to-print

The implementation focuses on presentation, page transitions, animation, responsive layout, and portfolio content.

## Local development

```bash
cd frontend
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Deployment

The frontend includes a Vercel configuration. To create a production build locally:

```bash
npm run build
```

The website's copy, images, and visual identity are specific to the client project.
