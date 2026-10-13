const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const chosen = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = chosen !== 'all' && card.dataset.category !== chosen;
  });
}));
document.getElementById('year').textContent = new Date().getFullYear();

/*
  BEFORE PUBLISHING:
  1) Update the email and social links in index.html.
  2) Add your real name to the title/description and hero if you want it displayed.
  3) Link a verified PDF resume from the contact section.
*/