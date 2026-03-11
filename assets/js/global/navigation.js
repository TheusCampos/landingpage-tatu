import { debounce } from './utils.js';

export function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.querySelector('.header');

    if (navToggle && nav) {
        // Toggle menu
        navToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('nav--open');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Header scroll effect with debounce
    if (header) {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
            }
        }, 10));
    }
}
