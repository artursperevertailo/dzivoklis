/**
 * Lightbox functionality for image gallery
 * Handles opening, closing, and navigation between images
 */
(function() {
    'use strict';

    // Configuration
    const DEBUG_MODE = false; // Set to false in production to disable console logs
    
    // Fallback image for failed loads
    const FALLBACK_IMAGE = {
        src: './images/ēka.PNG',
        alt: 'Image not available'
    };

    // DOM Elements
    let lightbox, lightboxImage, lightboxClose, lightboxPrev, lightboxNext, gridContainer;
    
    // State
    let currentImageIndex = 0;

    // Lightbox image data
    const lightboxImageData = [
        { src: './images/ēka.PNG', alt: 'Ēka' },
        { src: './images/ēka2.PNG', alt: 'Ēka divi' },
        { src: './images/virtuve3.PNG', alt: 'Virtuve trīs' }
    ];

    /**
     * Logs messages only when debug mode is enabled
     * @param {string} message - Message to log
     * @param {any} data - Optional data to log
     */
    function debugLog(message, data = null) {
        if (DEBUG_MODE) {
            if (data) {
                console.log(message, data);
            } else {
                console.log(message);
            }
        }
    }

    /**
     * Validates and parses data attributes to ensure they are valid integers
     * @param {string} value - The value to parse
     * @param {number} fallback - Fallback value if parsing fails
     * @returns {number} Parsed integer or fallback value
     */
    function parseDataIndex(value, fallback = 0) {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? fallback : parsed;
    }

    /**
     * Handles image load errors by replacing with fallback image
     * @param {Event} event - Error event
     */
    function handleImageError(event) {
        const img = event.target;
        debugLog('Image failed to load:', img.src);
        img.src = FALLBACK_IMAGE.src;
        img.alt = FALLBACK_IMAGE.alt;
    }

    /**
     * Opens the lightbox and displays the specified image
     * @param {number} index - Index of the image to display
     */
    function openLightbox(index) {
        if (!lightbox || !lightboxImageData.length) {
            debugLog('Cannot open lightbox: missing elements or no images');
            return;
        }

        // Validate index bounds
        if (index < 0 || index >= lightboxImageData.length) {
            debugLog('Invalid image index:', index);
            index = 0;
        }

        currentImageIndex = index;
        updateLightbox();
        lightbox.classList.add('show');
        debugLog('Opening lightbox for image:', index);
    }

    /**
     * Closes the lightbox and hides it from view
     */
    function closeLightbox() {
        if (!lightbox) {
            debugLog('Cannot close lightbox: missing element');
            return;
        }

        lightbox.classList.remove('show');
        debugLog('Closing lightbox');
    }

    /**
     * Updates the lightbox content with the current image data
     * Handles edge cases and validates data before updating
     */
    function updateLightbox() {
        if (!lightboxImage || !lightboxImageData.length) {
            debugLog('Cannot update lightbox: missing elements or no images');
            return;
        }

        const currentImage = lightboxImageData[currentImageIndex];
        if (!currentImage) {
            debugLog('Invalid current image data at index:', currentImageIndex);
            return;
        }

        lightboxImage.src = currentImage.src;
        lightboxImage.alt = currentImage.alt || '';
        debugLog('Lightbox updated with image:', currentImage.alt);
    }

    /**
     * Navigates to the next image in the gallery
     * Wraps around to the first image when reaching the end
     */
    function nextImage() {
        if (!lightboxImageData.length) {
            debugLog('Cannot navigate: no images available');
            return;
        }

        currentImageIndex = (currentImageIndex + 1) % lightboxImageData.length;
        updateLightbox();
    }

    /**
     * Navigates to the previous image in the gallery
     * Wraps around to the last image when reaching the beginning
     */
    function prevImage() {
        if (!lightboxImageData.length) {
            debugLog('Cannot navigate: no images available');
            return;
        }

        currentImageIndex = (currentImageIndex - 1 + lightboxImageData.length) % lightboxImageData.length;
        updateLightbox();
    }

    /**
     * Handles clicks on grid images using event delegation
     * @param {Event} event - Click event
     */
    function handleGridClick(event) {
        const target = event.target;
        
        // Check if clicked element is an image
        if (!target.classList.contains('grid-image')) {
            return;
        }

        // Get and validate the data-index attribute
        const dataIndex = target.getAttribute('data-index');
        const index = parseDataIndex(dataIndex, 0);
        
        debugLog('Grid image clicked:', index);
        openLightbox(index);
    }

    /**
     * Closes lightbox when clicking outside the image content
     * @param {Event} event - Click event
     */
    function handleLightboxBackgroundClick(event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    }

    /**
     * Initializes the lightbox functionality
     * Sets up DOM elements, event listeners, and validates configuration
     */
    function initializeLightbox() {
        // Get DOM elements
        lightbox = document.getElementById("lightbox");
        lightboxImage = document.getElementById("lightbox-image");
        lightboxClose = document.getElementById("lightbox-close");
        lightboxPrev = document.getElementById("lightbox-prev");
        lightboxNext = document.getElementById("lightbox-next");
        gridContainer = document.querySelector('.grid-container');

        // Validate required elements exist
        if (!lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext || !gridContainer) {
            debugLog('Required DOM elements not found');
            return;
        }

        // Validate image data
        if (!lightboxImageData.length) {
            debugLog('No images available for lightbox');
            return;
        }

        // Add error handling to all images
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
            img.addEventListener('error', handleImageError);
        });

        // Set up event delegation for grid clicks
        gridContainer.addEventListener('click', handleGridClick);

        // Set up lightbox event listeners
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', prevImage);
        lightboxNext.addEventListener('click', nextImage);
        lightbox.addEventListener('click', handleLightboxBackgroundClick);

        debugLog('Lightbox initialized successfully');
    }

    // Initialize when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLightbox);
    } else {
        initializeLightbox();
    }
})();

