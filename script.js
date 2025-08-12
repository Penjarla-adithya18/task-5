// Simple and reliable JavaScript for portfolio functionality

console.log('Script file loaded!');

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        try {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true
            });
            console.log('AOS initialized successfully!');
        } catch (error) {
            console.log('AOS not available or error:', error);
        }
    }
    
    // Simple View My Work button functionality
    const viewWorkBtn = document.querySelector('a[href="#projects"]');
    if (viewWorkBtn) {
        console.log('View My Work button found!');
        viewWorkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View My Work button clicked!');
            
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                console.log('Scrolling to projects section...');
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error('Projects section not found!');
            }
        });
    } else {
        console.error('View My Work button not found!');
    }
    
    // Test social links
    const githubLink = document.querySelector('a[href*="github.com"]');
    const linkedinLink = document.querySelector('a[href*="linkedin.com"]');
    
    if (githubLink) {
        console.log('GitHub link found:', githubLink.href);
        githubLink.addEventListener('click', function() {
            console.log('GitHub link clicked!');
        });
    }
    
    if (linkedinLink) {
        console.log('LinkedIn link found:', linkedinLink.href);
        linkedinLink.addEventListener('click', function() {
            console.log('LinkedIn link clicked!');
        });
    }
    
    // Simple smooth scrolling for all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Simple form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    console.log('All functionality initialized successfully!');
});

// Fallback in case DOMContentLoaded doesn't fire
window.addEventListener('load', function() {
    console.log('Window loaded!');
});