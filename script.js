// ===================================
// Image Gallery Data
// ===================================
const galleryData = [
    {
        id: 1,
        title: "Misty Mountain Peaks",
        description: "Breathtaking sunrise over layered mountain ranges with vibrant sky",
        category: "nature",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
    },
    {
        id: 2,
        title: "Enchanted Forest",
        description: "Sunlight filtering through ancient trees in a serene woodland",
        category: "nature",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&q=80"
    },
    {
        id: 3,
        title: "Ocean Serenity",
        description: "Peaceful coastal scene with crystal clear turquoise waters",
        category: "nature",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&q=80"
    },
    {
        id: 4,
        title: "Modern Minimalism",
        description: "Contemporary architectural design with clean geometric lines",
        category: "architecture",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80"
    },
    {
        id: 5,
        title: "Classical Elegance",
        description: "Historic European architecture with ornate details and stonework",
        category: "architecture",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80"
    },
    {
        id: 6,
        title: "Glass & Steel",
        description: "Futuristic skyscraper with reflective glass facade",
        category: "architecture",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&q=80"
    },
    {
        id: 7,
        title: "Fluid Dreams",
        description: "Abstract colorful fluid art with vibrant gradient swirls",
        category: "abstract",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80"
    },
    {
        id: 8,
        title: "Neon Geometry",
        description: "Futuristic geometric patterns with glowing neon colors",
        category: "abstract",
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80"
    },
    {
        id: 9,
        title: "Color Explosion",
        description: "Vibrant abstract composition with dynamic color blending",
        category: "abstract",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&q=80"
    },
    {
        id: 10,
        title: "City Lights",
        description: "Urban cityscape illuminated at night with stunning reflections",
        category: "urban",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&q=80"
    },
    {
        id: 11,
        title: "Metropolitan Life",
        description: "Busy urban street scene with modern buildings and energy",
        category: "urban",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80"
    },
    {
        id: 12,
        title: "Urban Sunset",
        description: "City skyline silhouetted against a dramatic sunset sky",
        category: "urban",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80"
    }
];

// ===================================
// State Management
// ===================================
let currentCategory = 'all';
let currentImageIndex = 0;
let filteredImages = [...galleryData];

// ===================================
// DOM Elements
// ===================================
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// ===================================
// Initialize Gallery
// ===================================
function initGallery() {
    renderGallery();
    setupEventListeners();
}

// ===================================
// Render Gallery
// ===================================
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredImages.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                <span class="gallery-category">${item.category}</span>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// ===================================
// Filter Functionality
// ===================================
function filterGallery(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredImages = [...galleryData];
    } else {
        filteredImages = galleryData.filter(item => item.category === category);
    }
    
    renderGallery();
    
    // Update active button
    filterButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ===================================
// Lightbox Functions
// ===================================
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const currentImage = filteredImages[currentImageIndex];
    
    lightboxImage.src = currentImage.image;
    lightboxImage.alt = currentImage.title;
    lightboxTitle.textContent = currentImage.title;
    lightboxDescription.textContent = currentImage.description;
    lightboxCategory.textContent = currentImage.category;
}

function navigateLightbox(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    updateLightboxContent();
}

// ===================================
// Event Listeners
// ===================================
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterGallery(btn.dataset.category);
        });
    });
    
    // Lightbox controls
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateLightbox('prev');
                break;
            case 'ArrowRight':
                navigateLightbox('next');
                break;
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                navigateLightbox('next');
            } else {
                navigateLightbox('prev');
            }
        }
    }
}

// ===================================
// Initialize on DOM Load
// ===================================
document.addEventListener('DOMContentLoaded', initGallery);
