/**
 * Portfolio Script
 * - Time-based greeting
 * - Typing animation for name
 * - Scroll-triggered animations (IntersectionObserver)
 * - Mobile navigation toggle
 * - Active nav link highlighting on scroll
 */

(function () {
    'use strict';

    // ========================================
    // Time-Based Greeting
    // ========================================
    function setGreeting() {
        const el = document.getElementById('greeting');
        if (!el) return;

        const hour = new Date().getHours();
        let msg;
        if (hour < 12) msg = 'Good morning,';
        else if (hour < 17) msg = 'Good afternoon,';
        else msg = 'Good evening,';

        el.textContent = msg;
    }

    // ========================================
    // Typing Animation
    // ========================================
    function typeWelcome() {
        const el = document.getElementById('welcome-text');
        if (!el) return;

        const text = "I'm Prottoy Zaman.";

        // Skip animation on repeat visits within the same session
        if (sessionStorage.getItem('typed')) {
            el.textContent = text;
            el.classList.add('typing-done');
            return;
        }

        let i = 0;

        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            } else {
                sessionStorage.setItem('typed', '1');
                setTimeout(() => el.classList.add('typing-done'), 1500);
            }
        }

        type();
    }

    // ========================================
    // Mobile Navigation
    // ========================================
    function initMobileNav() {
        const toggle = document.getElementById('nav-toggle');
        const links = document.getElementById('nav-links');
        if (!toggle || !links) return;

        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('open');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked
        links.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ========================================
    // Active Nav Highlighting on Scroll
    // ========================================
    function initActiveNav() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!sections.length || !navLinks.length) return;

        function setActive() {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Find the section whose top is closest to the top of the viewport
            // but hasn't scrolled past the middle yet
            let activeId = null;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                // Section is considered active when its top half is in the upper half of the viewport
                if (rect.top <= viewportHeight * 0.4) {
                    activeId = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    activeId !== null && link.getAttribute('href') === `#${activeId}`
                );
            });
        }

        window.addEventListener('scroll', setActive, { passive: true });
        setActive(); // Run once on load
    }

    // ========================================
    // Scroll Animations (IntersectionObserver)
    // ========================================
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Add a small stagger delay for elements in view
                        entry.target.style.transitionDelay = `${index * 0.05}s`;
                        entry.target.classList.add('visible');

                        // If this contains a skills grid, animate its children
                        const grid = entry.target.querySelector('.skills-grid');
                        if (grid) {
                            animateSkillItems(grid);
                        }

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        elements.forEach(el => observer.observe(el));
    }

    function animateSkillItems(grid) {
        const items = grid.querySelectorAll('.skill-item');
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 0.06}s`;
        });
        grid.classList.add('animate-children');
    }

    // ========================================
    // Init on DOM Ready
    // ========================================
    document.addEventListener('DOMContentLoaded', () => {
        setGreeting();
        typeWelcome();
        initMobileNav();
        initActiveNav();
        initScrollAnimations();
    });
})();
