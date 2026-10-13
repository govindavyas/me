# Govind Vyas - Software Developer Portfolio

A modern, responsive portfolio website built with Vue.js 3, showcasing Govind Vyas's professional experience, projects, and skills as a Software Developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Glass-morphism design with gradient backgrounds
- **Interactive Elements**: Hover animations and smooth transitions
- **Professional Sections**:
  - Hero section with introduction
  - About me with quick facts
  - Skills categorized by technology stack
  - Professional experience timeline
  - Featured projects showcase
  - Education and achievements
  - Contact form with social links

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Custom CSS with modern design patterns
- **Icons**: Text-based placeholders (ready for icon library integration)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd myportfolio-sonnet
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable Vue components
│   ├── RotatingCube.vue # 3D interactive cube (planned)
│   └── BackgroundParticles.vue # Animated background
├── data/
│   └── portfolio.ts     # Portfolio data and content
├── views/
│   ├── Portfolio.vue    # Full-featured portfolio (with Three.js)
│   └── PortfolioSimple.vue # Current simplified version
├── App.vue              # Main application component
├── main.ts              # Application entry point
└── style.css            # Global styles
```

## 🎨 Customization

### Update Portfolio Content

Edit the portfolio data in `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    // ... other personal information
  },
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "Vue.js"],
    // ... other skill categories
  },
  // ... experience, projects, education, achievements
}
```

### Styling

- Main styles: `src/style.css`
- Component-specific styles: Within each `.vue` component
- Color scheme: Modify CSS custom properties for consistent theming

## 🚧 Planned Enhancements

1. **3D Interactive Cube**: 
   - Three.js integration for rotating cube with portfolio data
   - Mouse interaction and smooth animations

2. **Advanced Animations**:
   - GSAP integration for complex animations
   - Particle system for background effects

3. **Additional Features**:
   - TailwindCSS for rapid styling
   - Contact form functionality
   - Dark/light theme toggle
   - Blog section
   - Project detail pages

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌟 Key Highlights

- **Performance**: Optimized with Vite for fast development and builds
- **Accessibility**: Semantic HTML and proper contrast ratios
- **SEO Ready**: Meta tags and proper document structure
- **Modern Workflow**: TypeScript for type safety and better DX

## 📞 Contact Information

**Govind Vyas**
- Email: govind.vyas@example.com
- Phone: +91 9876543210
- Location: India
- GitHub: [GitHub Profile](https://github.com/govindvyas)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/govindvyas)

## 📜 License

This project is for portfolio purposes. Feel free to use as inspiration for your own portfolio!

---

**Built with ❤️ using Vue.js & modern web technologies**
