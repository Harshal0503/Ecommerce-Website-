# TechStore - AI-Powered E-commerce Website

A modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript, featuring an AI chatbot assistant and stunning animations.

## 🚀 Features

### Core E-commerce Features
- **Product Catalog**: Browse through a curated selection of tech products
- **Product Details**: Click any product to view full details, specifications, and description in a new tab
- **Color Options**: Interactive color swatches for product customization
- **Shopping Cart**: Add/remove items with real-time updates
- **Custom Images**: Support for adding your own product images (PNG, JPG, JPEG, GIF, WEBP)
- **Multiple Images**: Products can have multiple images that automatically cycle on hover
- **Glassmorphism UI**: Modern glassmorphic navigation bar with blur effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth interactions

### AI Chatbot Features
- **Intelligent Assistant**: AI-powered chatbot for product recommendations
- **Natural Language Processing**: Understands various user queries
- **Product Knowledge**: Comprehensive knowledge about all products
- **Real-time Responses**: Instant responses with typing indicators
- **Contextual Help**: Provides relevant information based on user needs

### Animation & Visual Effects
- **Smooth Animations**: CSS animations and transitions throughout the site
- **Hover Effects**: Interactive elements with engaging hover states
- **Loading States**: Visual feedback for user actions
- **Floating Elements**: Eye-catching floating animations
- **Scroll Animations**: Elements animate as they come into view

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and AI chatbot logic
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
ecommerce-ai-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation & Setup

1. **Clone or Download** the project files to your local machine

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python (if installed)
     python -m http.server 8000
     
     # Using Node.js (if installed)
     npx serve .
     ```

3. **Access the Website**
   - Open your browser and navigate to `http://localhost:8000`
   - Or double-click `index.html` to open directly

## 🎯 How to Use

### Shopping Experience
1. **Browse Products**: Scroll through the featured products section
2. **View Details**: Click any product to open detailed product page in a new tab
3. **Add to Cart**: Click "Add to Cart" on any product (from main page or details page)
4. **View Cart**: Click the cart icon in the header to view your items
5. **Manage Cart**: Add/remove items as needed
6. **Checkout**: Click "Checkout" to complete your purchase

### AI Chatbot
1. **Open Chatbot**: Click the robot icon in the bottom-right corner
2. **Ask Questions**: Type your questions about products, pricing, or features
3. **Get Recommendations**: Ask for product recommendations based on your needs
4. **Compare Products**: Request comparisons between different products

### Search Functionality
1. **Search Products**: Click the search icon in the header
2. **Type Keywords**: Enter product names or categories
3. **View Results**: Filtered products will appear automatically

## 🎨 Customization

### Adding New Products
Edit the `products` array in `script.js`:

```javascript
const products = [
    {
        id: 7,
        name: "Your Product Name",
        description: "Short product description",
        fullDescription: "Detailed product description with more information",
        specs: [
            "Specification 1",
            "Specification 2",
            "Specification 3"
        ],
        price: 299.99,
        image: "fas fa-icon-name",  // Primary image (icon or file)
        images: ["fas fa-icon-name", "fas fa-icon-2", "image3.png"],  // Multiple images for hover effect
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Silver", code: "#c0c0c0" },
            { name: "Gold", code: "#ffd700" }
        ],  // Color options with name and hex code
        category: "category"
    }
];
```

**Notes**: 
- The `images` array is optional. If provided, images will automatically cycle when you hover over the product.
- The `colors` array is optional. Add color options with name and hex code for product customization.

### Adding Your Own Images
To add your own product images:

1. **Place your image** in the root directory or `images/` folder (PNG, JPG, JPEG, GIF, or WEBP format)
2. **Update the product** array in `script.js`:
   ```javascript
   {
       id: 7,
       name: "Product Name",
       description: "Description",
       price: 299.99,
       image: "images/your-image.png",  // Single image
       images: ["images/your-image.png", "images/angle-2.png", "images/angle-3.png"],  // Multiple images
       category: "category"
   }
   ```
3. **The system automatically detects** if you're using an image file or Font Awesome icon!
4. **Multiple images** will automatically cycle when you hover over the product card

**Supported image formats**: PNG, JPG, JPEG, GIF, WEBP

### Modifying AI Responses
Update the `aiResponses` object in `script.js` to customize chatbot responses:

```javascript
const aiResponses = {
    greetings: ["Your custom greeting messages"],
    products: {
        category: "Your product information"
    }
};
```

### Styling Customization
- Modify colors in `styles.css` using CSS custom properties
- Update animations by editing keyframes and transitions
- Customize the layout using CSS Grid and Flexbox

## 🔧 Advanced Features

### AI Chatbot Intelligence
- **Context Awareness**: Remembers conversation history
- **Product Knowledge**: Comprehensive database of product information
- **Natural Language**: Understands various ways of asking questions
- **Recommendations**: Provides personalized product suggestions

### Performance Optimizations
- **Lazy Loading**: Images and content load as needed
- **Smooth Scrolling**: Optimized scroll behavior
- **Efficient Animations**: Hardware-accelerated CSS animations
- **Responsive Images**: Optimized for different screen sizes

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: Readable color combinations
- **Focus Indicators**: Clear focus states for all interactive elements

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Touch-friendly interface with adapted layouts
- **Mobile**: Streamlined design with essential features

## 🎭 Animation Details

### CSS Animations
- **Slide Down**: Header appears with smooth slide animation
- **Fade In Up**: Product cards animate into view
- **Float**: Hero section elements float gently
- **Bounce**: Cart count updates with bounce effect
- **Pulse**: Chatbot button pulses to attract attention

### Interactive Effects
- **Hover States**: Buttons and cards respond to hover
- **Click Animations**: Visual feedback for all clicks
- **Loading States**: Smooth loading indicators
- **Transitions**: Smooth transitions between states

## 🤖 AI Chatbot Capabilities

The AI chatbot can help with:
- **Product Information**: Detailed specs and features
- **Pricing**: Current prices and deals
- **Recommendations**: Personalized suggestions
- **Comparisons**: Product comparisons
- **Support**: Customer service information
- **General Queries**: Any questions about the store

## 🚀 Future Enhancements

Potential improvements for future versions:
- **Backend Integration**: Connect to a real database
- **Payment Processing**: Integrate with payment gateways
- **User Accounts**: User registration and login
- **Order Tracking**: Real-time order status updates
- **Advanced AI**: Integration with external AI services
- **Multi-language Support**: Internationalization
- **Image Gallery**: Multiple product images per product
- **Product Reviews**: Customer reviews and ratings
- **Wishlist**: Save products for later
- **Recommendations**: Personalized product suggestions

## 🐛 Troubleshooting

### Common Issues

1. **Animations Not Working**
   - Ensure you're using a modern browser
   - Check if JavaScript is enabled

2. **Chatbot Not Responding**
   - Refresh the page
   - Check browser console for errors

3. **Cart Not Updating**
   - Clear browser cache
   - Disable browser extensions temporarily

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📞 Support

For support or questions:
- Create an issue in the project repository
- Contact the development team
- Check the documentation for common solutions

---

**TechStore** - Your trusted partner in technology and innovation! 🚀

Built with ❤️ using modern web technologies and AI-powered features.
