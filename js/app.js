/* VERISE – Shared JavaScript (merged: accounts + products + cart) */

/* ---------- Products ---------- */
// img is optional: if missing, the site looks for images/p<ID>.jpg
const U = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

const PRODUCTS = [
  { id: 1, name: 'Aero Wireless Headphones', cat: 'Electronics', price: 2499, mrp: 3999, rating: 4.5 },
  { id: 2, name: 'Pulse Smartwatch', cat: 'Electronics', price: 3999, mrp: 5499, rating: 4.3 },
  { id: 3, name: 'Urban Denim Jacket', cat: 'Fashion', price: 1799, mrp: 2499, rating: 4.2 },
  { id: 4, name: 'Cloudstep Running Shoes', cat: 'Sports', price: 2299, mrp: 2999, rating: 4.4 },
  { id: 5, name: 'Nordic Table Lamp', cat: 'Home & Living', price: 999, mrp: 1299, rating: 4.1 },
  { id: 6, name: 'Glow Vitamin C Serum', cat: 'Beauty', price: 599, mrp: 0, rating: 4.6 },
  { id: 7, name: 'The Habit Handbook', cat: 'Books', price: 399, mrp: 599, rating: 4.7 },
  { id: 8, name: 'Pro Yoga Mat', cat: 'Sports', price: 799, mrp: 0, rating: 4.3 },
  { id: 9, name: 'Mechanical Gaming Keyboard', cat: 'Electronics', price: 2799, mrp: 3499, rating: 4.5 },
  { id: 10, name: 'Stack-It Building Blocks', cat: 'Toys', price: 699, mrp: 0, rating: 4.5 },
  { id: 11, name: 'Premium Basmati Rice 5 kg', cat: 'Grocery', price: 649, mrp: 0, rating: 4.4 },
  { id: 12, name: 'Trail Laptop Backpack', cat: 'Fashion', price: 1299, mrp: 1799, rating: 4.4 },
  { id: 13, name: 'Cotton Crew T-Shirt', cat: 'Fashion', price: 499, mrp: 799, rating: 4.2 },
  { id: 14, name: 'Insulated Steel Bottle', cat: 'Home & Living', price: 699, mrp: 0, rating: 4.5 },
  { id: 15, name: 'Colour Pencil Set (48)', cat: 'Books', price: 349, mrp: 449, rating: 4.3 },
  { id: 16, name: 'Matte Lip Colour Trio', cat: 'Beauty', price: 899, mrp: 1199, rating: 4.4 },

  // ---- Products from Person 2 ----
  { id: 17, name: 'Sunday Morning Candle', cat: 'Home & Living', price: 890, mrp: 0, rating: 4.6, stock: 18,
    img: U('photo-1706427655877-9ace953873a8'),
    desc: 'A slow-burning soy wax candle with notes of cedar, bergamot and the first quiet hour of the day.' },
  { id: 18, name: 'The Everyday Mug', cat: 'Home & Living', price: 680, mrp: 0, rating: 4.5, stock: 24,
    img: U('photo-1494314671902-399b18174975'),
    desc: 'A hand-finished stoneware mug with a comfortable handle and a softly speckled glaze. Made for the cup you reach for most.' },
  { id: 19, name: 'Soft Landing Hand Wash', cat: 'Beauty', price: 540, mrp: 0, rating: 4.4, stock: 32,
    img: U('photo-1725940889761-35d90aead72d'),
    desc: 'A gentle, plant-based hand wash with a fresh green scent. A small everyday ritual, made a little more lovely.' },
  { id: 20, name: 'Sunday Skin Soap Set', cat: 'Beauty', price: 420, mrp: 0, rating: 4.5, stock: 27,
    img: U('photo-1612799897310-293b5811d300'),
    desc: 'A pair of slow-cured soaps made with nourishing oils and a soft, clean scent. Thoughtful care for everyday skin.' }
];

const imgOf = p => p.img || `images/p${p.id}.jpg`;
const stockOf = p => p.stock || 20;
const descOf = p => p.desc ||
  `${p.name} from our ${p.cat} collection. Carefully selected for quality and everyday value.`;

/* ---------- Categories (name, icon) ---------- */
const CATEGORIES = [
  ['Electronics', 'phone'], ['Fashion', 'shirt'], ['Home & Living', 'home'], ['Beauty', 'sparkle'],
  ['Books', 'book'], ['Sports', 'dumbbell'], ['Grocery', 'basket'], ['Toys', 'blocks']
];
const CAT_ICON = Object.fromEntries(CATEGORIES);

const TRUST = [
  ['truck', 'Free delivery', 'On orders over ₹499'],
  ['return', 'Easy returns', '7-day return window'],
  ['shield', 'Secure checkout', 'Safe, protected payments'],
  ['help', 'Friendly support', 'Mon–Sat, 9 am – 6 pm']
];

const TINTS = ['#E3EAFF', '#EAF0F8', '#DCE5FF'];
const FREE_SHIP = 499, SHIP_FEE = 49;
let curCat = 'All';

/* ---------- Icons ---------- */
const ICONS = {
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  star: '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"/>',
  truck: '<rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  return: '<path d="M23 4v6h-6"/><path d="M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  help: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  /* category icons */
  phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  shirt: '<path d="M20.4 5.5 16 3a4 4 0 0 1-8 0L3.6 5.5 2 10l4 1.5V21h12v-9.5l4-1.5z"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-6h6v6"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  book: '<path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M4 16a4 4 0 0 1 4-4h12"/>',
  dumbbell: '<path d="M6 6v12M18 6v12M2 9v6M22 9v6M6 12h12"/>',
  basket: '<path d="M3 9h18l-2 11H5z"/><path d="M8 9l4-6 4 6"/>',
  blocks: '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/>'
};

const icon = name =>
  `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

/* ---------- Storage helpers ---------- */
const read = (key, fallback) => JSON.parse(localStorage.getItem(key)) || fallback;
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getUsers = () => read('verise_users', []);
const saveUsers = users => write('verise_users', users);

function getCurrentUser() {
  const email = sessionStorage.getItem('verise_user') || localStorage.getItem('verise_remember');
  return getUsers().find(user => user.email === email) || null;
}

function logout(to = 'login.html') {
  sessionStorage.removeItem('verise_user');
  sessionStorage.removeItem('verise_admin');
  localStorage.removeItem('verise_remember');
  location.href = to;
}

/* ---------- Form and display helpers ---------- */
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = v => /^[6-9]\d{9}$/.test(v);
const rupee = amount => '₹' + amount.toLocaleString('en-IN');
const esc = value => String(value).replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

function setErr(id, text) {
  document.getElementById(id).closest('.field').classList.toggle('bad', !!text);
  document.getElementById(id + 'Err').textContent = text;
}

function showMsg(text, ok) {
  const m = document.getElementById('msg');
  m.textContent = text;
  m.className = 'msg ' + (ok ? 'ok' : 'bad');
}

function toast(text) {
  const n = document.createElement('div');
  n.className = 'toast';
  n.textContent = text;
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 2200);
}

const info = page => { toast(page + ' page is coming soon.'); return false; };

/* ---------- Logo ---------- */
const V_ICON = size => `<svg width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true">
  <defs><linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2347D5"/><stop offset="1" stop-color="#14213D"/></linearGradient></defs>
  <path d="M6 10h9l9 20 9-20h9L28 42h-8z" fill="url(#vg)"/>
  <path d="M1 18h6M3 24h7" stroke="#2347D5" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M41 .5l1.2 2.8L45 4.5l-2.8 1.2L41 8.5l-1.2-2.8L37 4.5l2.8-1.2z" fill="#FF8A00"/></svg>`;

const FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
  '<path d="M6 10h9l9 20 9-20h9L28 42h-8z" fill="#2347D5"/></svg>';

/* ---------- Cart (stored as [{id, qty}]) ---------- */
function getCart() {
  const raw = read('verise_cart', []);
  const merged = {};
  raw.forEach(item => {
    const id = typeof item === 'number' ? item : item.id;     // supports old format
    const qty = typeof item === 'number' ? 1 : item.qty;
    merged[id] = (merged[id] || 0) + qty;
  });
  return Object.entries(merged).map(([id, qty]) => ({ id: +id, qty }));
}
const saveCart = cart => write('verise_cart', cart);
const cartCount = () => getCart().reduce((sum, item) => sum + item.qty, 0);

function addToCart(id, qty = 1) {
  const p = PRODUCTS.find(x => x.id === id);
  const cart = getCart();
  const line = cart.find(x => x.id === id);
  const newQty = (line ? line.qty : 0) + qty;

  if (newQty > stockOf(p)) { toast('Only ' + stockOf(p) + ' in stock'); return; }

  if (line) line.qty = newQty; else cart.push({ id, qty });
  saveCart(cart);
  renderNavbar();
  toast('Added to cart');
}

function setQty(id, change) {
  const cart = getCart();
  const line = cart.find(x => x.id === id);
  const p = PRODUCTS.find(x => x.id === id);
  if (!line) return;

  const next = line.qty + change;
  if (next < 1) return;
  if (next > stockOf(p)) { toast('Only ' + stockOf(p) + ' in stock'); return; }

  line.qty = next;
  saveCart(cart);
  renderNavbar();
  renderCart();
}

function removeItem(id) {
  saveCart(getCart().filter(x => x.id !== id));
  renderNavbar();
  renderCart();
  toast('Item removed');
}

/* ---------- Wishlist ---------- */
function toggleWish(id) {
  let wish = read('verise_wish', []);
  wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
  write('verise_wish', wish);
  renderNavbar();
  refresh();
}

/* ---------- Navbar ---------- */
function renderNavbar() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const user = getCurrentUser();

  const badge = count => count ? `<span class="badge">${count}</span>` : '';

  const account = user
    ? `<a class="btn btn-ghost" href="profile.html" data-page="profile.html">Hi, ${esc(user.name.split(' ')[0])}</a>
       <button class="btn btn-primary" onclick="logout()">Logout</button>`
    : `<a class="btn btn-ghost" href="login.html" data-page="login.html">Login</a>
       <a class="btn btn-primary" href="register.html" data-page="register.html">Register</a>`;

  document.getElementById('navbar').innerHTML = `
    <div class="announce">Discover something new today.</div>
    <header class="nav"><div class="container">
      <a class="brand" href="index.html" aria-label="VERISE home">${V_ICON(36)}<span>VERISE</span></a>

      <form class="search" onsubmit="return doSearch(event)">
        ${icon('search')}
        <input id="q" list="suggest"
          value="${esc(new URLSearchParams(location.search).get('q') || '')}"
          placeholder="Search for products" aria-label="Search products" autocomplete="off">
        <datalist id="suggest">${PRODUCTS.map(p => `<option value="${esc(p.name)}">`).join('')}</datalist>
      </form>

      <button class="menu-btn" aria-label="Menu"
        onclick="document.getElementById('links').classList.toggle('open')">${icon('menu')}</button>

      <nav class="links" id="links">
        <a href="index.html" data-page="index.html">Home</a>
        <a href="index.html#categories">Categories</a>
        <a href="products.html" data-page="products.html">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <div class="actions">
        <button class="icon-btn" aria-label="Wishlist"
          onclick="toast('Wishlist: ' + read('verise_wish', []).length + ' item(s)')">
          ${icon('heart')}${badge(read('verise_wish', []).length)}</button>
        <a class="icon-btn" aria-label="Cart" href="cart.html">
          ${icon('cart')}${badge(cartCount())}</a>
        ${account}
      </div>
    </div></header>`;

  document.querySelectorAll('#navbar [data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function doSearch(event) {
  event.preventDefault();
  const query = document.getElementById('q').value.trim();
  location.href = 'products.html' + (query ? '?q=' + encodeURIComponent(query) : '');
  return false;
}

/* ---------- Footer ---------- */
function renderFooter() {
  const link = text => `<a href="#" onclick="return info('${esc(text)}')">${esc(text)}</a>`;

  document.getElementById('footer').innerHTML = `
    <footer class="footer"><div class="container">
      <div class="fgrid">
        <div id="about">
          <div class="brand"><span class="tile">${V_ICON(30)}</span><span>VERISE</span></div>
          <p>Discover More. Live Better.</p>
          <p>VERISE is a multi-category marketplace for electronics, fashion, home, beauty, books, sports and everyday essentials.</p>
          <div class="social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://x.com" target="_blank" rel="noopener">X</a>
          </div>
        </div>
        <div><h4>Help</h4>${link('Help Center')}${link('Return Policy')}</div>
        <div><h4>Legal</h4>${link('Privacy Policy')}${link('Terms & Conditions')}</div>
        <div id="contact"><h4>Contact Us</h4><p>support@verise.com</p><p>Mon–Sat, 9 am – 6 pm</p></div>
      </div>
      <div class="copy">© ${new Date().getFullYear()} VERISE. This is a college project – no real orders are placed.</div>
    </div></footer>`;
}

/* ---------- Product card ---------- */
const discountOf = p => p.mrp > p.price ? Math.round((p.mrp - p.price) / p.mrp * 100) : 0;

// Placeholder icon sits behind the photo. If the photo fails, only the icon remains.
const media = p => `
  <span class="ph">${icon(CAT_ICON[p.cat])}</span>
  <img src="${imgOf(p)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">`;

function productCard(p) {
  const wished = read('verise_wish', []).includes(p.id);
  const discount = discountOf(p);

  return `
    <article class="product">
      <button class="wish ${wished ? 'on' : ''}" aria-label="Add to wishlist"
        onclick="toggleWish(${p.id})">${icon('heart')}</button>

      <div class="pimg" style="--t1:${TINTS[p.id % 3]}" onclick="viewProduct(${p.id})">
        ${media(p)}
        ${discount ? `<em class="tag">${discount}% off</em>` : ''}
      </div>

      <div class="pbody">
        <small>${esc(p.cat)}</small>
        <h3 onclick="viewProduct(${p.id})">${esc(p.name)}</h3>
        <div class="rate">${icon('star')} ${p.rating}</div>
        <div class="price"><b>${rupee(p.price)}</b>${discount ? `<s>${rupee(p.mrp)}</s>` : ''}</div>
        <button class="btn btn-primary btn-block" onclick="addToCart(${p.id})">${icon('cart')} Add to Cart</button>
      </div>
    </article>`;
}

// Opens the product page and remembers the last four viewed products.
function viewProduct(id) {
  const seen = read('verise_viewed', []).filter(x => x !== id);
  seen.unshift(id);
  write('verise_viewed', seen.slice(0, 4));
  location.href = 'product.html?id=' + id;
}

/* ---------- Category chips / refresh ---------- */
function setCat(category) {
  curCat = category;
  refresh();
}

function refresh() {
  renderChips();
  renderProducts();
  renderShop();
}

function renderChips() {
  const chips = document.getElementById('chips');
  if (!chips) return;
  chips.innerHTML = ['All', ...CATEGORIES.map(c => c[0])].map(category => `
    <button class="chip ${category === curCat ? 'on' : ''}" onclick="setCat('${esc(category)}')">
      ${esc(category)}</button>`).join('');
}

/* ---------- Homepage sections ---------- */
function renderProducts() {
  const grid = document.getElementById('popularGrid');
  if (!grid) return;

  const list = PRODUCTS.filter(p => curCat === 'All' || p.cat === curCat);
  const shown = curCat === 'All' ? list.slice(0, 8) : list;

  document.getElementById('productsTitle').textContent =
    curCat === 'All' ? 'Popular Right Now' : curCat;

  grid.innerHTML = shown.map(productCard).join('');

  // Trending = the 4 newest products
  document.getElementById('trendingGrid').innerHTML = PRODUCTS.slice(-4).map(productCard).join('');

  const seen = read('verise_viewed', []).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  document.getElementById('recentSection').hidden = !seen.length;
  document.getElementById('recentGrid').innerHTML = seen.map(productCard).join('');
}

function renderHome() {
  const categoryGrid = document.getElementById('catGrid');
  if (!categoryGrid) return;

  categoryGrid.innerHTML = CATEGORIES.map(([name, iconName]) => {
    const count = PRODUCTS.filter(p => p.cat === name).length;
    return `
      <a class="cat" href="products.html?cat=${encodeURIComponent(name)}">
        <span class="em">${icon(iconName)}</span>
        <div><b>${esc(name)}</b><small>${count} ${count === 1 ? 'product' : 'products'}</small></div>
      </a>`;
  }).join('');

  document.getElementById('trust').innerHTML = TRUST.map(item => `
    <div class="t-item"><span class="ico">${icon(item[0])}</span>
      <div><b>${item[1]}</b><small>${item[2]}</small></div></div>`).join('');

  refresh();
}

/* ---------- Product listing page (products.html) ---------- */
function renderShop() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  const query = (new URLSearchParams(location.search).get('q') || '').trim().toLowerCase();
  const sort = document.getElementById('sort').value;

  let list = PRODUCTS.filter(p =>
    (curCat === 'All' || p.cat === curCat) &&
    (p.name + ' ' + p.cat).toLowerCase().includes(query));

  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  if (sort === 'high') list.sort((a, b) => b.price - a.price);
  if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

  document.getElementById('shopTitle').textContent =
    query ? `Results for “${query}”` : curCat === 'All' ? 'All Products' : curCat;
  document.getElementById('shopCount').textContent = list.length + ' product(s)';
  document.getElementById('clearQ').hidden = !query;

  grid.innerHTML = list.length
    ? list.map(productCard).join('')
    : '<p class="empty">No products found. Try another search or category.</p>';
}

/* ---------- Product details page (product.html) ---------- */
let detailQty = 1;

function changeDetailQty(change) {
  const p = PRODUCTS.find(x => x.id === +new URLSearchParams(location.search).get('id'));
  detailQty = Math.min(stockOf(p), Math.max(1, detailQty + change));
  document.getElementById('dQty').textContent = detailQty;
}

function renderDetail() {
  const box = document.getElementById('detail');
  if (!box) return;

  const id = +new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find(x => x.id === id);

  if (!p) {
    box.innerHTML = '<p class="empty">Product not found. <a href="products.html">Back to products</a></p>';
    return;
  }

  document.title = p.name + ' | VERISE';
  const discount = discountOf(p);
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);

  box.innerHTML = `
    <div class="crumbs"><a href="index.html">Home</a> / <a href="products.html">Products</a> / <span>${esc(p.name)}</span></div>

    <div class="detail">
      <div class="dimg" style="--t1:${TINTS[p.id % 3]}">${media(p)}
        ${discount ? `<em class="tag">${discount}% off</em>` : ''}</div>

      <div class="dinfo">
        <small class="dcat">${esc(p.cat)}</small>
        <h1>${esc(p.name)}</h1>
        <div class="rate">${icon('star')} ${p.rating}</div>
        <div class="price big"><b>${rupee(p.price)}</b>${discount ? `<s>${rupee(p.mrp)}</s>` : ''}</div>
        <p class="ddesc">${esc(descOf(p))}</p>
        <p class="dstock">✓ In stock (${stockOf(p)} available)</p>

        <div class="dactions">
          <div class="qty">
            <button onclick="changeDetailQty(-1)" aria-label="Decrease">−</button>
            <output id="dQty">1</output>
            <button onclick="changeDetailQty(1)" aria-label="Increase">+</button>
          </div>
          <button class="btn btn-primary" onclick="addToCart(${p.id}, detailQty)">${icon('cart')} Add to Cart</button>
        </div>

        <ul class="dperks">
          <li>${icon('truck')} Free delivery over ₹${FREE_SHIP}</li>
          <li>${icon('return')} 7-day easy returns</li>
          <li>${icon('shield')} Secure checkout</li>
        </ul>
      </div>
    </div>

    ${related.length ? `
      <div class="head" style="margin-top:56px"><h2>You may also like</h2></div>
      <div class="grid">${related.map(productCard).join('')}</div>` : ''}`;
}

/* ---------- Cart page (cart.html) ---------- */
function renderCart() {
  const box = document.getElementById('cartItems');
  if (!box) return;

  const lines = getCart()
    .map(item => ({ p: PRODUCTS.find(x => x.id === item.id), qty: item.qty }))
    .filter(line => line.p);

  const subtotal = lines.reduce((sum, l) => sum + l.p.price * l.qty, 0);
  const shipping = !lines.length || subtotal >= FREE_SHIP ? 0 : SHIP_FEE;

  document.getElementById('cartCount').textContent =
    lines.length ? `(${cartCount()} items)` : '';
  document.getElementById('cartEmpty').hidden = lines.length > 0;
  document.getElementById('cartLayout').hidden = !lines.length;

  box.innerHTML = lines.map(({ p, qty }) => `
    <div class="citem">
      <a class="cthumb" href="product.html?id=${p.id}" style="--t1:${TINTS[p.id % 3]}">${media(p)}</a>
      <div class="cname">
        <a href="product.html?id=${p.id}">${esc(p.name)}</a>
        <small>${esc(p.cat)}</small>
        <button class="rm" onclick="removeItem(${p.id})">Remove</button>
      </div>
      <div class="qty small">
        <button onclick="setQty(${p.id}, -1)" aria-label="Decrease">−</button>
        <output>${qty}</output>
        <button onclick="setQty(${p.id}, 1)" aria-label="Increase">+</button>
      </div>
      <div class="ctotal">${rupee(p.price * qty)}</div>
    </div>`).join('');

  document.getElementById('subtotal').textContent = rupee(subtotal);
  document.getElementById('shipping').textContent = shipping ? rupee(shipping) : 'Free';
  document.getElementById('grand').textContent = rupee(subtotal + shipping);
  document.getElementById('shipNote').textContent = shipping
    ? `Add ${rupee(FREE_SHIP - subtotal)} more for free delivery.`
    : 'You get free delivery on this order.';
}

// Person 3 will build the real checkout page.
function checkout() {
  if (!getCurrentUser()) {
    toast('Please log in to continue');
    setTimeout(() => (location.href = 'login.html'), 900);
    return;
  }
  info('Checkout');
}

/* ---------- Startup ---------- */
(function () {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = 'data:image/svg+xml,' + encodeURIComponent(FAVICON);
  document.head.appendChild(favicon);

  // Category from URL, e.g. products.html?cat=Beauty
  const cat = new URLSearchParams(location.search).get('cat');
  if (cat && CATEGORIES.some(c => c[0] === cat)) curCat = cat;

  renderNavbar();
  renderFooter();
  renderHome();
  renderChips();
  renderShop();
  renderDetail();
  renderCart();
})();
