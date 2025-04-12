// Menu data (same as before)
const menu = {
    beverages: [
        { name: "Americano", price: 150 },
        { name: "Cappuccino", price: 180 },
        { name: "Latte", price: 200 },
        { name: "Masala Chai", price: 120 },
        { name: "Cold Brew Coffee", price: 250 },
        { name: "Mango Smoothie", price: 220 },
        { name: "Fresh Lime Soda", price: 100 },
        { name: "Rose Iced Tea (Couple-Friendly)", price: 180 },
        { name: "Sparkling Lemonade (Serves Two, Couple-Friendly)", price: 250 },
        { name: "Hot Chocolate with Marshmallows", price: 200 },
        { name: "Virgin Mojito", price: 220 },
        { name: "Blueberry Shake", price: 240 }
    ],
    breakfast: [
        { name: "Classic Pancakes (with Maple Syrup)", price: 280 },
        { name: "Veggie Omelette with Toast", price: 200 },
        { name: "Butter Croissant", price: 120 },
        { name: "Poha (Spiced Flattened Rice)", price: 150 },
        { name: "Aloo Paratha with Curd", price: 180 },
        { name: "French Toast with Honey & Berries (Couple-Friendly)", price: 300 },
        { name: "Mini Samosas (4 Pieces, with Chutney)", price: 140 },
        { name: "Stuffed Kulcha with Chole", price: 200 },
        { name: "Avocado Toast with Cherry Tomatoes", price: 250 },
        { name: "Cheese & Corn Quesadilla", price: 220 }
    ],
    main: [
        { name: "Margherita Pizza (8-inch)", price: 350 },
        { name: "Creamy Pesto Pasta", price: 400 },
        { name: "Grilled Chicken Sandwich", price: 300 },
        { name: "Paneer Tikka Wrap", price: 250 },
        { name: "Buddha Bowl (Quinoa, Veggies, Hummus)", price: 380 },
        { name: "Butter Chicken with Naan", price: 450 },
        { name: "Veg Hakka Noodles", price: 320 },
        { name: "Peri-Peri Chicken Platter (with Fries, Dip, Couple-Friendly)", price: 600 },
        { name: "Mezze Platter (Hummus, Pita, Falafel, Olives, Couple-Friendly)", price: 500 },
        { name: "Thai Green Curry with Rice", price: 420 },
        { name: "BBQ Mushroom Burger", price: 340 },
        { name: "Dal Makhani with Jeera Rice", price: 350 }
    ],
    desserts: [
        { name: "Chocolate Brownie with Ice Cream", price: 200 },
        { name: "Tiramisu", price: 250 },
        { name: "Lemon Cheesecake", price: 220 },
        { name: "Red Velvet Pastry (Couple-Friendly)", price: 240 },
        { name: "Nutella Waffle (Shareable, Couple-Friendly)", price: 350 },
        { name: "Gulab Jamun with Rabri (Couple-Friendly)", price: 180 },
        { name: "Mango Panna Cotta", price: 230 },
        { name: "Churros with Chocolate Dip (Couple-Friendly)", price: 260 }
    ],
    combos: [
        { name: "Coffee + Croissant", price: 250 },
        { name: "Pasta + Iced Tea", price: 500 },
        { name: "Pizza & Mocktail Combo (Any Pizza, Two Virgin Mojitos, Couple-Friendly)", price: 700 },
        { name: "Date Night Platter (Mini Sliders, Fries, Two Desserts, Two Coffees, Couple-Friendly)", price: 900 },
        { name: "Breakfast for Two (Pancakes, Omelette, Two Masala Chais, Couple-Friendly)", price: 600 }
    ]
};

let cart = [];

const GST_RATE = 0.12; // 12% GST

function showCategory(category) {
    const content = document.getElementById('menu-content');
    content.innerHTML = '';
    content.classList.remove('fadeIn');
    void content.offsetWidth;
    content.classList.add('fadeIn');

    document.body.className = '';
    document.body.classList.add(category);

    menu[category].forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `${item.name} - ₹${item.price} <button onclick="addToCart('${item.name}', ${item.price}); event.stopPropagation()">Add</button>`;
        div.onclick = () => showPreview(item.name);
        content.appendChild(div);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
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
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
    const cartDiv = document.querySelector('.cart');
    cartDiv.classList.remove('bounceIn');
    void cartDiv.offsetWidth;
    cartDiv.classList.add('bounceIn');
}

function showPreview(itemName) {
    const preview = document.getElementById('preview');
    let description = '';
    switch (itemName) {
        case "Americano": description = "A strong black coffee with a rich, bold flavor."; break;
        case "Classic Pancakes (with Maple Syrup)": description = "Fluffy pancakes drizzled with sweet maple syrup."; break;
        case "Margherita Pizza (8-inch)": description = "Fresh tomato, mozzarella, and basil on a crispy base."; break;
        default: description = "A delicious dish crafted with love!"; break;
    }
    preview.innerHTML = `<h3>${itemName}</h3><p>${description}</p><button onclick="hidePreview()">Close</button>`;
    preview.classList.remove('zoomIn');
    void preview.offsetWidth;
    preview.classList.add('zoomIn', 'show');
}

function hidePreview() {
    const preview = document.getElementById('preview');
    preview.classList.remove('show', 'zoomIn');
}

// Show Beverages by default
showCategory('beverages');