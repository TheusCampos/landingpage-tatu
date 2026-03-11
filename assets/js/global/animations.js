export function initAnimations() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded');
        // Fallback: make everything visible if GSAP fails
        document.querySelectorAll('.hero__subtitle, .hero__title, .hero__description, .hero__actions, .highlight-item, .section__header, .service-card, .gallery-item').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.visibility = 'visible';
        });
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger on load to ensure positions are correct
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // Hero Animations
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Use fromTo for better stability
    heroTimeline
        .fromTo('.hero__subtitle', 
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 }
        )
        .fromTo('.hero__title', 
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 }, 
            '-=0.6'
        )
        .fromTo('.hero__description', 
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 }, 
            '-=0.6'
        )
        .fromTo('.hero__actions', 
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8 }, 
            '-=0.6'
        )
        .fromTo('.highlight-item', 
            { scale: 0, autoAlpha: 0 },
            { 
                scale: 1, 
                autoAlpha: 1, 
                duration: 0.5, 
                stagger: 0.1, 
                ease: 'back.out(1.7)',
                onComplete: () => {
                    // Clear transform to allow CSS hover effects to work
                    gsap.set('.highlight-item', { clearProps: 'transform' });
                }
            }, 
            '-=0.4'
        );

    // Section Headers
    gsap.utils.toArray('.section__header').forEach(header => {
        gsap.fromTo(header, 
            { y: 30, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 0,
                autoAlpha: 1,
                duration: 0.8
            }
        );
    });

    // Services Cards
    const servicesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.services__grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    servicesTl.fromTo('.service-card', 
        { y: 50, autoAlpha: 0 },
        {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            onComplete: () => {
                // Clear transform to allow CSS hover effects (translateY) to work
                gsap.set('.service-card', { clearProps: 'transform' });
            }
        }
    );

    // Gallery
    gsap.fromTo('.gallery-item', 
        { scale: 0.9, autoAlpha: 0 },
        {
            scrollTrigger: {
                trigger: '.gallery-grid',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1
        }
    );
}
