# Shanzy Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring glassmorphism design, smooth animations, and optimized performance.

## 🌟 Features

- **Modern Design**: Glassmorphism aesthetics with smooth transitions
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Complete SEO setup with metadata and structured data
- **Interactive**: Smooth animations with Framer Motion
- **Accessible**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Data Fetching**: SWR for optimistic updates
- **TypeScript**: For type safety (optional)

## 📁 Project Structure

```
shanzy-portfolio/
├── app/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SEO.jsx
│   ├── api/                 # API routes
│   │   ├── contact/
│   │   └── projects/
│   ├── about/page.jsx       # About page
│   ├── projects/page.jsx    # Projects page
│   ├── blog/page.jsx        # Blog page
│   ├── contact/page.jsx     # Contact page
│   ├── privacy/page.jsx     # Privacy policy
│   ├── terms/page.jsx       # Terms of service
│   ├── layout.jsx           # Root layout
│   ├── page.jsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static files
│   ├── robots.txt
│   ├── site.webmanifest
│   └── favicon files
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shanzy/portfolio.git
cd shanzy-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors and Themes

The color scheme is defined in `tailwind.config.js`. The main colors used are:

- Primary: Blue (`#0ea5e9`) to Cyan (`#06b6d4`) gradient
- Background: Black (`#000000`) with subtle gradients
- Text: White with various opacity levels
- Glass effects: White with low opacity and backdrop blur

### Content Updates

1. **Personal Information**: Update the content in each page file
2. **Projects**: Modify the projects array in `app/projects/page.jsx`
3. **Blog Posts**: Update the blogPosts array in `app/blog/page.jsx`
4. **Contact Info**: Update contact details in `app/contact/page.jsx`

### Adding New Pages

1. Create a new folder in the `app` directory
2. Add a `page.jsx` file with your component
3. Update the navigation in `app/components/Navbar.jsx`

## 📧 Contact Form Setup

The contact form uses API routes. To enable email sending:

1. Choose an email service (SendGrid, Resend, Nodemailer)
2. Add environment variables for API keys
3. Update `app/api/contact/route.js` with your email service logic

Example with SendGrid:

```javascript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'hello@shanzy.dev',
  from: 'noreply@shanzy.dev',
  subject: `Portfolio Contact: ${subject}`,
  text: message,
  html: `<p>${message}</p>`,
};

await sgMail.send(msg);
```

## 🎯 SEO Optimization

- **Metadata**: Configured in `app/layout.jsx` and individual pages
- **Sitemap**: Auto-generated at `app/sitemap.ts`
- **Robots.txt**: Located in `public/robots.txt`
- **Open Graph**: Configured for social media sharing
- **Structured Data**: JSON-LD for rich snippets

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed on:

- Netlify
- Railway
- Render
- AWS Amplify

## 📊 Performance

This portfolio is optimized for:

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Excellent scores
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components and images

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatible

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shanzy/portfolio/issues).

## 📧 Contact

- **Email**: hello@shanzy.dev
- **LinkedIn**: [linkedin.com/in/shanzy](https://linkedin.com/in/shanzy)
- **GitHub**: [github.com/shanzy](https://github.com/shanzy)
- **Portfolio**: [shanzy-portfolio.vercel.app](https://shanzy-portfolio.vercel.app)

---

Built with ❤️ by Shanzy using Next.js, Tailwind CSS, and Framer Motion.

# Shanzy-Portfolio

Modern portfolio of Shanzy — UI/UX Designer, Python Developer, and Web Enthusiast. Built with Next.js, Tailwind CSS, and deployed on Vercel.
