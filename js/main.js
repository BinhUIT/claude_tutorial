// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteHeader = document.querySelector('.site-header');

if (navToggle && siteHeader) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}

// Capture forms (no backend yet — placeholder submit handling)
document.querySelectorAll('.capture-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input) {
      input.value = '';
      input.placeholder = 'Thanks — we’ll be in touch!';
    }
  });
});

// Contact form (demo only — no backend, client-side validation)
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
const contactResetBtn = document.getElementById('contact-reset');

if (contactForm && contactSuccess) {
  const fields = {
    name: {
      input: document.getElementById('contact-name'),
      error: document.getElementById('contact-name-error'),
      validate: (value) => value.trim().length > 0,
      message: 'Please enter your name.',
    },
    email: {
      input: document.getElementById('contact-email'),
      error: document.getElementById('contact-email-error'),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.',
    },
    phone: {
      input: document.getElementById('contact-phone'),
      error: document.getElementById('contact-phone-error'),
      validate: (value) => /^[0-9+\-\s()]{7,}$/.test(value.trim()),
      message: 'Please enter a valid phone number.',
    },
    address: {
      input: document.getElementById('contact-address'),
      error: document.getElementById('contact-address-error'),
      validate: (value) => value.trim().length > 0,
      message: 'Please enter your address.',
    },
    message: {
      input: document.getElementById('contact-message'),
      error: document.getElementById('contact-message-error'),
      validate: (value) => value.trim().length > 0,
      message: 'Please enter a message.',
    },
  };

  const validateField = (field) => {
    const fieldWrap = field.input.closest('.contact-form__field');
    const isValid = field.validate(field.input.value);
    if (isValid) {
      fieldWrap.classList.remove('has-error');
      field.input.removeAttribute('aria-invalid');
      field.error.textContent = '';
    } else {
      fieldWrap.classList.add('has-error');
      field.input.setAttribute('aria-invalid', 'true');
      field.error.textContent = field.message;
    }
    return isValid;
  };

  Object.values(fields).forEach((field) => {
    field.input.addEventListener('blur', () => validateField(field));
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = Object.values(fields).map(validateField);
    const allValid = results.every(Boolean);

    if (!allValid) {
      const firstInvalid = Object.values(fields).find(
        (field) => field.input.closest('.contact-form__field').classList.contains('has-error')
      );
      if (firstInvalid) firstInvalid.input.focus();
      return;
    }

    contactForm.hidden = true;
    contactSuccess.hidden = false;
  });

  if (contactResetBtn) {
    contactResetBtn.addEventListener('click', () => {
      contactForm.reset();
      Object.values(fields).forEach((field) => {
        field.input.closest('.contact-form__field').classList.remove('has-error');
        field.input.removeAttribute('aria-invalid');
        field.error.textContent = '';
      });
      contactSuccess.hidden = true;
      contactForm.hidden = false;
      fields.name.input.focus();
    });
  }
}
