# Shaksham Singh - DevOps Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing DevOps skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and animations
- **Contact Form**: Functional contact form for inquiries
- **SEO Optimized**: Meta tags and structured content

## 📱 Sections

1. **Home/Hero** - Introduction with bright green styling
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with progress bars
4. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Edit `utils/data.js` to update:
- Personal details
- Skills list
- Contact information
- Social media links

### Styling
- Colors are defined in `tailwind.config.js`
- Custom CSS in `app/globals.css`
- Component-specific styles in each component

### Images
- Place profile image in `public/` folder
- Update image path in `utils/data.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   └── Contact.jsx
├── utils/
│   └── data.js
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization Guide

### Changing Colors
The portfolio uses a green and orange color scheme. To change:

1. **Primary Green**: Update `text-green-400` classes
2. **Accent Orange**: Update `bg-orange-500` classes
3. **Background**: Modify `bg-black` and `bg-gray-900` classes

### Adding New Sections
1. Create new component in `components/` folder
2. Add to navigation in `Navbar.jsx`
3. Import and add to `app/page.js`
4. Update scroll handling in `Navbar.jsx`

### Modifying Skills
Edit the `skills` array in `utils/data.js`:
```javascript
export const skills = [
  "Your Skill 1",
  "Your Skill 2",
  // ... add more skills
];
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🌟 Features

- **Smooth Scrolling**: Navigation between sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Active Navigation**: Highlights current section
- **Hover Effects**: Interactive elements with hover states
- **Form Validation**: Contact form with validation
- **Social Links**: GitHub, LinkedIn, Twitter integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Contact: shaksham@example.com

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from React Icons
- Design inspired by modern portfolio trends

---

**Built with ❤️ and lots of YAML by Shaksham Singh**
