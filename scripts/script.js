// Particle background effect
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#6C63FF' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#6C63FF', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Update cursor animation in script.js
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let isVisible = false;

// Initial cursor positions
let cursorX = -100;
let cursorY = -100;
let dotX = -100;
let dotY = -100;

document.addEventListener('mousemove', (e) => {
    if (!isVisible) {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        isVisible = true;
    }

    // Update target positions
    cursorX = e.clientX;
    cursorY = e.clientY;
});

// Smooth animation function
function animate() {
    // Smoothly move dot to cursor position
    const easingDot = 0.2;
    dotX += (cursorX - dotX) * easingDot;
    dotY += (cursorY - dotY) * easingDot;

    // Update cursor position (follows immediately)
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    // Update dot position (follows smoothly)
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

    requestAnimationFrame(animate);
}

// Start animation
animate();

// Update hover effects
const hoverElements = document.querySelectorAll('a, button, .service-card, input, textarea');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Update cursor visibility
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
    isVisible = false;
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
    isVisible = true;
});

// Add cursor:none to all elements
document.body.style.cursor = 'none';