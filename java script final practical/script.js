let products = [
    {
        id: 1,
        name: "VR Headset",
        price: 24999,
        image: "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg"
    },
    {
        id: 2,
        name: "Microphone",
        price: 1599,
        image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg"
    },
    {
        id: 3,
        name: "Tripod Stand",
        price: 899,
        image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg"
    },
    {
        id: 4,
        name: "Cooling Pad",
        price: 699,
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
    },
    {
        id: 5,
        name: "Wireless Charger",
        price: 999,
        image: "https://images.pexels.com/photos/4526411/pexels-photo-4526411.jpeg"
    },
    {
        id: 6,
        name: "Smart Bulb",
        price: 599,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
    },
    {
        id: 10,
        name: "Gaming Mouse",
        price: 799,
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
    },
    {
        id: 11,
        name: "Laptop",
        price: 55999,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
        id: 12,
        name: "Keyboard",
        price: 999,
        image: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg"
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
    },
    {
        id: 14,
        name: "Mobile Phone",
        price: 19999,
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
    },
    {
        id: 15,
        name: "DSLR Camera",
        price: 45999,
        image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },

];

function displayProduct(data = products) {


    const prductList = document.getElementById("product-list");


    prductList.innerHTML = "";

    data.forEach((p) => {

        prductList.innerHTML += `
    <div class="col-md-4 mt-4">
    <div class="card p-card shadow img-fluid rounded-3 ">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
    <p>🛒</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h2 class = " card-price card-text">₹${p.price}</h2>
    <a href="#" class="btn btn-outline-primary" onclick="addProductList(${p.id})">➕Add To Cart</a>
    <a href="#" class="btn btn-outline-success" onclick="EditProductModal(${p.id})" >✏️Update</a>
    <a href="#" class="btn btn-outline-danger" onclick="DeleteProduct(${p.id})">🗑️Delete</a>
  </div>
</div>
    </div>`
    });

}

displayProduct();

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

function addProductList(id) {

    try {

        let product = cartItems.find((p) => p.id === id);

        if (product) {

            product.qty++;

        } else {

            product = products.find((p) => p.id === id);
            cartItems.push({ ...product, qty: 1 });

        }

        localStorage.setItem("cartData", JSON.stringify(cartItems));

        alert("item added to product list")

    } catch (error) {

        console.log(error);

    }

}

function displayModal() {

    const cartItemList = document.getElementById("cartItem-list");

    let modal = new bootstrap.Modal(cartItemList);

    modal.show();
    editLatestData();

}

function showProductData() {
    try {

        const cartList = document.getElementById("cartTable");

        cartList.innerHTML = "";

        cartItems.forEach((p) => {

            cartList.innerHTML += `
          

         <tr>
         <td>
          <img src="${p.image}" style="height="60" width="60" style="object-fit:cover; border-radius:5px;">
         </td>
         <td>${p.name}</td>
         <td>

         <div class="d-flex gap-2">
         
         <button class="btn btn-success " onClick = "IncreaseQty(${p.id})">+</button>

         <h5>${p.qty}</h5>

         <button class="btn btn-danger" onclick = "Decreaseqty(${p.id})">-</button>

         </div>

         </td>
         <td>₹${p.qty * p.price}</td>
         <td><button class ="btn btn-danger" onclick = "Remove(${p.id})">remove</button></td>         
         </tr>`;

        });
    } catch (error) {

        console.log(error)

    }
}

function IncreaseQty(id) {


    const product = cartItems.find((p) => p.id === id);



    if (product) {

        product.qty++;

    }

    editLatestData();

}

function editLatestData() {

    localStorage.setItem("cartData", JSON.stringify(cartItems));

    showProductData();

    total();

}

function Decreaseqty(id) {

    const product = cartItems.find((p) => p.id === id);

    if (product) {

        product.qty--;

    }

    if (product.qty <= 0) {

        cartItems = cartItems.filter((p) => p.id !== id);

    }

    editLatestData();

}

function Remove(id) {

    cartItems = cartItems.filter((p) => p.id !== id);

    editLatestData();

}

function total() {

    const total = document.getElementById("grand-total");

    total.innerHTML = "";

    const totalAmount = cartItems.reduce((acc, curr) => {

        return (acc += curr.price * curr.qty);

    }, 0);

    total.innerHTML += `<h5>₹${totalAmount}</h5>`

}

function checkOut() {

    if (cartItems.length === 0) {
        alert("There is currently no items in  product list , so please add to some items in product list")
    } else {
        alert("order placed successfull")

        cartItems = [];


        editLatestData();

    }

}

function displayModal1() {

    const AddCart = document.getElementById("Add-Cart");

    let modal = new bootstrap.Modal(AddCart);

    modal.show();

}

function addProduct() {

    const name = document.getElementById("pname").value;
    const price = document.getElementById("pprice").value;
    const image = document.getElementById("pimage").value;

    if (!name || !price || !image) {

        alert(" please full fill form ");

        return;
    }

    const newId = products.length + 1;

    const NewProduct = {
        id: newId,
        name: name,
        price: Number(price),
        image: image
    };

    products.push(NewProduct);

    const productList = document.getElementById("product-list");


    productList.innerHTML += `
    
    <div class="col-md-4 mt-4">
    <div class="card p-card shadow img-fluid rounded-3 ">
  <img src="${image}" class="card-img-top" alt="${name}">
  <div class="card-body text-center">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h2 class = "card-text">₹${price}</h2>
    <a href="#" class="btn btn-primary" onclick="addToCart(${newId})">Add To Cart</a>
  </div>
</div>
    </div>
    
    `

    editLatestData();
}


function DeleteProduct(id) {

    products = products.filter((p) => p.id !== id);
    alert("Are You Sure Product Have Deletted");


    displayProduct();

}

function EditProductModal(id) {

    let ModalElement = document.getElementById("EditProductModal");

    let modal = new bootstrap.Modal(ModalElement)

    modal.show();

    const product = products.find((p) => p.id === id)

    if (!product) {
        return alert("product not found");
    }

    let index = products.findIndex((p) => p.id === id);

    if (index === -1) {
        return alert("product not found");
    }

    document.getElementById("EditProductName").value = products[index].name
    document.getElementById("EditProductPrice").value = products[index].price
    document.getElementById("EditProductImage").value = products[index].image

    let form = document.getElementById("EditProductForm");

    form.onsubmit = function (e) {
        e.preventDefault();

        let name = document.getElementById("EditProductName").value;
        let price = document.getElementById("EditProductPrice").value;
        let image = document.getElementById("EditProductImage").value;

        products[index] = {
            ...products[index],
            name,
            price: Number(price),
            image,
        };

        modal.hide();

        displayProduct();

    };
}

function searchProduct() {
    let value = document.getElementById("searchInput").value.toLowerCase();

    let result = products.filter((p) =>
        p.name.toLowerCase().includes(value)
    );

    if (result.length === 0) {
        document.getElementById("product-list").innerHTML = "<h3>No Product Found</h3>";
    } else {
        displayProduct(result);
    }
}

function Short(){



}











