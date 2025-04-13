const menu = {
    beverages: [
        { name: "Americano", price: 150, image: "image/menu/Beverages/americano.jpg" },
        { name: "Cappuccino", price: 180, image: "image/menu/Beverages/cappuccino.jpg" },
        { name: "Latte", price: 200, image: "image/menu/Beverages/latte.jpg" },
        { name: "Masala Chai", price: 120, image: "image/menu/Beverages/masala_chai.jpg" },
        { name: "Cold Brew Coffee", price: 250, image: "image/menu/Beverages/cold_brew.jpg" },
        { name: "Mango Smoothie", price: 220, image: "image/menu/Beverages/mango_smoothie.jpg" },
        { name: "Fresh Lime Soda", price: 100, image: "image/menu/Beverages/lime_soda.jpg" },
        { name: "Rose Iced Tea (Couple-Friendly)", price: 180, image: "image/menu/Beverages/rose_tea.jpg" },
        { name: "Sparkling Lemonade (Serves Two, Couple-Friendly)", price: 250, image: "image/menu/Beverages/lemonade.jpg" },
        { name: "Hot Chocolate with Marshmallows", price: 200, image: "image/menu/Beverages/hot_chocolate.jpg" },
        { name: "Virgin Mojito", price: 220, image: "image/menu/Beverages/mojito.jpg" },
        { name: "Blueberry Shake", price: 240, image: "image/menu/Beverages/blueberry_shake.jpg" }
    ],
    breakfast: [
        { name: "Classic Pancakes (with Maple Syrup)", price: 280, image: "image/menu/Breakfast/pancakes.jpg" },
        { name: "Veggie Omelette with Toast", price: 200, image: "image/menu/Breakfast/omelette.jpg" },
        { name: "Butter Croissant", price: 120, image: "image/menu/Breakfast/croissant.jpg" },
        { name: "Poha (Spiced Flattened Rice)", price: 150, image: "image/menu/Breakfast/poha.jpg" },
        { name: "Aloo Paratha with Curd", price: 180, image: "image/menu/Breakfast/paratha.jpg" },
        { name: "French Toast with Honey & Berries (Couple-Friendly)", price: 300, image: "image/menu/Breakfast/french_toast.jpg" },
        { name: "Mini Samosas (4 Pieces, with Chutney)", price: 140, image: "image/menu/Breakfast/samosas.jpg" },
        { name: "Stuffed Kulcha with Chole", price: 200, image: "image/menu/Breakfast/kulcha.jpg" },
        { name: "Avocado Toast with Cherry Tomatoes", price: 250, image: "image/menu/Breakfast/avocado_toast.jpg" },
        { name: "Cheese & Corn Quesadilla", price: 220, image: "image/menu/Breakfast/quesadilla.jpg" }
    ],
    main: [
        { name: "Margherita Pizza (8-inch)", price: 350, image: "image/menu/Main/margherita_pizza.jpg" },
        { name: "Creamy Pesto Pasta", price: 400, image: "image/menu/Main/pesto_pasta.jpg" },
        { name: "Grilled Chicken Sandwich", price: 300, image: "image/menu/Main/chicken_sandwich.jpg" },
        { name: "Paneer Tikka Wrap", price: 250, image: "image/menu/Main/paneer_wrap.jpg" },
        { name: "Buddha Bowl (Quinoa, Veggies, Hummus)", price: 380, image: "image/menu/Main/buddha_bowl.jpg" },
        { name: "Butter Chicken with Naan", price: 450, image: "image/menu/Main/butter_chicken.jpg" },
        { name: "Veg Hakka Noodles", price: 320, image: "image/menu/Main/hakka_noodles.jpg" },
        { name: "Peri-Peri Chicken Platter (with Fries, Dip, Couple-Friendly)", price: 600, image: "image/menu/Main/peri_platter.jpg" },
        { name: "Mezze Platter (Hummus, Pita, Falafel, Olives, Couple-Friendly)", price: 500, image: "image/menu/Main/mezze_platter.jpg" },
        { name: "Thai Green Curry with Rice", price: 420, image: "image/menu/Main/thai_curry.jpg" },
        { name: "BBQ Mushroom Burger", price: 340, image: "image/menu/Main/mushroom_burger.jpg" },
        { name: "Dal Makhani with Jeera Rice", price: 350, image: "image/menu/Main/dal_makhani.jpg" }
    ],
    desserts: [
        { name: "Chocolate Brownie with Ice Cream", price: 200, image: "image/menu/Desserts/brownie.jpg" },
        { name: "Tiramisu", price: 250, image: "image/menu/Desserts/tiramisu.jpg" },
        { name: "Lemon Cheesecake", price: 220, image: "image/menu/Desserts/cheesecake.jpg" },
        { name: "Red Velvet Pastry (Couple-Friendly)", price: 240, image: "image/menu/Desserts/red_velvet.jpg" },
        { name: "Nutella Waffle (Shareable, Couple-Friendly)", price: 350, image: "image/menu/Desserts/nutella_waffle.jpg" },
        { name: "Gulab Jamun with Rabri (Couple-Friendly)", price: 180, image: "image/menu/Desserts/gulab_jamun.jpg" },
        { name: "Mango Panna Cotta", price: 230, image: "image/menu/Desserts/panna_cotta.jpg" },
        { name: "Churros with Chocolate Dip (Couple-Friendly)", price: 260, image: "image/menu/Desserts/churros.jpg" }
    ],
    combos: [
        { name: "Coffee + Croissant", price: 250, image: "image/menu/Combos/coffee_croissant.jpg" },
        { name: "Pasta + Iced Tea", price: 500, image: "image/menu/Combos/pasta_iced_tea.webp" },
        { name: "Pizza & Mocktail Combo (Any Pizza, Two Virgin Mojitos, Couple-Friendly)", price: 700, image: "image/menu/Combos/pizza_mocktail.jpg" },
        { name: "Date Night Platter (Mini Sliders, Fries, Two Desserts, Two Coffees, Couple-Friendly)", price: 900, image: "image/menu/Combos/date_night.jpg" },
        { name: "Breakfast for Two (Pancakes, Omelette, Two Masala Chais, Couple-Friendly)", price: 600, image: "image/menu/Combos/breakfast_two.jpg" }
    ]
};

let cart = [];
let isDarkTheme = true;
const GST_RATE = 0.12;

function showCategory(category) {
    const content = document.getElementById('menu-content');
    content.innerHTML = '';
    content.classList.remove('fadeIn');
    void content.offsetWidth;
    content.classList.add('fadeIn');

    // Update active button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Update body class
    document.body.className = isDarkTheme ? category : `light ${category}`;

    menu[category].forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <div class="quantity-selector">
                <input type="number" id="qty-${item.name.replace(/\s+/g, '-')}" value="1" min="1">
                <button onclick="addToCart('${item.name}', ${item.price}, document.getElementById('qty-${item.name.replace(/\s+/g, '-')}').value); event.stopPropagation()">Add</button>
            </div>
        `;
        div.onclick = () => showPreview(item.name);
        content.appendChild(div);
    });
}

function addToCart(name, price, quantity) {
    quantity = parseInt(quantity) || 1;
    for (let i = 0; i < quantity; i++) {
        cart.push({ name, price });
    }
    updateCart();
    const cartDiv = document.querySelector('.cart');
    cartDiv.classList.remove('bounceIn');
    void cartDiv.offsetWidth;
    cartDiv.classList.add('bounceIn');
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartGst = document.getElementById('cart-gst');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart('${item.name}'); event.stopPropagation()">Remove</button>`;
        cartItems.appendChild(li);
        subtotal += item.price;
    });

    const gst = subtotal * GST_RATE;
    const total = subtotal + gst;

    cartSubtotal.textContent = subtotal.toFixed(2);
    cartGst.textContent = gst.toFixed(2);
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
    showModal('Cart Cleared', 'Your cart has been cleared successfully.');
}

function placeOrder() {
    if (cart.length === 0) {
        showModal('Empty Cart', 'Please add items to your cart before placing an order.');
        return;
    }
    showModal('Order Placed', 'Thank you for your order! It will be ready soon.');
    cart = [];
    updateCart();
}

function showModal(title, message) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-message').textContent = message;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

function showPreview(itemName) {
    const preview = document.getElementById('preview');
    let description = '';
    let image = '';

    // Find the item in the menu to get its image and description
    for (let category in menu) {
        const item = menu[category].find(i => i.name === itemName);
        if (item) {
            image = item.image;
            switch (itemName) {
                case "Americano": description = "A strong black coffee with a rich, bold flavor."; break;
                case "Classic Pancakes (with Maple Syrup)": description = "Fluffy pancakes drizzled with sweet maple syrup."; break;
                case "Margherita Pizza (8-inch)": description = "Fresh tomato, mozzarella, and basil on a crispy base."; break;
                default: description = "A delicious dish crafted with love!"; break;
            }
            break;
        }
    }

    preview.innerHTML = `
        <div class="preview-image-container">
            <img src="${image}" alt="${itemName}" class="preview-image">
        </div>
        <h3>${itemName}</h3>
        <p>${description}</p>
        <button onclick="hidePreview()">Close</button>
    `;
    preview.classList.remove('zoomIn');
    void preview.offsetWidth;
    preview.classList.add('zoomIn', 'show');
}

function hidePreview() {
    const preview = document.getElementById('preview');
    preview.classList.remove('show', 'zoomIn');
}

function searchMenu() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const content = document.getElementById('menu-content');
    content.innerHTML = '';
    content.classList.remove('fadeIn');
    void content.offsetWidth;
    content.classList.add('fadeIn');

    // Clear active button when searching
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    let results = [];
    for (let category in menu) {
        menu[category].forEach(item => {
            if (item.name.toLowerCase().includes(query)) {
                results.push({ ...item, category });
            }
        });
    }

    if (results.length === 0) {
        content.innerHTML = '<p>No items found.</p>';
        return;
    }

    results.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <span>${item.name} - ₹${item.price} (${item.category})</span>
            <div class="quantity-selector">
                <input type="number" id="qty-${item.name.replace(/\s+/g, '-')}" value="1" min="1">
                <button onclick="addToCart('${item.name}', ${item.price}, document.getElementById('qty-${item.name.replace(/\s+/g, '-')}').value); event.stopPropagation()">Add</button>
            </div>
        `;
        div.onclick = () => showPreview(item.name);
        content.appendChild(div);
    });
}

function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const currentCategory = document.body.className.replace('light', '').trim() || 'beverages';
    document.body.className = isDarkTheme ? currentCategory : `light ${currentCategory}`;
}

// Initialize theme toggle
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Show Beverages by default
showCategory('beverages');