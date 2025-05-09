// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
    } else {
        navbar.style.backgroundColor = '#212529';
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
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

// Skill category switching
const skillCategoryBtns = document.querySelectorAll('.skill-category-btn');
const skillGroups = document.querySelectorAll('.skill-group');

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
        document.getElementById(category).style.display = 'flex';
    });
}); 