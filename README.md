# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase projects and skills to potential employers.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Dark/light mode support
- Sections for About, Projects, Skills, and Contact
- Contact form for potential employers to reach out
- Optimized for performance and SEO

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── public/            # Static files
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── data/          # Data files for projects, skills, etc.
│   └── styles/        # Global styles
├── package.json       # Dependencies and scripts
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

1. **Personal Information**: Update your name, about information, and contact details in the respective components.

2. **Projects**: Add or modify your projects in the `src/data/projects.ts` file.

3. **Skills**: Adjust the skills list and proficiency levels in the `src/components/Skills.tsx` file.

4. **Styling**: Modify the color scheme and other design elements in the `tailwind.config.js` file.

## Deployment

The portfolio can be deployed to various platforms:

### Vercel (Recommended for Next.js)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion 