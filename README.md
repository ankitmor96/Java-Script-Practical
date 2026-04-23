<img width="1887" height="834" alt="Screenshot 2026-04-23 163218" src="https://github.com/user-attachments/assets/0c6c378f-d47f-4cbb-a98e-6383a799ed66" />

# 🛒 Shopping Cart Web App

## 📌 Project Overview

This is a simple **Shopping Cart Web Application** built using **JavaScript, HTML, and Bootstrap**.
It allows users to view products, add them to a cart, update quantities, remove items, and place orders.

---

## 🚀 Features

* 📦 Display product list dynamically
* ➕ Add products to cart
* 🔢 Increase / decrease product quantity
* ❌ Remove items from cart
* 💾 Data stored in **localStorage**
* 💰 Calculate total price automatically
* 🧾 Checkout functionality
* ➕ Add new products dynamically
* 🪟 Bootstrap modal for cart display

---

## 🛠️ Technologies Used

* HTML5
* CSS3 / Bootstrap
* JavaScript (ES6)
* Local Storage API

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Product Display

* Products are stored in an array.
* `displayProduct()` dynamically renders all products.

### 2. Add to Cart

* Clicking **Add to Cart**:

  * Checks if product already exists
  * If yes → increase quantity
  * If no → add new item with `qty = 1`

### 3. Cart Management

* Functions:

  * `increaseQty(id)`
  * `decreaseqty(id)`
  * `remove(id)`
* Updates are saved in **localStorage**

### 4. Total Calculation

* `total()` function calculates:

```
price × quantity
```

* Displays grand total

### 5. Checkout

* If cart is empty → alert message
* Else → order placed & cart cleared

---

## 💡 Key Functions

| Function Name      | Description        |
| ------------------ | ------------------ |
| `displayProduct()` | Show all products  |
| `addProductList()` | Add item to cart   |
| `showCartData()`   | Display cart items |
| `increaseQty()`    | Increase quantity  |
| `decreaseqty()`    | Decrease quantity  |
| `remove()`         | Remove item        |
| `total()`          | Calculate total    |
| `checkOut()`       | Place order        |
| `addProduct()`     | Add new product    |

---

## ⚠️ Notes / Improvements

* ❗ Fix duplicate `id` generation (`products.length + 1` may conflict)
* ❗ Add validation for image URLs
* ❗ Improve UI/UX with better styling
* ❗ Add edit/update product feature
* ❗ Add search & filter functionality

---

## 📸 Screenshot (Optional)

*Add your project screenshot here*

---

## 📥 How to Run

1. Download or clone the project
2. Open `index.html` in browser
3. Start using the app 🎉

---

## 🙌 Author

* Developed by: **Ankit**

---

## 📃 License

This project is free to use for learning purposes.

