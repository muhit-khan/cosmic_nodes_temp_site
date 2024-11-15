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

// Cursor Animation
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');
let isVisible = true;

// Smooth cursor movement
let cursorX = 0;
let cursorY = 0;
let dotX = 0;
let dotY = 0;

document.addEventListener('mousemove', (e) => {
    if (!isVisible) {
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
        isVisible = true;
    }

    cursorX = e.clientX;
    cursorY = e.clientY;
});

// Smooth animation
function animate() {
    // Smoothly move dot to cursor position
    const easingDot = 0.2;
    dotX += (cursorX - dotX) * easingDot;
    dotY += (cursorY - dotY) * easingDot;

    // Smoothly move cursor to cursor position
    const easingCursor = 0.1;
    const cursorXSmooth = cursorX;
    const cursorYSmooth = cursorY;

    cursor.style.transform = `translate(${cursorXSmooth}px, ${cursorYSmooth}px)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

    requestAnimationFrame(animate);
}
animate();

// Hover effects
const hoverElements = document.querySelectorAll('a, button, .service-card, input, textarea');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Hide cursor when leaving window
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