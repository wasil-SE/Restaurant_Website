const dishes = [
  { id: 'smoked-chops', category: 'grills', tag: 'From the ember', name: 'Smoked Dera Chops', description: 'Lacquered lamb chops, black cardamom jus and a bright mint chutney — finished over our wood fire.', price: 'PKR 3,850', ingredients: 'Dera Ismail Khan lamb · black cardamom · mint · charred lemon', image: '2.avif' },
  { id: 'saffron-rice', category: 'mains', tag: 'A house classic', name: 'Saffron Biryani', description: 'A slow, fragrant layering of aged basmati, saffron, tender chicken and crisp fried onion.', price: 'PKR 2,450', ingredients: 'Aged basmati · saffron · chicken · fried onion · kewra', image: '5.avif' },
  { id: 'gulab-jamun', category: 'desserts', tag: 'The sweet finish', name: 'Rose & Cardamom', description: 'Warm gulab jamun, rose cream, pistachio praline and a little salt to bring it all into focus.', price: 'PKR 1,150', ingredients: 'Khoya · rose · green cardamom · pistachio · sea salt', image: '6.avif' },
  { id: 'chaat', category: 'starters', tag: 'A bright beginning', name: 'Burnt Aloo Chaat', description: 'Crisp potatoes, tamarind, whipped yoghurt and a dusting of house chaat masala.', price: 'PKR 950', ingredients: 'Baby potato · tamarind · yoghurt · pomegranate · chaat masala', image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=86' },
  { id: 'scallops', category: 'starters', tag: 'From the coast', name: 'Karachi Scallops', description: 'Seared scallops with coconut, curry leaf and a sharp green mango relish.', price: 'PKR 2,250', ingredients: 'Scallops · coconut · curry leaf · raw mango · chilli', image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=900&q=86' },
  { id: 'corn', category: 'starters', tag: 'Over the coals', name: 'Coal-Roasted Bhutta', description: 'Sweet corn, smoked butter, lime and a shower of toasted sesame.', price: 'PKR 850', ingredients: 'Sweet corn · smoked butter · lime · sesame · chilli', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=86' },
  { id: 'nihari', category: 'mains', tag: 'Slow & low', name: 'Nihari Pot Pie', description: 'Our all-day nihari tucked under a flaky, golden pastry lid. Best broken open at the table.', price: 'PKR 2,650', ingredients: 'Beef shank · wheat pastry · ginger · long pepper · coriander', image: '6.avif' },
  { id: 'river-fish', category: 'mains', tag: 'From the river', name: 'Makhni River Fish', description: 'Pan-roasted local fish, tomato makhni, fenugreek and a warm roti for the table.', price: 'PKR 2,350', ingredients: 'Local river fish · tomato · fenugreek · butter · roti', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=86' },
  { id: 'seekh', category: 'grills', tag: 'Over live fire', name: 'Lahori Seekh', description: 'Hand-minced lamb seekh, pickled shallots, smoked tomato and fresh roomali roti.', price: 'PKR 2,750', ingredients: 'Lamb · green chilli · smoked tomato · shallot · roomali roti', image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=86' },
  { id: 'kulfi', category: 'desserts', tag: 'A cool finish', name: 'Saffron Kulfi', description: 'Dense, creamy kulfi with saffron, toasted almond and a thread of honey.', price: 'PKR 1,050', ingredients: 'Milk · saffron · almond · honey · green cardamom', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=86' },
  { id: 'shikanjvi', category: 'drinks', tag: 'Zero proof', name: 'Smoked Shikanjvi', description: 'Charred lemon, black salt, ginger and sparkling water over a cold ember.', price: 'PKR 650', ingredients: 'Lemon · ginger · black salt · soda · mint', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=86' },
  { id: 'chai', category: 'drinks', tag: 'The last pour', name: 'Saffron Doodh Patti', description: 'A deeply aromatic pot of Lahore-style tea, steeped with saffron and rose.', price: 'PKR 550', ingredients: 'Assam tea · milk · saffron · rose · cardamom', image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=86' }
];

const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('ember-theme');
if (savedTheme) root.dataset.theme = savedTheme;
function updateThemeButton() {
  const isLight = root.dataset.theme === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  document.querySelector('.sun-icon').style.display = isLight ? 'inline' : 'none';
  document.querySelector('.moon-icon').style.display = isLight ? 'none' : 'inline';
}
updateThemeButton();
themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('ember-theme', root.dataset.theme);
  updateThemeButton();
});

const mobileToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
mobileToggle.addEventListener('click', () => {
  const open = mobileToggle.classList.toggle('is-open');
  mobileNav.classList.toggle('is-open', open);
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.mobile-nav a').forEach(link => link.addEventListener('click', () => {
  mobileToggle.classList.remove('is-open'); mobileNav.classList.remove('is-open'); mobileToggle.setAttribute('aria-expanded', 'false');
}));

const menuList = document.getElementById('menu-list');
function renderMenu(category = 'all') {
  const visible = category === 'all' ? dishes : dishes.filter(dish => dish.category === category);
  menuList.innerHTML = visible.map((dish, index) => `
    <button class="menu-item" type="button" data-dish="${dish.id}" style="animation-delay:${index * 35}ms">
      <img class="menu-item-image" src="${dish.image}" alt="" loading="lazy" />
      <span><strong class="menu-item-name">${dish.name}</strong><small class="menu-item-description">${dish.description}</small></span>
      <span class="menu-item-price">${dish.price}</span>
    </button>`).join('');
  menuList.querySelectorAll('.menu-item').forEach(item => item.addEventListener('click', () => openDish(item.dataset.dish)));
}
renderMenu();
document.querySelectorAll('.menu-tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.menu-tab').forEach(button => { button.classList.remove('is-active'); button.setAttribute('aria-selected', 'false'); });
  tab.classList.add('is-active'); tab.setAttribute('aria-selected', 'true'); renderMenu(tab.dataset.category);
}));

const modal = document.getElementById('dish-modal');
function openDish(id) {
  const dish = dishes.find(item => item.id === id); if (!dish) return;
  document.getElementById('modal-image').src = dish.image;
  document.getElementById('modal-image').alt = dish.name;
  document.getElementById('modal-category').textContent = dish.tag;
  document.getElementById('modal-title').textContent = dish.name;
  document.getElementById('modal-description').textContent = dish.description;
  document.getElementById('modal-price').textContent = dish.price;
  document.getElementById('modal-ingredients').textContent = dish.ingredients;
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open');
  document.querySelector('.modal-close').focus();
}
function closeDish() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }
document.querySelectorAll('[data-dish]').forEach(card => card.addEventListener('click', () => openDish(card.dataset.dish)));
document.querySelector('.modal-close').addEventListener('click', closeDish);
modal.addEventListener('click', event => { if (event.target === modal) closeDish(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeDish(); });
document.querySelector('.modal-reserve').addEventListener('click', closeDish);

const reservationForm = document.getElementById('reservation-form');
const success = document.getElementById('form-success');
const dateInput = reservationForm.querySelector('input[type="date"]');
dateInput.min = new Date().toISOString().split('T')[0];
reservationForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = new FormData(reservationForm).get('name') || 'there';
  document.getElementById('guest-name').textContent = name.split(' ')[0];
  reservationForm.hidden = true; success.hidden = false;
});
document.getElementById('new-reservation').addEventListener('click', () => { reservationForm.reset(); reservationForm.hidden = false; success.hidden = true; });
document.querySelector('.newsletter-form').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.innerHTML = '<span style="padding:9px 0;font-size:11px">You’re on the list. Thank you.</span>'; });

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }), { threshold: .13 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const sections = document.querySelectorAll('main section[id], .hero');
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting && entry.target.id) navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(section => navObserver.observe(section));
