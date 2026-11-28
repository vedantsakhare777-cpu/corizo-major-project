# VERISE

A warm, editorial storefront for the small things that make everyday life feel considered. This is Person 2’s product browsing and shopping cart contribution for the Corizo group project.

## What is included

- Home dashboard with featured products
- Product catalogue with search, category filters, and sorting
- Product detail view with quantity selection
- Shopping cart with add, update, remove, subtotal, and delivery estimate
- PHP endpoints for products and signed-in user carts
- MySQL schema and sample products
- Real Unsplash photography with image credits

## Run the demo

Open index.html in a browser. Browse the collection, open a product, add it to your bag, and update quantities. The demo cart is saved in that browser’s local storage. Internet access is needed for the Unsplash photos and Google Fonts.

## MySQL and PHP integration

1. Import database/schema.sql into MySQL.
2. Configure DB_HOST, DB_PORT, DB_NAME, DB_USER, and DB_PASSWORD in the PHP environment.
3. Place the folder alongside Person 1’s authentication flow. The cart API expects the signed-in account ID in the shared PHP session as user_id.
4. Set enabled to true and baseUrl to the correct API folder in js/config.js.
5. Confirm the final users table name and key type with Person 1 before adding the cart foreign key to the combined schema.
6. Person 4 can use the products table fields; image_url stores a URL.

This package is self-contained so the team can review it alongside the current root homepage and integrate the shared navigation and checkout handoff.
