# Wellness Center Website

A bilingual (English/Portuguese - Brazil) website for a wellness center with smooth transitions and a modern design.

## Features

- 🌐 **Bilingual Support**: English and Portuguese (Brazil) with language switcher
- 🎨 **Modern Design**: Yellow theme (#e6cc00) with smooth transitions
- 📱 **Responsive**: Mobile-friendly design
- ✨ **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations
- 🧭 **Navigation**: Single-page application with smooth page transitions

## Pages

- **Home**: Welcome page with hero section and features
- **Bhakti Marga**: About section
- **Satguru**: Information about Paramahamsa Vishwananda
- **Bio**: Biography of Dhanurdhara Das Ananda
- **Practices**: Services and practices offered
- **Contact**: Contact form for booking sessions

## Technologies

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/DDD.git
cd DDD
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Project Structure

```
DDD/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── img/                # Images directory
│   ├── ddd.jpg        # Bio image
│   └── placeholder.png # Placeholder images
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Language Switching

The website includes a custom dropdown language switcher in the header. The selected language is saved in localStorage and persists across page reloads.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

