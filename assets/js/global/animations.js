export function initAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded');
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    heroTimeline
        .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.8 })
        .from('.hero__title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero__description', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero__actions', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.highlight-item', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.4');

    // Section Headers
    gsap.utils.toArray('.section__header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.8
        });
    });

    // Services Cards
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services__grid',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    });

    // Gallery
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 75%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
    });
}
