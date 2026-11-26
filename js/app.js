/* =========================================================
   VERISE – Shared JavaScript
   This file is used across the VERISE website.

   It contains:
   - Sample product and category data
   - Storage and account helpers
   - Form validation helpers
   - Shared icons, navbar and footer
   - Homepage product sections
   ========================================================= */


/* ---------- Sample product data ---------- */

// A real website would normally load products from a database.
// To display a product photo, add an image path to the product:
// img: 'images/product-name.jpg'

const PRODUCTS = [
  {
    id: 1,
    name: 'Aero Wireless Headphones',
    cat: 'Electronics',
    price: 2499,
    mrp: 3999,
    rating: 4.5,
    icon: '🎧'
  },
  {
    id: 2,
    name: 'Pulse Smartwatch',
    cat: 'Electronics',
    price: 3999,
    mrp: 5499,
    rating: 4.3,
    icon: '⌚'
  },
  {
    id: 3,
    name: 'Urban Denim Jacket',
    cat: 'Fashion',
    price: 1799,
    mrp: 2499,
    rating: 4.2,
    icon: '🧥'
  },
  {
    id: 4,
    name: 'Cloudstep Running Shoes',
    cat: 'Sports',
    price: 2299,
    mrp: 2999,
    rating: 4.4,
    icon: '👟'
  },
  {
    id: 5,
    name: 'Nordic Table Lamp',
    cat: 'Home & Living',
    price: 999,
    mrp: 1299,
    rating: 4.1,
    icon: '💡'
  },
  {
    id: 6,
    name: 'Glow Vitamin C Serum',
    cat: 'Beauty',
    price: 599,
    mrp: 0,
    rating: 4.6,
    icon: '🧴'
  },
  {
    id: 7,
    name: 'The Habit Handbook',
    cat: 'Books',
    price: 399,
    mrp: 599,
    rating: 4.7,
    icon: '📘'
  },
  {
    id: 8,
    name: 'Pro Yoga Mat',
    cat: 'Sports',
    price: 799,
    mrp: 0,
    rating: 4.3,
    icon: '🧘'
  },
  {
    id: 9,
    name: 'Mechanical Gaming Keyboard',
    cat: 'Electronics',
    price: 2799,
    mrp: 3499,
    rating: 4.5,
    icon: '⌨️'
  },
  {
    id: 10,
    name: 'Stack-It Building Blocks',
    cat: 'Toys',
    price: 699,
    mrp: 0,
    rating: 4.5,
    icon: '🧩'
  },
  {
    id: 11,
    name: 'Premium Basmati Rice 5 kg',
    cat: 'Grocery',
    price: 649,
    mrp: 0,
    rating: 4.4,
    icon: '🌾'
  },
  {
    id: 12,
    name: 'Trail Laptop Backpack',
    cat: 'Fashion',
    price: 1299,
    mrp: 1799,
    rating: 4.4,
    icon: '🎒'
  },
  {
    id: 13,
    name: 'Cotton Crew T-Shirt',
    cat: 'Fashion',
    price: 499,
    mrp: 799,
    rating: 4.2,
    icon: '👕'
  },
  {
    id: 14,
    name: 'Insulated Steel Bottle',
    cat: 'Home & Living',
    price: 699,
    mrp: 0,
    rating: 4.5,
    icon: '🍶'
  },
  {
    id: 15,
    name: 'Colour Pencil Set (48)',
    cat: 'Books',
    price: 349,
    mrp: 449,
    rating: 4.3,
    icon: '✏️'
  },
  {
    id: 16,
    name: 'Matte Lip Colour Trio',
    cat: 'Beauty',
    price: 899,
    mrp: 1199,
    rating: 4.4,
    icon: '💄'
  }
];


/* ---------- Categories ---------- */

const CATEGORIES = [
  ['Electronics', '📱'],
  ['Fashion', '👗'],
  ['Home & Living', '🛋️'],
  ['Beauty', '💄'],
  ['Books', '📚'],
  ['Sports', '🏋️'],
  ['Grocery', '🥦'],
  ['Toys', '🧸']
];


/* ---------- Store benefits ---------- */

const TRUST = [
  ['truck', 'Free delivery', 'On orders over ₹499'],
  ['return', 'Easy returns', '7-day return window'],
  ['shield', 'Secure checkout', 'Safe, protected payments'],
  ['help', 'Friendly support', 'Mon–Sat, 9 am – 6 pm']
];


/* ---------- Product card colours ---------- */

const TINTS = [
  '#E3EAFF',
  '#EAF0F8',
  '#DCE5FF'
];

// Stores the currently selected category.
let curCat = 'All';


/* ---------- Inline SVG icons ---------- */

// These SVGs keep the icons sharp at different screen sizes.

const ICONS = {
  search:
    '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',

  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',

  cart:
    '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',

  menu:
    '<path d="M3 6h18M3 12h18M3 18h18"/>',

  star:
    '<polygon points="12 2 15.1 8.3 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.3"/>',

  truck:
    '<rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',

  return:
    '<path d="M23 4v6h-6"/><path d="M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/>',

  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',

  help:
    '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'
};


// Returns the SVG markup for the requested icon.
const icon = name =>
  `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">
    ${ICONS[name]}
  </svg>`;


/* ---------- Browser storage helpers ---------- */

// localStorage keeps data after the browser is closed.
// sessionStorage keeps data for the current browser session.

const read = (key, fallback) =>
  JSON.parse(localStorage.getItem(key)) || fallback;

const write = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const getUsers = () =>
  read('verise_users', []);

const saveUsers = users =>
  write('verise_users', users);


/* ---------- Current user and logout ---------- */

// Returns the logged-in user's information.
// Returns null if no user is logged in.

function getCurrentUser() {
  const email =
    sessionStorage.getItem('verise_user') ||
    localStorage.getItem('verise_remember');

  return getUsers().find(user => user.email === email) || null;
}


// Clears the current login information and redirects the user.

function logout(to = 'login.html') {
  sessionStorage.removeItem('verise_user');
  sessionStorage.removeItem('verise_admin');

  localStorage.removeItem('verise_remember');

  location.href = to;
}


/* ---------- Form and display helpers ---------- */

// Checks whether the entered email has a basic valid format.
const isEmail = value =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);


// Checks for a 10-digit Indian mobile number.
const isPhone = value =>
  /^[6-9]\d{9}$/.test(value);


// Formats a number as Indian currency.
const rupee = amount =>
  '₹' + amount.toLocaleString('en-IN');


// Escapes special characters before inserting text into HTML.
const esc = value =>
  String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));


// Displays or clears an error message below a form field.

function setErr(id, text) {
  document.getElementById(id)
    .closest('.field')
    .classList.toggle('bad', !!text);

  document.getElementById(id + 'Err').textContent = text;
}


// Displays a success or error message on a form.

function showMsg(text, ok) {
  const message = document.getElementById('msg');

  message.textContent = text;
  message.className = 'msg ' + (ok ? 'ok' : 'bad');
}


// Displays a temporary notification.

function toast(text) {
  const notification = document.createElement('div');

  notification.className = 'toast';
  notification.textContent = text;

  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2200);
}


// Displays a message for pages that are not available yet.

const info = page => {
  toast(page + ' page is coming soon.');
  return false;
};


// Displays the number of items saved in a section.

const showCount = (key, label) =>
  toast(label + ': ' + read(key, []).length + ' item(s)');


/* ---------- VERISE logo ---------- */

// Full logo used in the navbar and footer.

const V_ICON = size =>
  `<svg width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true">
    <defs>
      <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2347D5"/>
        <stop offset="1" stop-color="#14213D"/>
      </linearGradient>
    </defs>

    <path d="M6 10h9l9 20 9-20h9L28 42h-8z" fill="url(#vg)"/>

    <path d="M1 18h6M3 24h7"
      stroke="#2347D5"
      stroke-width="2.5"
      stroke-linecap="round"/>

    <path d="M41 .5l1.2 2.8L45 4.5l-2.8 1.2L41 8.5l-1.2-2.8L37 4.5l2.8-1.2z"
      fill="#FF8A00"/>
  </svg>`;


// V-only icon used as the browser tab favicon.

const FAVICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">' +
  '<path d="M6 10h9l9 20 9-20h9L28 42h-8z" fill="#2347D5"/>' +
  '</svg>';
/* ---------- Shared navbar ---------- */

// The same navbar is displayed on every page.

function renderNavbar() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const user = getCurrentUser();

  // Creates a badge only when the saved item count is greater than zero.
  const badge = key => {
    const count = read(key, []).length;

    return count
      ? `<span class="badge">${count}</span>`
      : '';
  };


  // Displays different account buttons depending on login status.

  const account = user
    ? `
      <a class="btn btn-ghost"
         href="profile.html"
         data-page="profile.html">
        Hi, ${esc(user.name.split(' ')[0])}
      </a>

      <button class="btn btn-primary" onclick="logout()">
        Logout
      </button>
      `
    : `
      <a class="btn btn-ghost"
         href="login.html"
         data-page="login.html">
        Login
      </a>

      <a class="btn btn-primary"
         href="register.html"
         data-page="register.html">
        Register
      </a>
      `;


  // Builds the navbar and inserts it into the page.

  document.getElementById('navbar').innerHTML = `
    <div class="announce">
      Discover something new today.
    </div>

    <header class="nav">
      <div class="container">

        <a class="brand"
           href="index.html"
           aria-label="VERISE home">
          ${V_ICON(36)}
          <span>VERISE</span>
        </a>

        <form class="search" onsubmit="return doSearch(event)">
          ${icon('search')}

          <input
            id="q"
            list="suggest"
            value="${esc(new URLSearchParams(location.search).get('q') || '')}"
            placeholder="Search for products"
            aria-label="Search products"
            autocomplete="off"
          >

          <datalist id="suggest">
            ${PRODUCTS.map(product =>
              `<option value="${product.name}">`
            ).join('')}
          </datalist>
        </form>

        <button
          class="menu-btn"
          aria-label="Menu"
          onclick="document.getElementById('links').classList.toggle('open')">
          ${icon('menu')}
        </button>

        <nav class="links" id="links">
          <a href="index.html" data-page="index.html">Home</a>
          <a href="index.html#categories">Categories</a>
          <a href="index.html#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div class="actions">

          <button
            class="icon-btn"
            aria-label="Wishlist"
            onclick="showCount('verise_wish', 'Wishlist')">
            ${icon('heart')}
            ${badge('verise_wish')}
          </button>

          <button
            class="icon-btn"
            aria-label="Cart"
            onclick="showCount('verise_cart', 'Cart')">
            ${icon('cart')}
            ${badge('verise_cart')}
          </button>

          ${account}

        </div>
      </div>
    </header>
  `;


  // Highlights the current page in the navbar.

  document.querySelectorAll('#navbar [data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}


/* ---------- Product search ---------- */

// Redirects the user to the homepage with the search query.

function doSearch(event) {
  event.preventDefault();

  const query = document.getElementById('q').value.trim();

  location.href =
    'index.html' +
    (query ? '?q=' + encodeURIComponent(query) : '') +
    '#products';

  return false;
}


/* ---------- Shared footer ---------- */

// The footer is displayed on every page.

function renderFooter() {

  // Creates a footer link for pages that are not implemented yet.
  const link = text =>
    `<a href="#" onclick="return info('${esc(text)}')">
      ${esc(text)}
    </a>`;


  document.getElementById('footer').innerHTML = `
    <footer class="footer">
      <div class="container">

        <div class="fgrid">

          <div id="about">

            <div class="brand">
              <span class="tile">${V_ICON(30)}</span>
              <span>VERISE</span>
            </div>

            <p>Discover More. Live Better.</p>

            <p>
              VERISE is a multi-category marketplace for electronics,
              fashion, home, beauty, books, sports and everyday essentials.
            </p>

            <div class="social">
              <a href="https://www.instagram.com"
                 target="_blank"
                 rel="noopener">
                Instagram
              </a>

              <a href="https://www.facebook.com"
                 target="_blank"
                 rel="noopener">
                Facebook
              </a>

              <a href="https://x.com"
                 target="_blank"
                 rel="noopener">
                X
              </a>
            </div>

          </div>

          <div>
            <h4>Help</h4>
            ${link('Help Center')}
            ${link('Return Policy')}
          </div>

          <div>
            <h4>Legal</h4>
            ${link('Privacy Policy')}
            ${link('Terms & Conditions')}
          </div>

          <div id="contact">
            <h4>Contact Us</h4>
            <p>support@verise.com</p>
            <p>Mon–Sat, 9 am – 6 pm</p>
          </div>

        </div>

        <div class="copy">
          © ${new Date().getFullYear()} VERISE.
          This is a college project – no real orders are placed.
        </div>

      </div>
    </footer>
  `;
}


/* ---------- Product cards ---------- */

// Creates the HTML card for one product.

function productCard(product) {
  const wished = read('verise_wish', []).includes(product.id);

  // Calculates the discount using the original and current prices.
  const discount = product.mrp > product.price
    ? Math.round(
        (product.mrp - product.price) / product.mrp * 100
      )
    : 0;


  return `
    <article class="product">

      <button
        class="wish ${wished ? 'on' : ''}"
        aria-label="Add to wishlist"
        onclick="toggleWish(${product.id})">
        ${icon('heart')}
      </button>

      <div
        class="pimg"
        style="--t1:${TINTS[product.id % 3]}"
        onclick="viewProduct(${product.id})">

        <span>${product.icon}</span>

        ${
          product.img
            ? `<img
                 src="${product.img}"
                 alt="${product.name}"
                 loading="lazy"
                 onerror="this.remove()">`
            : ''
        }

        ${
          discount
            ? `<em class="tag">${discount}% off</em>`
            : ''
        }

      </div>

      <div class="pbody">

        <small>${esc(product.cat)}</small>

        <h3 onclick="viewProduct(${product.id})">
          ${product.name}
        </h3>

        <div class="rate">
          ${icon('star')}
          ${product.rating}
        </div>

        <div class="price">
          <b>${rupee(product.price)}</b>

          ${
            discount
              ? `<s>${rupee(product.mrp)}</s>`
              : ''
          }
        </div>

        <button
          class="btn btn-primary btn-block"
          onclick="addToCart(${product.id})">
          ${icon('cart')}
          Add to Cart
        </button>

      </div>
    </article>
  `;
}


/* ---------- Cart ---------- */

// Adds a product ID to the cart.

function addToCart(id) {
  const cart = read('verise_cart', []);

  cart.push(id);

  write('verise_cart', cart);

  // Refreshes the cart badge in the navbar.
  renderNavbar();

  toast('Added to cart');
}


/* ---------- Wishlist ---------- */

// Adds or removes a product from the wishlist.

function toggleWish(id) {
  let wish = read('verise_wish', []);

  wish = wish.includes(id)
    ? wish.filter(productId => productId !== id)
    : [...wish, id];

  write('verise_wish', wish);

  // Refreshes the navbar badge and product cards.
  renderNavbar();
  renderProducts();
}


/* ---------- Recently viewed products ---------- */

// Saves the product when the user clicks it.
// The list keeps only the four most recently viewed products.

function viewProduct(id) {
  const seen = read('verise_viewed', [])
    .filter(productId => productId !== id);

  seen.unshift(id);

  write('verise_viewed', seen.slice(0, 4));

  renderProducts();

  toast('Saved to recently viewed');
}


/* ---------- Category selection ---------- */

// Changes the selected category and refreshes the products.

function setCat(category) {
  curCat = category;

  renderProducts();
}
/* ---------- Homepage product sections ---------- */

// These functions safely return when their required elements
// are not present on the current page.


function renderProducts() {
  const grid = document.getElementById('popularGrid');

  // The product section exists only on the homepage.
  if (!grid) return;


  // Gets the search query from the URL.
  const query = (
    new URLSearchParams(location.search).get('q') || ''
  ).trim();


  // Filters products by category and search query.
  const list = PRODUCTS.filter(product => {
    const matchesCategory =
      curCat === 'All' || product.cat === curCat;

    const searchableText =
      (product.name + ' ' + product.cat).toLowerCase();

    const matchesSearch =
      searchableText.includes(query.toLowerCase());

    return matchesCategory && matchesSearch;
  });


  // Shows only eight products in the default homepage view.
  // When a category or search is selected, all matching products appear.
  const shown =
    curCat === 'All' && !query
      ? list.slice(0, 8)
      : list;


  // Updates the product section heading.
  document.getElementById('productsTitle').textContent =
    query
      ? `Results for “${query}”`
      : curCat === 'All'
        ? 'Popular Right Now'
        : curCat;


  // Shows the Clear Search link only when a query is active.
  document.getElementById('clearQ').hidden = !query;


  // Creates the category filter buttons.
  document.getElementById('chips').innerHTML =
    ['All', ...CATEGORIES.map(category => category[0])]
      .map(category => `
        <button
          class="chip ${category === curCat ? 'on' : ''}"
          onclick="setCat('${esc(category)}')">
          ${esc(category)}
        </button>
      `)
      .join('');


  // Displays the filtered products or an empty-state message.
  grid.innerHTML = shown.length
    ? shown.map(productCard).join('')
    : '<p class="empty">No products found. Try another search or category.</p>';


  // Displays the last four products as the trending section.
  document.getElementById('trendingGrid').innerHTML =
    PRODUCTS.slice(12).map(productCard).join('');


  // Finds the recently viewed products from browser storage.
  const seen = read('verise_viewed', [])
    .map(id => PRODUCTS.find(product => product.id === id))
    .filter(Boolean);


  // The recently viewed section stays hidden until a product is viewed.
  document.getElementById('recentSection').hidden = !seen.length;

  document.getElementById('recentGrid').innerHTML =
    seen.map(productCard).join('');
}


/* ---------- Homepage categories and trust section ---------- */

function renderHome() {
  const categoryGrid = document.getElementById('catGrid');

  // Stops this function from running on pages without categories.
  if (!categoryGrid) return;


  // Counts the products in each category.
  const countProducts = category =>
    PRODUCTS.filter(product => product.cat === category).length;


  // Creates the category cards.
  categoryGrid.innerHTML = CATEGORIES.map(category => {
    const name = category[0];
    const emoji = category[1];
    const count = countProducts(name);

    return `
      <a
        class="cat"
        href="#products"
        onclick="setCat('${esc(name)}')">

        <span class="em">${emoji}</span>

        <div>
          <b>${esc(name)}</b>

          <small>
            ${count}
            ${count === 1 ? 'product' : 'products'}
          </small>
        </div>

      </a>
    `;
  }).join('');


  // Creates the store-benefit items.
  document.getElementById('trust').innerHTML =
    TRUST.map(item => `
      <div class="t-item">

        <span class="ico">
          ${icon(item[0])}
        </span>

        <div>
          <b>${item[1]}</b>
          <small>${item[2]}</small>
        </div>

      </div>
    `).join('');


  // Loads the product section.
  renderProducts();
}


/* ---------- Website startup ---------- */

// This code runs automatically when the JavaScript file loads.

(function () {

  // Creates the browser tab favicon.
  const favicon = document.createElement('link');

  favicon.rel = 'icon';
  favicon.href =
    'data:image/svg+xml,' + encodeURIComponent(FAVICON);

  document.head.appendChild(favicon);


  // Loads the shared website components.
  renderNavbar();
  renderFooter();


  // Loads the homepage sections.
  renderHome();

})();
