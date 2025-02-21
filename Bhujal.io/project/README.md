# Bhujal.io - Groundwater Information Portal

A comprehensive platform for groundwater information and management powered by AI technology.

## 🌟 Features

- 📊 Interactive Groundwater Data Visualization
- 📝 NOC Application Guidelines
- 🎓 Training Resources
- 📑 AI-Generated Reports
- 🔗 Integration with External AI Chatbot

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Charts:** Chart.js with React-ChartJS-2
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **PDF Generation:** html2pdf.js
- **API Integration:** Perplexity API

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Carousel/     # Image slider component
│   ├── NewsSection/  # Latest updates section
│   └── ...
├── pages/            # Route components
│   ├── Home/
│   ├── Terms/
│   └── ...
├── services/         # Business logic and API integration
│   ├── api/         # API clients and types
│   └── reports/     # Report generation logic
├── config/          # Configuration files
└── assets/         # Static resources
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bhujal-io.git
cd bhujal-io
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_PERPLEXITY_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🧱 Component Guidelines

### Creating New Components

1. Create a new directory under `src/components`
2. Include component file and related utilities
3. Export component as default
4. Add proper TypeScript types
5. Include JSDoc documentation

Example:
```tsx
/**
 * Displays a section with the latest groundwater-related news
 * @component
 */
export default function NewsSection() {
  // Component logic
}
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use design system colors
- Ensure accessibility

## 🔄 State Management

- Use React hooks for local state
- Implement proper state lifting
- Follow unidirectional data flow
- Keep state close to where it's used

## 📊 Data Visualization

### Chart Guidelines

- Use consistent colors from theme
- Include proper labels and legends
- Ensure responsive behavior
- Add loading states
- Handle error cases

## 🧪 Testing Guidelines

- Write unit tests for utilities
- Test component rendering
- Include integration tests
- Follow arrange-act-assert pattern
- Mock external dependencies

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔒 Security Best Practices

- Store sensitive data in environment variables
- Implement proper CORS policies
- Sanitize user inputs
- Use secure external links
- Regular dependency updates

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📖 Documentation Guidelines

- Keep README updated
- Document component props
- Include setup instructions
- Add troubleshooting guides
- Document API integrations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### Commit Guidelines

- Use conventional commits
- Include clear descriptions
- Reference issues
- Keep changes focused

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ministry of Jal Shakti
- Department of Groundwater
- Contributors and maintainers

## 📞 Support

For support, please email contact@bhujal.io or open an issue in the repository.