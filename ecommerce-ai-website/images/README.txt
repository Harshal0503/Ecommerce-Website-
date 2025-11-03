HOW TO ADD YOUR OWN PRODUCT IMAGES
===================================

1. Copy your image file (PNG, JPG, JPEG, GIF, or WEBP) to this images/ folder
   OR to the main ecommerce-ai-website folder

2. Update the products array in script.js:
   
   For single image:
   image: "images/your-image.png"
   
   For multiple images (hover effect):
   images: ["images/your-image.png", "images/angle-2.png", "images/angle-3.png"]

3. The system will automatically detect and display your images!

Example:
{
    id: 7,
    name: "My Product",
    description: "Description here",
    price: 99.99,
    image: "images/my-product.png",  // Primary image
    images: ["images/my-product.png", "images/angle-2.png", "images/angle-3.png"],  // Multiple images
    category: "electronics"
}

Supported formats: PNG, JPG, JPEG, GIF, WEBP

NOTE: Multiple images will automatically cycle when you hover over the product!


