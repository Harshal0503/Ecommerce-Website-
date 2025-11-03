// Sample product data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16-inch",
        description: "Powerful laptop with M2 Pro chip, perfect for professionals and creatives.",
        fullDescription: "The MacBook Pro 16-inch features the revolutionary M2 Pro chip, delivering exceptional performance for creative professionals. With up to 96GB unified memory, stunning 16-inch Liquid Retina XDR display, and up to 22 hours of battery life, this laptop is designed for the most demanding workflows. Perfect for video editing, 3D rendering, and software development.",
        specs: [
            "M2 Pro chip with 12-core CPU and 19-core GPU",
            "16-inch Liquid Retina XDR display",
            "Up to 96GB unified memory",
            "Up to 8TB SSD storage",
            "22-hour battery life",
            "1080p FaceTime HD camera",
            "Six-speaker sound system with Spatial Audio"
        ],
        price: 2499.99,
        image: "mac 1.webp",
        images: ["mac 1.webp", "mac 2.webp", "mac 3.webp", "mac 4.webp"],
        colors: [
            { name: "Space Gray", code: "#5c5c5c" },
            { name: "Silver", code: "#e8e8e8" },
            { name: "Space Black", code: "#1d1d1f" }
        ],
        category: "laptops"
    },
    {
        id: 2,
        name: "iPhone 17 Pro",
        description: "Latest iPhone with advanced camera system and titanium design.",
        fullDescription: "The iPhone 17 Pro features the Apple A19 Pro (3 nm) chip, the most advanced chip in a smartphone. With a lightweight titanium design, advanced camera system featuring a 48MP main camera, and Action Button for quick access, this iPhone is built for professional photography and videography.",
        specs: [
            "A19 Pro (3 nm) chip with 6-core GPU",
            "Titanium design with Ceramic Shield front",
            "6.1-inch Super Retina XDR display",
            "48MP main camera with 5x Telephoto zoom",
            "ProRes video recording up to 4K at 60fps",
            "Battery life up to 23 hours video playback",
            "USB-C connector"
        ],
        price: 999.99,
        image: "ip1.webp",
        images: ["ip1.webp", "ip2.webp", "ip3.webp", "ip4.webp"],
        colors: [
            { name: "Natural Titanium", code: "#d4af37" },
            { name: "Blue Titanium", code: "#4a90e2" },
            { name: "White Titanium", code: "#f5f5f5" },
            { name: "Black Titanium", code: "#2c2c2c" }
        ],
        category: "phones"
    },
    {
        id: 3,
        name: "Samsung 4K Monitor",
        description: "32-inch 4K UHD monitor with HDR support for stunning visuals.",
        fullDescription: "Experience breathtaking visuals with the Samsung 32-inch 4K UHD monitor. Featuring HDR 10+ support, Quantum Dot technology, and AMD FreeSync Premium Pro, this monitor delivers exceptional color accuracy and smooth gaming performance. Perfect for professional designers and gamers.",
        specs: [
            "32-inch 4K UHD (3840 x 2160) resolution",
            "Quantum Dot technology with 1 billion colors",
            "HDR 10+ support",
            "AMD FreeSync Premium Pro",
            "120Hz refresh rate",
            "USB-C connectivity with 90W power delivery",
            "Adjustable stand with tilt, swivel, and height"
        ],
        price: 599.99,
        image: "samsung monitor.png",
        images: ["samsung monitor.png", "samsung_monitor_2.png", "samsung_monitor_3.png", "samsung_monitor_4.png"],
        colors: [
            { name: "Black", code: "#1a1a1a" },
            { name: "White", code: "#ffffff" },
            { name: "Silver", code: "#c0c0c0" }
        ],
        category: "monitors"
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        description: "Premium noise-cancelling headphones with exceptional sound quality.",
        fullDescription: "Experience industry-leading noise cancellation with the Sony WH-1000XM5 headphones. Featuring V1 processing engine, 30-hour battery life, and exceptional Hi-Res Audio sound quality, these headphones provide an immersive listening experience whether you're traveling or at home.",
        specs: [
            "Industry-leading noise cancellation",
            "V1 integrated processor for superior sound",
            "30-hour battery life",
            "Quick charge: 3 min charge gives 3 hours",
            "Hi-Res Audio support",
            "Speak-to-Chat and Quick Attention mode",
            "Touch sensor controls and voice assistant support"
        ],
        price: 399.99,
        image: "sony1.webp",
        images: ["sony1.webp", "sony2.webp", "sony3.webp", "sony4.webp"],
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Silver", code: "#a8a8a8" },
            { name: "Midnight Blue", code: "#191970" }
        ],
        category: "audio"
    },
    {
        id: 5,
        name: "iPad Pro 12.9-inch",
        description: "Professional tablet with M2 chip and Liquid Retina XDR display.",
        fullDescription: "The iPad Pro 12.9-inch is powered by the M2 chip, delivering desktop-class performance in a portable design. With the stunning Liquid Retina XDR display, advanced cameras, and Thunderbolt connectivity, this iPad is perfect for creative professionals and power users.",
        specs: [
            "M2 chip with 8-core CPU and 10-core GPU",
            "12.9-inch Liquid Retina XDR display",
            "Up to 2TB storage",
            "12MP Wide and 10MP Ultra Wide cameras",
            "LiDAR Scanner",
            "Thunderbolt / USB 4 port",
            "Face ID and Apple Pencil support"
        ],
        price: 1099.99,
        image: "ipad1.webp",
        images: ["ipad1.webp", "ipad2.webp", "ipad3.webp", "ipad4.webp"],
        colors: [
            { name: "Space Gray", code: "#5c5c5c" },
            { name: "Silver", code: "#e8e8e8" },
            { name: "11\"", code: "#5c5c5c" }
        ],
        category: "tablets"
    },
    {
        id: 6,
        name: "PlayStation 5 (Standard Edition)",
        description: "High-speed console with Ultra HD Blu-ray drive, custom SSD, and 3D Audio.",
        fullDescription: "Experience lightning-fast loading with an ultra-high-speed 825GB/1TB Custom SSD and deeper immersion with support for haptic feedback, adaptive triggers via the DualSense controller, and 'Tempest' 3D AudioTech. The Standard Edition includes a 4K UHD Blu-ray disc drive and is capable of 4K gaming at up to 120fps with ray tracing support.",        
        specs: [
            "Custom 8-core AMD Zen 2 CPU",
            "Custom AMD RDNA 2 GPU (10.28 TFLOPS)",
            "Ultra-High Speed Custom SSD (825GB or 1TB)",
            "4K UHD Blu-ray Optical Drive",
            "DualSense Wireless Controller with Haptic Feedback and Adaptive Triggers",
            "Tempest 3D AudioTech",
            "4K @ 120Hz and 8K support (via HDMI 2.1)",
            "Backward compatibility with most PS4 games"
        ],
        price: 349.99,
        image: "ps1.webp",
        images: ["ps1.webp", "ps2.png", "ps3.webp"],
        colors: [
            { name: "White", code: "#ffffff" },
            { name: "Neon Blue", code: "#00a8ff" },
            { name: "Neon Red", code: "#ff0050" },
            { name: "Black", code: "#000000" }
        ],
        category: "gaming"
    }
];

// Cart state
let cart = [];
let cartTotal = 0;

// AI Chatbot responses
const aiResponses = {
    greetings: [
        "Hello! I'm here to help you find the perfect tech products. What are you looking for?",
        "Hi there! I can help you with product recommendations, pricing, and any questions you have.",
        "Welcome! I'm your AI shopping assistant. How can I make your shopping experience better?"
    ],
    products: {
        laptops: "We have excellent laptops including the MacBook Pro 16-inch with M2 Pro chip for $2,499.99. It's perfect for professionals and offers incredible performance.",
        phones: "Our phone collection features the latest iPhone 15 Pro at $999.99 with advanced camera technology and titanium design.",
        monitors: "For displays, we recommend the Samsung 4K Monitor (32-inch) at $599.99 with stunning HDR visuals.",
        audio: "Audio enthusiasts love our Sony WH-1000XM5 headphones at $399.99 with premium noise-cancelling technology.",
        tablets: "The iPad Pro 12.9-inch with M2 chip is available for $1,099.99, perfect for creative professionals.",
        gaming: "Gamers enjoy the Nintendo Switch OLED at $349.99 with vibrant OLED display and enhanced audio."
    },
    pricing: "Our prices are competitive and include free shipping on orders over $100. We also offer financing options.",
    shipping: "We offer free shipping on orders over $100, and standard shipping takes 3-5 business days.",
    returns: "We have a 30-day return policy for all products in original condition. Returns are free and easy.",
    support: "Our customer support team is available 24/7 via chat, email, or phone to help with any questions.",
    default: "I'd be happy to help! Could you tell me more about what you're looking for? I can assist with product recommendations, pricing, shipping, or returns."
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    setupEventListeners();
    setupSmoothScrolling();
    setupAnimations();
    setupDarkTheme();
}

// Dark theme functionality
function setupDarkTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark', savedTheme === 'dark');
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add animation effect
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
}

// Load products into the grid
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group cursor-pointer';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Make card clickable (opens product details)
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the button
        if (e.target.closest('.add-to-cart')) {
            return;
        }
        openProductDetails(product);
    });
    
    // Get images array or fallback to single image
    const imagesArray = product.images || [product.image];
    
    // Build multiple image elements
    let imagesHTML = '';
    imagesArray.forEach((img, imgIndex) => {
        const isImageFile = /\.(png|jpg|jpeg|gif|webp)$/i.test(img);
        const opacityClass = imgIndex === 0 ? 'opacity-100' : 'opacity-0';
        
        if (isImageFile) {
            imagesHTML += `<img src="${img}" alt="${product.name}" class="product-img-item ${opacityClass} absolute inset-0 w-full h-full object-contain transition-opacity duration-500">`;
        } else {
            imagesHTML += `<i class="${img} product-img-item ${opacityClass} absolute inset-0 flex items-center justify-center text-6xl text-blue-500 dark:text-blue-400 transition-opacity duration-500"></i>`;
        }
    });
    
    // Build color options if available
    let colorsHTML = '';
    if (product.colors && product.colors.length > 0) {
        colorsHTML = `
            <div class="product-colors flex gap-2 mb-2">
                ${product.colors.slice(0, 4).map((color, idx) => 
                    `<span class="color-dot w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer" 
                          style="background-color: ${color.code}"
                          title="${color.name}"
                          onclick="event.stopPropagation()"></span>`
                ).join('')}
                ${product.colors.length > 4 ? `<span class="text-xs text-gray-500 dark:text-gray-400 flex items-center">+${product.colors.length - 4}</span>` : ''}
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="product-image-container w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative overflow-hidden">
            ${imagesHTML}
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
        </div>
        <div class="product-info p-6">
            <h3 class="product-title text-xl font-semibold text-gray-800 dark:text-white mb-2">${product.name}</h3>
            ${colorsHTML}
            <p class="product-description text-gray-600 dark:text-gray-300 mb-4 line-height-relaxed">${product.description}</p>
            <div class="product-price text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg transform hover:scale-105" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    
    // Add hover effect to cycle through images
    if (imagesArray.length > 1) {
        const imageContainer = card.querySelector('.product-image-container');
        let currentImageIndex = 0;
        let hoverInterval;
        
        card.addEventListener('mouseenter', function() {
            if (hoverInterval) clearInterval(hoverInterval);
            currentImageIndex = 0;
            
            hoverInterval = setInterval(() => {
                const images = imageContainer.querySelectorAll('.product-img-item');
                
                // Hide current image
                images[currentImageIndex].classList.add('opacity-0');
                images[currentImageIndex].classList.remove('opacity-100');
                
                // Move to next image
                currentImageIndex = (currentImageIndex + 1) % images.length;
                
                // Show next image
                images[currentImageIndex].classList.remove('opacity-0');
                images[currentImageIndex].classList.add('opacity-100');
            }, 1500); // Change image every 1.5 seconds on hover
        });
        
        card.addEventListener('mouseleave', function() {
            if (hoverInterval) clearInterval(hoverInterval);
            
            // Reset to first image
            const images = imageContainer.querySelectorAll('.product-img-item');
            images.forEach((img, idx) => {
                img.classList.remove('opacity-0', 'opacity-100');
                if (idx === 0) {
                    img.classList.add('opacity-100');
                } else {
                    img.classList.add('opacity-0');
                }
            });
        });
    }
    
    return card;
}

// Open product details in new tab
function openProductDetails(product) {
    const productPage = window.open('', '_blank');
    
    const isImageFile = /\.(png|jpg|jpeg|gif|webp)$/i.test(product.image);
    const imageElement = isImageFile 
        ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain max-w-2xl mx-auto">`
        : `<i class="${product.image}" style="font-size: 200px; color: #667eea;"></i>`;
    
    productPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${product.name} - TechStore</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: 'Inter', sans-serif; }
            </style>
        </head>
        <body class="bg-gray-50 min-h-screen">
            <div class="container mx-auto px-8 py-16 max-w-6xl">
                <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div class="grid md:grid-cols-2 gap-8 p-8">
                        <!-- Product Image -->
                        <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
                            ${imageElement}
                        </div>
                        
                        <!-- Product Details -->
                        <div class="space-y-6">
                            <div>
                                <h1 class="text-4xl font-bold text-gray-800 mb-4">${product.name}</h1>
                                ${product.colors && product.colors.length > 0 ? `
                                <div class="mb-4">
                                    <h3 class="text-sm font-semibold text-gray-700 mb-2">Available Colors</h3>
                                    <div class="flex flex-wrap gap-3">
                                        ${product.colors.map(color => `
                                            <div class="flex flex-col items-center">
                                                <span class="color-selector w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-all duration-200" 
                                                      style="background-color: ${color.code}"
                                                      title="${color.name}"></span>
                                                <span class="text-xs text-gray-600 mt-1">${color.name}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                                ` : ''}
                                <div class="text-4xl font-bold text-blue-600 mb-6">$${product.price.toFixed(2)}</div>
                            </div>
                            
                            <div class="border-t border-gray-200 pt-6">
                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
                                <p class="text-gray-600 leading-relaxed text-lg">${product.fullDescription || product.description}</p>
                            </div>
                            
                            ${product.specs ? `
                            <div class="border-t border-gray-200 pt-6">
                                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>
                                <ul class="space-y-3">
                                    ${product.specs.map(spec => `<li class="flex items-start text-gray-600">
                                        <i class="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                                        <span>${spec}</span>
                                    </li>`).join('')}
                                </ul>
                            </div>
                            ` : ''}
                            
                            <div class="border-t border-gray-200 pt-6">
                                <button onclick="window.opener && window.opener.addToCartFromDetails(${product.id}); window.close();" 
                                        class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl">
                                    <i class="fas fa-shopping-cart mr-2"></i>
                                    Add to Cart
                                </button>
                                <button onclick="window.location.reload()" 
                                        class="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                    <i class="fas fa-sync mr-2"></i>
                                    Close Window
                                </button>
                            </div>
                            
                            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                <div class="flex items-start">
                                    <i class="fas fa-shipping-fast text-blue-600 text-xl mr-3 mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-blue-900 mb-1">Free Shipping</h3>
                                        <p class="text-blue-700 text-sm">Free shipping on all orders over $100</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div class="flex items-start">
                                    <i class="fas fa-undo text-green-600 text-xl mr-3 mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-green-900 mb-1">30-Day Returns</h3>
                                        <p class="text-green-700 text-sm">30-day return policy on all products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    productPage.document.close();
}

// Add product to cart from details page
function addToCartFromDetails(productId) {
    addToCart(productId);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
    
    // Animate cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item flex items-center p-4 border-b border-gray-200 dark:border-gray-700 animate-slide-up';
        
        // Check if item.image is a file
        const isImageFile = /\.(png|jpg|jpeg|gif|webp)$/i.test(item.image);
        const imageElement = isImageFile 
            ? `<img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain">`
            : `<i class="${item.image}"></i>`;
        
        cartItem.innerHTML = `
            <div class="cart-item-image w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center text-2xl text-blue-500 dark:text-blue-400 mr-4">
                ${imageElement}
            </div>
            <div class="cart-item-info flex-1">
                <div class="cart-item-title font-semibold text-gray-800 dark:text-white mb-1">${item.name}</div>
                <div class="cart-item-price text-blue-600 dark:text-blue-400 font-semibold">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-all duration-200 hover:scale-110">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showToast('Item removed from cart', 'warning');
}

// Setup event listeners
function setupEventListeners() {
    // Cart functionality
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    // Chatbot functionality
    document.getElementById('chatbotToggle').addEventListener('click', toggleChatbot);
    document.getElementById('closeChatbot').addEventListener('click', closeChatbot);
    document.getElementById('sendMessage').addEventListener('click', sendMessage);
    
    // Chat input enter key
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // CTA button
    document.querySelector('.cta-btn').addEventListener('click', function() {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.getElementById('cartBtn');
        
        if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            closeCart();
        }
    });
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        cartSidebar.classList.remove('-right-96');
        cartSidebar.classList.add('right-0');
        updateCartUI();
    } else {
        cartSidebar.classList.add('-right-96');
        cartSidebar.classList.remove('right-0');
    }
}

// Close cart sidebar
function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.remove('open');
    cartSidebar.classList.add('-right-96');
    cartSidebar.classList.remove('right-0');
}

// Toggle chatbot
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.toggle('open');
    
    if (chatbotWindow.classList.contains('open')) {
        chatbotWindow.classList.remove('hidden');
        chatbotWindow.classList.add('flex');
        document.getElementById('chatInput').focus();
    } else {
        chatbotWindow.classList.add('hidden');
        chatbotWindow.classList.remove('flex');
    }
}

// Close chatbot
function closeChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.remove('open');
    chatbotWindow.classList.add('hidden');
    chatbotWindow.classList.remove('flex');
}

// Send message to chatbot
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate AI response delay
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

// Add message to chat
function addMessage(content, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message animate-fade-in`;
    
    if (sender === 'user') {
        messageDiv.innerHTML = `
            <div class="flex justify-end">
                <div class="message-content bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-2xl rounded-tr-sm max-w-xs">
                    ${content}
                </div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-2xl rounded-tl-sm max-w-xs">
                ${content}
            </div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate AI response
function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return getRandomResponse(aiResponses.greetings);
    }
    
    // Check for product categories
    for (const [category, response] of Object.entries(aiResponses.products)) {
        if (lowerMessage.includes(category)) {
            return response;
        }
    }
    
    // Check for specific keywords
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return aiResponses.pricing;
    }
    
    if (lowerMessage.includes('ship') || lowerMessage.includes('delivery')) {
        return aiResponses.shipping;
    }
    
    if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
        return aiResponses.returns;
    }
    
    if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
        return aiResponses.support;
    }
    
    if (lowerMessage.includes('laptop') || lowerMessage.includes('computer')) {
        return aiResponses.products.laptops;
    }
    
    if (lowerMessage.includes('phone') || lowerMessage.includes('mobile')) {
        return aiResponses.products.phones;
    }
    
    if (lowerMessage.includes('monitor') || lowerMessage.includes('screen')) {
        return aiResponses.products.monitors;
    }
    
    if (lowerMessage.includes('headphone') || lowerMessage.includes('audio')) {
        return aiResponses.products.audio;
    }
    
    if (lowerMessage.includes('tablet') || lowerMessage.includes('ipad')) {
        return aiResponses.products.tablets;
    }
    
    if (lowerMessage.includes('game') || lowerMessage.includes('nintendo')) {
        return aiResponses.products.gaming;
    }
    
    return aiResponses.default;
}

// Get random response from array
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    let bgColor = 'bg-green-500';
    if (type === 'error') bgColor = 'bg-red-500';
    if (type === 'warning') bgColor = 'bg-orange-500';
    
    toast.className = `fixed top-24 right-8 ${bgColor} text-white px-6 py-3 rounded-lg shadow-2xl z-50 animate-slide-down transform transition-all duration-300`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Setup smooth scrolling for navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Advanced AI Chatbot with more intelligent responses
class AIChatbot {
    constructor() {
        this.conversationHistory = [];
        this.productKnowledge = {
            'macbook': {
                name: 'MacBook Pro 16-inch',
                price: 2499.99,
                features: ['M2 Pro chip', '16GB RAM', '512GB SSD', '16-inch Liquid Retina XDR display'],
                category: 'laptops'
            },
            'iphone': {
                name: 'iPhone 15 Pro',
                price: 999.99,
                features: ['A17 Pro chip', '48MP camera', 'Titanium design', '5G connectivity'],
                category: 'phones'
            },
            'monitor': {
                name: 'Samsung 4K Monitor',
                price: 599.99,
                features: ['32-inch display', '4K UHD resolution', 'HDR support', 'USB-C connectivity'],
                category: 'monitors'
            }
        };
    }
    
    processMessage(message) {
        this.conversationHistory.push({ role: 'user', content: message });
        
        const response = this.generateResponse(message);
        this.conversationHistory.push({ role: 'assistant', content: response });
        
        return response;
    }
    
    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Product comparison
        if (lowerMessage.includes('compare') || lowerMessage.includes('difference')) {
            return this.handleComparison(lowerMessage);
        }
        
        // Product recommendations
        if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
            return this.handleRecommendation(lowerMessage);
        }
        
        // Price inquiries
        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return this.handlePricing(lowerMessage);
        }
        
        // Feature inquiries
        if (lowerMessage.includes('feature') || lowerMessage.includes('spec')) {
            return this.handleFeatures(lowerMessage);
        }
        
        // Default response
        return this.getDefaultResponse(lowerMessage);
    }
    
    handleComparison(message) {
        const products = Object.keys(this.productKnowledge);
        const mentionedProducts = products.filter(product => 
            message.includes(product)
        );
        
        if (mentionedProducts.length >= 2) {
            return `I can help you compare ${mentionedProducts.join(' and ')}. Both are excellent products with different strengths. Would you like specific details about their features or pricing?`;
        }
        
        return "I'd be happy to help you compare products! Which specific items would you like to compare?";
    }
    
    handleRecommendation(message) {
        if (message.includes('laptop') || message.includes('computer')) {
            return "For laptops, I recommend the MacBook Pro 16-inch. It's perfect for professionals with its M2 Pro chip and stunning 16-inch display. It's $2,499.99 and offers exceptional performance.";
        }
        
        if (message.includes('phone') || message.includes('mobile')) {
            return "The iPhone 15 Pro is our top phone recommendation at $999.99. It features the latest A17 Pro chip, 48MP camera system, and titanium design for durability.";
        }
        
        if (message.includes('monitor') || message.includes('display')) {
            return "For monitors, I suggest the Samsung 4K Monitor (32-inch) at $599.99. It offers stunning 4K UHD visuals with HDR support, perfect for work or entertainment.";
        }
        
        return "I'd be happy to recommend products! What type of device are you looking for? I can suggest laptops, phones, monitors, tablets, audio equipment, or gaming consoles.";
    }
    
    handlePricing(message) {
        const products = Object.keys(this.productKnowledge);
        const mentionedProduct = products.find(product => message.includes(product));
        
        if (mentionedProduct) {
            const product = this.productKnowledge[mentionedProduct];
            return `The ${product.name} is priced at $${product.price.toFixed(2)}. This includes free shipping and our 30-day return policy.`;
        }
        
        return "Our prices are competitive and include free shipping on orders over $100. We also offer financing options. Which specific product are you interested in?";
    }
    
    handleFeatures(message) {
        const products = Object.keys(this.productKnowledge);
        const mentionedProduct = products.find(product => message.includes(product));
        
        if (mentionedProduct) {
            const product = this.productKnowledge[mentionedProduct];
            return `The ${product.name} features: ${product.features.join(', ')}. It's priced at $${product.price.toFixed(2)} and is perfect for ${product.category} enthusiasts.`;
        }
        
        return "I can provide detailed feature information for any of our products. Which product would you like to know more about?";
    }
    
    getDefaultResponse(message) {
        const responses = [
            "I'm here to help you find the perfect tech products! What specific information can I provide?",
            "Feel free to ask me about our products, pricing, features, or recommendations. I'm here to assist!",
            "I can help with product comparisons, recommendations, pricing, and technical specifications. What would you like to know?",
            "Our store offers a wide range of tech products. Is there something specific you're looking for?",
            "I'm your AI shopping assistant! I can help you find the right products for your needs and budget."
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize advanced chatbot
const advancedChatbot = new AIChatbot();

// Enhanced message sending with advanced AI
function sendAdvancedMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot-message';
    typingIndicator.innerHTML = '<div class="message-content"><div class="loading"></div> AI is typing...</div>';
    document.getElementById('chatbotMessages').appendChild(typingIndicator);
    
    // Simulate AI response delay
    setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();
        
        // Generate advanced AI response
        const response = advancedChatbot.processMessage(message);
        addMessage(response, 'bot');
    }, 1500);
}

// Add search functionality
function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.className = 'search-input';
    searchInput.style.display = 'none';
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.style.display === 'none') {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            const description = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (title.includes(query) || description.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    document.querySelector('.nav').appendChild(searchInput);
}

// Initialize search functionality
setupSearch();

// Add cart animation
function animateCart() {
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
}

// Initialize cart animation
animateCart();

// Add loading states
function showLoading(element) {
    element.innerHTML = '<div class="loading"></div>';
}

function hideLoading(element) {
    // Remove loading and restore content
}

// Add error handling
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    showToast('Something went wrong. Please try again.', 'error');
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        closeCart();
        closeChatbot();
    }
    
    // Ctrl/Cmd + K opens search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector('.search-input').focus();
    }
});

// Add performance monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
}

// Initialize performance monitoring
measurePerformance();

// Add accessibility features
function setupAccessibility() {
    // Add keyboard navigation for cart and chatbot
    const cartBtn = document.getElementById('cartBtn');
    const chatbotToggle = document.getElementById('chatbotToggle');
    
    cartBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCart();
        }
    });
    
    chatbotToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleChatbot();
        }
    });
    
    // Add ARIA labels
    cartBtn.setAttribute('aria-label', 'Open shopping cart');
    chatbotToggle.setAttribute('aria-label', 'Open AI assistant');
}

// Initialize accessibility
setupAccessibility();

console.log('TechStore E-commerce Website Loaded Successfully! 🚀');
