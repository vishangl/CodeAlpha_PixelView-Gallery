# 📸 PixelView Gallery

A modern, responsive image gallery application featuring stunning visuals, smooth interactions, and intuitive navigation. Built with vanilla HTML, CSS, and JavaScript.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 **Premium Design**
- Dark mode with vibrant purple/pink gradient accents
- Glassmorphism effects for a modern, premium feel
- Smooth animations and micro-interactions
- Professional typography using Google Fonts (Poppins)

### 🔍 **Category Filtering**
- Filter images by category: Nature, Architecture, Abstract, Urban
- Smooth transitions when switching categories
- Active state indicators on filter buttons
- View all images or filter by specific category

### 🖼️ **Lightbox View**
- Full-screen image viewing experience
- Display image metadata (title, description, category)
- Backdrop blur effect for immersive viewing
- Smooth fade-in animations

### 🎮 **Navigation Controls**
- **Previous/Next Buttons**: Navigate through images in lightbox
- **Keyboard Shortcuts**: 
  - `Arrow Left` - Previous image
  - `Arrow Right` - Next image
  - `ESC` - Close lightbox
- **Touch/Swipe Support**: Swipe left/right on mobile devices
- Circular navigation (loops back to start/end)

### 📱 **Responsive Design**
- **Mobile** (<480px): Single column layout
- **Tablet** (480-768px): Two column grid
- **Desktop** (768-1200px): Three column grid
- **Large Desktop** (>1200px): Four column grid
- Touch-friendly controls for mobile devices

### ⚡ **Performance**
- Lazy loading images for faster initial load
- Optimized CSS with custom properties
- Smooth 60fps animations
- Minimal JavaScript footprint

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishangl/CodeAlpha_PixelView-Gallery.git
   cd CodeAlpha_PixelView-Gallery
   ```

2. **Open the gallery**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **Start exploring!**
   - Click on category buttons to filter images
   - Click any image to open the lightbox
   - Use arrow keys or navigation buttons to browse

## 📁 Project Structure

```
CodeAlpha_PixelView-Gallery/
├── index.html          # Main HTML structure
├── style.css           # Styles and design system
├── script.js           # Gallery functionality
└── README.md           # Project documentation
```

## 🎯 Usage

### Browsing the Gallery
1. The gallery displays all images by default
2. Hover over images to see metadata overlay
3. Click on any image to view it in full screen

### Filtering Images
1. Click on category buttons at the top
2. Gallery will smoothly transition to show only selected category
3. Click "All" to view all images again

### Lightbox Navigation
- **Click** on an image to open lightbox
- **Arrow Keys** to navigate between images
- **ESC Key** to close the lightbox
- **Swipe** left/right on mobile devices
- **Click** prev/next buttons for navigation
- **Click** outside the image to close

## 🛠️ Customization

### Adding Your Own Images

Edit the `galleryData` array in `script.js`:

```javascript
const galleryData = [
    {
        id: 1,
        title: "Your Image Title",
        description: "Your image description",
        category: "nature", // nature, architecture, abstract, urban
        image: "path/to/full-size-image.jpg",
        thumbnail: "path/to/thumbnail.jpg"
    },
    // Add more images...
];
```

### Adding New Categories

1. Add a new filter button in `index.html`:
```html
<button class="filter-btn" data-category="your-category">
    <span class="filter-icon">🎯</span>
    Your Category
</button>
```

2. Add images with the new category in `script.js`

### Customizing Colors

Modify CSS custom properties in `style.css`:

```css
:root {
    --color-accent-primary: #a855f7;  /* Purple */
    --color-accent-secondary: #ec4899; /* Pink */
    --color-bg-primary: #0a0a0f;      /* Dark background */
    /* Customize other colors... */
}
```

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0a0a0f` (Deep Dark)
- **Secondary Background**: `#13131a` (Dark Gray)
- **Accent Gradient**: `#a855f7` → `#ec4899` (Purple to Pink)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b4b4c8` (Light Gray)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Display**: 2.5rem (Logo)
- **Heading**: 2rem (Section titles)
- **Body**: 1rem (Base text)
- **Small**: 0.875rem (Metadata)

### Spacing Scale
- **XS**: 0.5rem
- **SM**: 1rem
- **MD**: 1.5rem
- **LG**: 2rem
- **XL**: 3rem
- **2XL**: 4rem

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)**: Modern vanilla JavaScript
- **Google Fonts**: Poppins font family

### Key Features Implementation
- **CSS Grid**: Responsive gallery layout
- **CSS Custom Properties**: Maintainable design system
- **Backdrop Filter**: Glassmorphism effects
- **CSS Animations**: Smooth transitions and effects
- **Event Delegation**: Efficient event handling
- **Touch Events**: Mobile swipe support

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

## 👤 Author

**Vishangl**
- GitHub: [@vishangl](https://github.com/vishangl)

## 🙏 Acknowledgments

- Images sourced from [Unsplash](https://unsplash.com)
- Icons: Unicode emoji characters
- Inspiration: Modern web design trends and best practices

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or reach out!

---

<p align="center">Made with ❤️ for visual storytelling</p>
