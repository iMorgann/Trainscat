# TrainsCat Marketing Website

A modern, responsive marketing website for TrainsCat, built with Vite, React, and Tailwind CSS.

## Features

- Modern React components
- Fully responsive design
- Optimized for performance
- Built with Tailwind CSS for styling
- Font Awesome icons integration
- Contact form with validation

## Project Structure

```
trainscat-website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/trainscat-website.git
cd trainscat-website
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to http://localhost:5173

## Building for Production

1. Build the project
```bash
npm run build
# or
yarn build
```

2. The built files will be in the `dist` directory

## Deployment

### Option 1: Deploying to Vercel

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy the project
```bash
vercel
```

3. Follow the prompts to deploy your site

### Option 2: Deploying to Netlify

1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

2. Deploy the project
```bash
netlify deploy
```

3. Follow the prompts to deploy your site

### Option 3: Deploying to any hosting provider

1. Build the project
```bash
npm run build
```

2. Upload the contents of the `dist` directory to your hosting provider

## Customization

### Colors

You can customize the colors by editing the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#ff6b35',    // Change this to your primary color
      secondary: '#2e4057',  // Change this to your secondary color
      accent: '#4ecdc4',     // Change this to your accent color
      light: '#f7fff7',      // Change this to your light color
      dark: '#1a1a1a',       // Change this to your dark color
    },
  },
},
```

### Content

Edit the content in the respective component files:

- **Header.jsx**: Navigation menu
- **Hero.jsx**: Main headline and call to action
- **Services.jsx**: Marketing services offered
- **Stats.jsx**: Company statistics
- **Process.jsx**: Marketing process steps
- **Testimonials.jsx**: Client testimonials
- **ContactForm.jsx**: Contact form
- **Footer.jsx**: Footer links and contact information

## License

MIT

## Contact

For any questions or support, please contact info@trainscat.com