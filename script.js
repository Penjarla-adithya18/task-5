// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Hide loading spinner when page is loaded
window.addEventListener('load', function() {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.opacity = '0';
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
        }, 300);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(45, 52, 54, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(45, 52, 54, 0.95)';
    }
});

// Form submission handling with validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = this.querySelector('input[name="name"]');
        const emailInput = this.querySelector('input[name="email"]');
        const messageInput = this.querySelector('textarea[name="message"]');
        
        // Basic validation
        if (!nameInput.value.trim()) {
            showNotification('Please enter your name', 'error');
            nameInput.focus();
            return;
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            showNotification('Please enter a valid email address', 'error');
            emailInput.focus();
            return;
        }
        
        if (!messageInput.value.trim()) {
            showNotification('Please enter your message', 'error');
            messageInput.focus();
            return;
        }
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Add animation to skill badges
const skillBadges = document.querySelectorAll('.badge');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    badge.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Project card hover effect
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add active class to current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize active navigation
setActiveNavItem();

// Skill category switching (if elements exist)
const skillCategoryBtns = document.querySelectorAll('.skill-category-btn');
const skillGroups = document.querySelectorAll('.skill-group');

if (skillCategoryBtns.length > 0) {
    skillCategoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            skillCategoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Hide all skill groups
            skillGroups.forEach(group => {
                group.style.display = 'none';
            });
            
            // Show selected skill group
            const category = btn.getAttribute('data-category');
            const targetGroup = document.getElementById(category);
            if (targetGroup) {
                targetGroup.style.display = 'flex';
            }
        });
    });
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    console.log('Found', images.length, 'images on the page');
    
    images.forEach((img, index) => {
        console.log(`Image ${index + 1}:`, img.src, 'Complete:', img.complete);
        
        // Check if image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
            console.log(`Image ${index + 1} already loaded`);
        } else {
            // Set initial opacity to 0
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            // Add load event listener
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                console.log(`Image ${index + 1} loaded successfully`);
            });
            
            // Add error event listener as fallback
            img.addEventListener('error', function() {
                this.style.opacity = '1'; // Show even if there's an error
                console.warn(`Failed to load image ${index + 1}:`, this.src);
            });
        }
    });
    
    // Fallback: ensure all images are visible after a short delay
    setTimeout(() => {
        images.forEach((img, index) => {
            img.style.opacity = '1';
            console.log(`Fallback: Made image ${index + 1} visible`);
        });
    }, 1000);
});

// Add scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        if (!scrollToTopBtn) {
            createScrollToTopButton();
        }
    } else {
        if (scrollToTopBtn) {
            scrollToTopBtn.remove();
        }
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.id = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'btn btn-primary position-fixed';
    button.style.cssText = 'bottom: 20px; right: 20px; z-index: 999; border-radius: 50%; width: 50px; height: 50px;';
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(button);
} 