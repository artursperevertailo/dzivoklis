// Custom easing functions
try {
  CustomEase.create("easeOutFast", "M0,0 C0.25,0.1 0.25,1 1,1");
  CustomEase.create("easeInFast", "M0,0 C0.5,0 0.75,0.2 1,1");
  console.log('CustomEase functions created successfully');
} catch (error) {
  console.error('Error creating CustomEase functions:', error);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded, initializing JavaScript...');

  // DOM Elements
  const menuBtn = document.getElementById("menu-btn");
  const dropdown = document.getElementById("dropdown");
  const dropdownContent = document.querySelector(".dropdown__content");
  const allContent = document.getElementById("all-content");
  const navigation = document.getElementById("navigation");
  const navLogo = document.querySelector(".navigation__logo");
  const navRight = document.querySelector(".navigation__right");

  // Contact section elements
  const contactLink = document.getElementById("contact-link");
  const contactSection = document.getElementById("contact-section");

  // Lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const gridImages = document.querySelectorAll('.grid-image');

  // Debug logging
  console.log('DOM Elements found:', {
    menuBtn: !!menuBtn,
    dropdown: !!dropdown,
    dropdownContent: !!dropdownContent,
    allContent: !!allContent,
    navigation: !!navigation,
    navLogo: !!navLogo,
    navRight: !!navRight,
    contactLink: !!contactLink,
    contactSection: !!contactSection,
    lightbox: !!lightbox,
    lightboxImage: !!lightboxImage,
    lightboxClose: !!lightboxClose,
    lightboxPrev: !!lightboxPrev,
    lightboxNext: !!lightboxNext,
    gridImages: gridImages.length
  });

  let isOpen = false;
  let currentImageIndex = 0;

  // Lightbox image data
  const lightboxImageData = [
    {
      src: './images/ēka.PNG',
      alt: 'Ēka'
    },
    {
      src: './images/ēka2.PNG',
      alt: 'Ēka divi'
    },
    {
      src: './images/virtuve3.PNG',
      alt: 'Virtuve trīs'
    },
    {
      src: './images/virtuve.PNG',
      alt: 'Virtuve'
    },
    {
      src: './images/virtuve2.PNG',
      alt: 'Virtuve divi'
    },
    {
      src: './images/guļamistaba.PNG',
      alt: 'Guļamistaba'
    },
    {
      src: './images/guļamistaba2.PNG',
      alt: 'Guļamistaba divi'
    },
    {
      src: './images/viesistaba.PNG',
      alt: 'Viesistaba'
    },
    {
      src: './images/koridors.PNG',
      alt: 'Koridors'
    },
    {
      src: './images/koridors2.PNG',
      alt: 'Koridors divi'
    },
    {
      src: './images/tualete.PNG',
      alt: 'Tualete'
    },
    {
      src: './images/plānojums.jpg',
      alt: 'Plānojums'
    }
  ];

  // Dropdown Menu Functions
  function openMenu() {
    console.log('Opening menu...');
    try {
      dropdown.classList.add("open");
      allContent.classList.add("menu-open");

      // Update text to "AIZVĒRT"
      const menuText = menuBtn.querySelector('.menu-text');
      gsap.to(menuText, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          menuText.textContent = "AIZVĒRT";
          gsap.to(menuText, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        }
      });

      // Animate circle pulse icon
      gsap.to(menuBtn.querySelector('.circle-pulse .circle'), {
        scale: 0.7,
        ease: "power2.out",
        duration: 0.4
      });
      gsap.to(menuBtn.querySelector('.circle-pulse .ring'), {
        scale: 1.5,
        width: 8,
        height: 8,
        opacity: 0.8,
        ease: "power2.out",
        duration: 0.5
      });
      gsap.to(menuBtn.querySelector('.circle-pulse .wave'), {
        scale: 2.5,
        width: 8,
        height: 8,
        opacity: 0.4,
        ease: "power1.out",
        duration: 0.8
      });
      // Animate particles
      const particles = menuBtn.querySelectorAll('.circle-pulse .particle');
      particles.forEach((particle, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const distance = 12;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        gsap.to(particle, {
          x: x,
          y: y,
          ease: "power2.out",
          duration: 0.5,
          delay: i * 0.05
        });
      });

      // Reset elements
      gsap.set(dropdownContent, {
        opacity: 0,
        y: 20
      });

      // Animate body padding
      gsap.to("body", {
        paddingRight: "var(--scrollbar-width)",
        duration: 0.6,
        ease: "easeOutFast"
      });

      // Animate navigation elements
      gsap.to([navLogo, navRight], {
        x: -100,
        duration: 0.6,
        ease: "easeOutFast"
      });

      // Animate dropdown expansion
      gsap.to(dropdown, {
        width: "100%",
        height: "100vh",
        duration: 0.6,
        ease: "easeOutFast"
      });

      // Animate dropdown content
      gsap.to(dropdownContent, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "easeOutFast"
      });
      
      console.log('Menu opened successfully');
    } catch (error) {
      console.error('Error opening menu:', error);
    }
  }

  function closeMenu() {
    console.log('Closing menu...');
    try {
      // Animate body padding back
      gsap.to("body", {
        paddingRight: 0,
        duration: 0.6,
        ease: "easeInFast"
      });

      // Animate navigation elements back
      gsap.to([navLogo, navRight], {
        x: 0,
        duration: 0.6,
        ease: "easeInFast"
      });

      // Animate dropdown collapse
      gsap.to(dropdown, {
        width: "0%",
        height: "0vh",
        duration: 0.6,
        ease: "easeInFast"
      });

      // Animate dropdown content
      gsap.to(dropdownContent, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "easeInFast"
      });

      // Update text back to "ATVĒRT"
      const menuText = menuBtn.querySelector('.menu-text');
      gsap.to(menuText, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          menuText.textContent = "ATVĒRT";
          gsap.to(menuText, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          });
        }
      });

      // Animate circle pulse icon back to normal
      gsap.to(menuBtn.querySelector('.circle-pulse .circle'), {
        scale: 1,
        ease: "power2.out",
        duration: 0.4
      });
      gsap.to(menuBtn.querySelector('.circle-pulse .ring'), {
        scale: 0.5,
        width: 8,
        height: 8,
        opacity: 0,
        ease: "power2.in",
        duration: 0.4
      });
      gsap.to(menuBtn.querySelector('.circle-pulse .wave'), {
        scale: 0.5,
        width: 8,
        height: 8,
        opacity: 0,
        ease: "power2.in",
        duration: 0.4
      });
      gsap.to(menuBtn.querySelectorAll('.circle-pulse .particle'), {
        x: 0,
        y: 0,
        ease: "power2.in",
        duration: 0.4
      });

      // Remove classes after animation
      setTimeout(() => {
        dropdown.classList.remove("open");
        allContent.classList.remove("menu-open");
      }, 600);
      
      console.log('Menu closed successfully');
    } catch (error) {
      console.error('Error closing menu:', error);
    }
  }

  // Lightbox Functions
  function openLightbox(index) {
    console.log('Opening lightbox for image:', index);
    try {
      currentImageIndex = index;
      updateLightbox();
      
      // Saglabājam pašreizējo scroll pozīciju
      const currentScrollY = window.scrollY;
      
      // Iestatām lightbox pozīciju tieši tur, kur lietotājs atrodas
      lightbox.style.top = currentScrollY + 'px';
      
      // Atveram lightbox
      gsap.set(lightbox, { opacity: 0 });
      lightbox.classList.add('show');
      
      // Lightbox atveras tieši tur, kur lietotājs atrodas
      gsap.to(lightbox, {
        opacity: 1,
        duration: 0.3,
        ease: "easeOutFast",
        onComplete: () => {
          // Pārliecināmies, ka lightbox ir redzams
          lightbox.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'center'
          });
        }
      });
      
      console.log('Lightbox opened successfully at current position');
    } catch (error) {
      console.error('Error opening lightbox:', error);
    }
  }

  function closeLightbox() {
    console.log('Closing lightbox...');
    try {
      gsap.to(lightbox, {
        opacity: 0,
        duration: 0.3,
        ease: "easeInFast",
        onComplete: () => {
          lightbox.classList.remove('show');
        }
      });
      
      console.log('Lightbox closed successfully');
    } catch (error) {
      console.error('Error closing lightbox:', error);
    }
  }

  function updateLightbox() {
    try {
      const currentImage = lightboxImageData[currentImageIndex];
      lightboxImage.src = currentImage.src;
      lightboxImage.alt = currentImage.alt;
      console.log('Lightbox updated with image:', currentImage.alt);
    } catch (error) {
      console.error('Error updating lightbox:', error);
    }
  }

  function nextImage() {
    console.log('Next image...');
    try {
      currentImageIndex = (currentImageIndex + 1) % lightboxImageData.length;
      updateLightbox();
      
      // Tūlītēja attēla maiņa bez animācijas
      gsap.set(lightboxImage, { opacity: 1, scale: 1 });
    } catch (error) {
      console.error('Error going to next image:', error);
    }
  }

  function prevImage() {
    console.log('Previous image...');
    try {
      currentImageIndex = (currentImageIndex - 1 + lightboxImageData.length) % lightboxImageData.length;
      updateLightbox();
      
      // Tūlītēja attēla maiņa bez animācijas
      gsap.set(lightboxImage, { opacity: 1, scale: 1 });
    } catch (error) {
      console.error('Error going to previous image:', error);
    }
  }

  // Event Listeners
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      console.log('Menu button clicked');
      if (!isOpen) {
        openMenu();
      } else {
        closeMenu();
      }
      isOpen = !isOpen;
    });
  } else {
    console.error('Menu button not found!');
  }

  // Dropdown close button
  const dropdownClose = document.getElementById('dropdown-close');
  if (dropdownClose) {
    dropdownClose.addEventListener("click", () => {
      console.log('Dropdown close button clicked');
      closeMenu();
      isOpen = false;
    });
  } else {
    console.error('Dropdown close button not found!');
  }



  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {

    
    if (dropdown && menuBtn && !dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
      dropdown.classList.remove('open');
      isOpen = false;
    }
  });

  // Lightbox event listeners
  if (gridImages.length > 0) {
    gridImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        console.log('Grid image clicked:', index);
        openLightbox(index);
      });
    });
  } else {
    console.error('No grid images found!');
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  } else {
    console.error('Lightbox close button not found!');
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
  } else {
    console.error('Lightbox prev button not found!');
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
  } else {
    console.error('Lightbox next button not found!');
  }

  // Close lightbox on background click
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  } else {
    console.error('Lightbox not found!');
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightbox && lightbox.classList.contains('show')) {
        closeLightbox();
      } else if (isOpen) {
        closeMenu();
        isOpen = false;
      }
    }
    
    if (lightbox && lightbox.classList.contains('show')) {
      switch(e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    }
  });

  // Touch/swipe support for lightbox
  let startX = 0;
  let endX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const threshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }

  // Grid item hover effects
  document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        scale: 1.02,
        duration: 0.3,
        ease: "easeOutFast"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        ease: "easeOutFast"
      });
    });
  });

  // Initialize
  console.log('Apartment Gallery initialized successfully!');
  console.log('GSAP version:', gsap.version);
  console.log('CustomEase available:', typeof CustomEase !== 'undefined');

  // ------------------ Maksājumi Section Functionality ------------------
  const maksajumiSection = document.getElementById('maksajumi-section');
  const maksajumiPaymentPassword = document.getElementById('maksajumi-payment-password');
  const maksajumiPasswordSubmit = document.getElementById('maksajumi-password-submit');
  const maksajumiPasswordError = document.getElementById('maksajumi-password-error');
  const maksajumiPaymentsContent = document.getElementById('maksajumi-payments-content');

  // ------------------ Papildus Informācija Section Functionality ------------------
  const papildusSection = document.getElementById('papildus-section');
  const papildusPaymentPassword = document.getElementById('papildus-payment-password');
  const papildusPasswordSubmit = document.getElementById('papildus-password-submit');
  const papildusPasswordError = document.getElementById('papildus-password-error');
  const papildusContent = document.getElementById('papildus-content');

  // ------------------ PDF Viewer Functionality ------------------
  // PDF documents mapping - update these with your actual PDF filenames
  const pdfDocuments = {
    'zeme-noma': {
      title: 'Zemes Noma',
      filename: 'ZEMES NOMA.pdf',
      path: './documents/ZEMES NOMA.pdf'
    },
    'meza-iela-plans': {
      title: 'Meža Iela Plāns', 
      filename: 'Meža iela_plāns.pdf',
      path: './documents/Meža iela_plāns.pdf'
    },
    'atskaite-2009-2025': {
      title: 'Atskaite par paveikto 2009-2025',
      filename: 'Atskaite par paveikto 2009-2025.pdf', 
      path: './documents/Atskaite par paveikto 2009-2025.pdf'
    }
  };

  // PDF item click handlers - open PDFs directly
  document.addEventListener('click', (e) => {
    if (e.target.closest('.pdf-item')) {
      const pdfItem = e.target.closest('.pdf-item');
      const pdfKey = pdfItem.dataset.pdf;
      
      if (pdfDocuments[pdfKey]) {
        // Open PDF directly in new tab
        window.open(pdfDocuments[pdfKey].path, '_blank');
        console.log('PDF opened directly:', pdfDocuments[pdfKey].title);
      }
    }
  });

  // Navigation link click handlers
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      if (link.textContent === 'MAKSĀJUMI') {
        // Show maksājumi section
        if (maksajumiSection) {
          maksajumiSection.style.display = 'block';
          
          // Scroll to section
          maksajumiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Add entrance animation
          gsap.fromTo(maksajumiSection, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "easeOutFast" }
          );
        }
      } else if (link.textContent === 'PAPILDUS INFORMĀCIJA') {
        // Show papildus informācija section
        if (papildusSection) {
          papildusSection.style.display = 'block';
          
          // Scroll to section
          papildusSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Add entrance animation
          gsap.fromTo(papildusSection, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "easeOutFast" }
          );
        }
      }
    });
  });

  // Maksājumi password protection
  if (maksajumiPasswordSubmit) {
    maksajumiPasswordSubmit.addEventListener('click', checkMaksajumiPassword);
  } else {
    console.error('Maksājumi password submit button not found!');
  }

  if (maksajumiPaymentPassword) {
    maksajumiPaymentPassword.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkMaksajumiPassword();
      }
    });
  } else {
    console.error('Maksājumi payment password input not found!');
  }

  // Papildus informācija password protection
  if (papildusPasswordSubmit) {
    papildusPasswordSubmit.addEventListener('click', checkPapildusPassword);
  } else {
    console.error('Papildus informācija password submit button not found!');
  }

  if (papildusPaymentPassword) {
    papildusPaymentPassword.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkPapildusPassword();
      }
    });
  } else {
    console.error('Papildus informācija payment password input not found!');
  }

  function checkMaksajumiPassword() {
    const enteredPassword = maksajumiPaymentPassword.value.trim();
    const CORRECT_PASSWORD = 'dzivoklis2025';
    
    if (enteredPassword === CORRECT_PASSWORD) {
      // Hide password protection
      document.querySelector('.maksajumi-password-protection').style.display = 'none';
      
      // Show payments content
      maksajumiPaymentsContent.style.display = 'block';
      
      // Clear password field
      maksajumiPaymentPassword.value = '';
      
      // Hide any previous error
      maksajumiPasswordError.style.display = 'none';
      
      // Add success animation
      gsap.fromTo(maksajumiPaymentsContent, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "easeOutFast" }
      );
      
      console.log('Maksājumi password correct - content unlocked');
    } else {
      // Show error message
      maksajumiPasswordError.style.display = 'block';
      
      // Clear password field
      maksajumiPaymentPassword.value = '';
      
      // Focus back to password input
      maksajumiPaymentPassword.focus();
      
      // Add error animation
      gsap.fromTo(maksajumiPasswordError, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
      
      console.log('Incorrect maksājumi password entered');
    }
  }

  function checkPapildusPassword() {
    const enteredPassword = papildusPaymentPassword.value.trim();
    const CORRECT_PASSWORD = 'dzivoklis2025';
    
    if (enteredPassword === CORRECT_PASSWORD) {
      // Hide password protection
      document.querySelector('.papildus-password-protection').style.display = 'none';
      
      // Show papildus content
      papildusContent.style.display = 'block';
      
      // Clear password field
      papildusPaymentPassword.value = '';
      
      // Hide any previous error
      papildusPasswordError.style.display = 'none';
      
      // Add success animation
      gsap.fromTo(papildusContent, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "easeOutFast" }
      );
      
      console.log('Papildus password correct - content unlocked');
    } else {
      // Show error message
      papildusPasswordError.style.display = 'block';
      
      // Clear password field
      papildusPaymentPassword.value = '';
      
      // Focus back to password input
      papildusPaymentPassword.focus();
      
      // Add error animation
      gsap.fromTo(papildusPasswordError, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
      
      console.log('Incorrect papildus password entered');
    }
  }

  // Maksājumi bill item click functionality
  document.addEventListener('click', (e) => {
    if (e.target.closest('.maksajumi-bill-item')) {
      const billItem = e.target.closest('.maksajumi-bill-item');
      const billType = billItem.dataset.bill;
      const billImage = billItem.querySelector('.maksajumi-bill-image');
      
      if (billImage && billImage.src) {
        // Open bill image in lightbox
        openMaksajumiBillLightbox(billImage.src, billType);
      }
    }
  });

  function openMaksajumiBillLightbox(imageSrc, billType) {
    // Create temporary lightbox for bills
    const billLightbox = document.createElement('div');
    billLightbox.className = 'bill-lightbox';
    billLightbox.innerHTML = `
      <div class="bill-lightbox-content">
        <span class="bill-lightbox-close">&times;</span>
        <img src="${imageSrc}" alt="${billType} rēķins" class="bill-lightbox-image">
      </div>
    `;
    
    document.body.appendChild(billLightbox);
    
    // Show lightbox
    gsap.fromTo(billLightbox, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "easeOutFast" }
    );
    
    // Close functionality
    const closeBtn = billLightbox.querySelector('.bill-lightbox-close');
    closeBtn.addEventListener('click', () => {
      gsap.to(billLightbox, {
        opacity: 0,
        duration: 0.3,
        ease: "easeOutFast",
        onComplete: () => {
          document.body.removeChild(billLightbox);
        }
      });
    });
    
    // Close on background click
    billLightbox.addEventListener('click', (e) => {
      if (e.target === billLightbox) {
        gsap.to(billLightbox, {
          opacity: 0,
          duration: 0.3,
          ease: "easeOutFast",
          onComplete: () => {
            document.body.removeChild(billLightbox);
          }
        });
      }
    });
  }

  console.log('Maksājumi section functionality initialized');
  console.log('Papildus informācija section functionality initialized');
  console.log('PDF viewer functionality initialized');

  // Contact Section Functionality
  function openContactSection() {
    // Don't hide all content - just show contact section
    // if (allContent) allContent.style.display = 'none';
    if (dropdown) dropdown.style.display = 'none';
    if (maksajumiSection) maksajumiSection.style.display = 'none';
    if (papildusSection) papildusSection.style.display = 'none';
    
    // Show contact section
    contactSection.style.display = 'flex';
    
    // Animate in
    gsap.fromTo(contactSection, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "easeOutFast" }
    );
    
    // Animate contact container
    gsap.fromTo(contactSection.querySelector('.contact-container'), 
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "easeOutFast" }
    );
    
    console.log('Contact section opened');
  }

  function closeContactSection() {
    // Animate out
    gsap.to(contactSection, {
      opacity: 0,
      duration: 0.3,
      ease: "easeOutFast",
      onComplete: () => {
        contactSection.style.display = 'none';
        // Don't restore allContent - it was causing the page to disappear
        // if (allContent) allContent.style.display = 'block';
      }
    });
    
    console.log('Contact section closed');
  }

  // Contact link click handler
  if (contactLink) {
    contactLink.addEventListener('click', (e) => {
      e.preventDefault();
      openContactSection();
    });
  }

  // Contact close button handler
  const contactCloseBtn = document.getElementById('contact-close');
  if (contactCloseBtn) {
    contactCloseBtn.addEventListener('click', () => {
      closeContactSection();
    });
  }

  // Close contact section when clicking outside - COMMENTED OUT FOR TESTING
  /*
  if (contactSection) {
    contactSection.addEventListener('click', (e) => {
      if (e.target === contactSection) {
        closeContactSection();
      }
    });
  }
  */

  // Close contact section with Escape key - COMMENTED OUT FOR TESTING
  /*
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactSection.style.display === 'flex') {
      closeContactSection();
    }
  });
  */

  console.log('Contact section functionality initialized');
});
