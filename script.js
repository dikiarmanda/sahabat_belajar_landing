// Smooth Scroll untuk Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Offset untuk navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Tutup mobile menu jika terbuka
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Navbar Background and Text Color on Scroll
const navbar = document.getElementById('navbar');
const navbarLogoImg = document.getElementById('navbar-logo-img');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileNavLinks = document.querySelectorAll('#mobile-menu .nav-link');
const heroSection = document.getElementById('hero');
let lastScroll = 0;

function updateNavbarStyle() {
    const currentScroll = window.pageYOffset;
    const heroHeight = heroSection ? heroSection.offsetHeight : 600;
    
    if (currentScroll > heroHeight - 100) {
        // Scrolled past hero section - white background with dark text
        navbar.classList.add('bg-white', 'shadow-lg');
        navbar.classList.remove('bg-transparent');
        
        // Change logo image (switch to colored version or add filter)
        if (navbarLogoImg) {
            navbarLogoImg.src = 'img/logo-brand-nobg.png';
            navbarLogoImg.style.filter = 'none';
        }
        
        
        // Change nav links color (desktop)
        navLinks.forEach(link => {
            link.classList.remove('text-white', 'hover:text-blue-200');
            link.classList.add('text-gray-700', 'hover:text-blue-600');
        });
        
        // Change mobile menu icon color
        if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('text-white');
            mobileMenuIcon.classList.add('text-gray-700');
        }
        
        // Change mobile menu links color
        mobileNavLinks.forEach(link => {
            link.classList.remove('text-white', 'hover:text-blue-200');
            link.classList.add('text-gray-700', 'hover:text-blue-600');
        });
    } else {
        // In hero section - transparent background with white text
        navbar.classList.remove('bg-white', 'shadow-lg');
        navbar.classList.add('bg-transparent');
        
        // Change logo image (switch to white/no background version or add brightness filter)
        if (navbarLogoImg) {
            navbarLogoImg.src = 'img/logo-brand-nobg.png';
            navbarLogoImg.style.filter = 'brightness(0) invert(1)'; // Make logo white
        }
        
        
        // Change nav links color (desktop)
        navLinks.forEach(link => {
            link.classList.remove('text-gray-700', 'hover:text-blue-600');
            link.classList.add('text-white', 'hover:text-blue-200');
        });
        
        // Change mobile menu icon color
        if (mobileMenuIcon) {
            mobileMenuIcon.classList.remove('text-gray-700');
            mobileMenuIcon.classList.add('text-white');
        }
        
        // Change mobile menu links color
        mobileNavLinks.forEach(link => {
            link.classList.remove('text-gray-700', 'hover:text-blue-600');
            link.classList.add('text-white', 'hover:text-blue-200');
        });
    }
    
    lastScroll = currentScroll;
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
}

// Initial call to set navbar style
updateNavbarStyle();

window.addEventListener('scroll', updateNavbarStyle);

// Scroll Animation (Fade In)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua elemen dengan class fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
        backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation dan Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset previous errors
        document.querySelectorAll('.text-red-500').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('name-error', 'Nama tidak boleh kosong');
            isValid = false;
        } else if (name.length < 3) {
            showError('name-error', 'Nama minimal 3 karakter');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('email-error', 'Email tidak boleh kosong');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('email-error', 'Format email tidak valid');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('message-error', 'Pesan tidak boleh kosong');
            isValid = false;
        } else if (message.length < 10) {
            showError('message-error', 'Pesan minimal 10 karakter');
            isValid = false;
        }
        
        if (isValid) {
            // Simulasi pengiriman form (dalam implementasi nyata, kirim ke server)
            const formSuccess = document.getElementById('form-success');
            formSuccess.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

// Event Card Hover Effect Enhancement
document.querySelectorAll('#event .bg-white.rounded-lg').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Active Navigation Link Highlight
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    // Use the navLinks already declared above
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        // Only highlight if not in hero section (to avoid white text on white highlight)
        if (window.pageYOffset > (heroSection ? heroSection.offsetHeight - 100 : 500)) {
            link.classList.remove('text-blue-600', 'font-semibold');
            if (href === `#${current}`) {
                link.classList.add('text-blue-600', 'font-semibold');
            }
        } else {
            // In hero section, use white highlight
            link.classList.remove('text-blue-200', 'font-semibold');
            if (href === `#${current}`) {
                link.classList.add('text-blue-200', 'font-semibold');
            }
        }
    });
});


// Loading Animation (jika diperlukan)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax Effect untuk Hero Section (optional)
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Event Carousel
const eventCarousel = document.getElementById('event-carousel-track');
const eventPrevBtn = document.getElementById('event-prev');
const eventNextBtn = document.getElementById('event-next');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
let currentSlide = 0;
const totalSlides = 3;

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // sm
}

function updateCarousel() {
    if (eventCarousel) {
        const slidesPerView = getSlidesPerView();
        const slideWidth = 100 / slidesPerView;
        eventCarousel.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        
        // Update indicators
        carouselIndicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('bg-gray-300', 'w-2');
                indicator.classList.add('bg-blue-600', 'w-8');
            } else {
                indicator.classList.remove('bg-blue-600', 'w-8');
                indicator.classList.add('bg-gray-300', 'w-2');
            }
        });
    }
}

if (eventPrevBtn && eventNextBtn) {
    eventPrevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
    
    eventNextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });
}

// Indicator clicks
carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});

// Auto-play carousel (optional)
let carouselInterval;
function startCarousel() {
    carouselInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}

// Start auto-play on load
if (eventCarousel) {
    startCarousel();
    
    // Pause on hover
    const carouselContainer = document.getElementById('event-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            startCarousel();
        });
    }
}

// Initial carousel setup
updateCarousel();

// Update carousel on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateCarousel();
    }, 250);
});
