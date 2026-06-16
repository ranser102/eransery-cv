(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const contactForm = document.getElementById('contact-form');
  const yearEl = document.getElementById('year');

  // Current year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sticky header on scroll
  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile nav toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (anchor) {
          anchor.classList.remove('active');
          if (anchor.getAttribute('href') === '#' + id) {
            anchor.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  // Scroll reveal animation
  const revealElements = document.querySelectorAll(
    '.section__header, .about__grid, .about__education, .summary-card, ' +
    '.exp-card, .skills-group, .cert-card, .project-card, .resume__card, ' +
    '.contact__grid > *'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Contact form — no backend; opens mailto
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent('Portfolio Contact from ' + name);
      const body = encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message);
      window.location.href = 'mailto:eran.sery@gmail.com?subject=' + subject + '&body=' + body;
      contactForm.reset();
    });
  }

  // Terminal typing effect (subtle)
  const terminal = document.querySelector('.terminal__body code');
  if (terminal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const originalHTML = terminal.innerHTML;
    terminal.style.opacity = '0';

    setTimeout(function () {
      terminal.style.transition = 'opacity 0.5s ease';
      terminal.style.opacity = '1';
    }, 600);
  }
})();
