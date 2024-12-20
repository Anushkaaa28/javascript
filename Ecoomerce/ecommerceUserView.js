products = [
    {
        id: 1,
        brand: "Titan",
        description: "Men Black Dial Watch 1639SM02",
        price: 4599,
        quantity: 23,
        imgPath:
            "https://th.bing.com/th/id/OIP.aUIwWLMHaO43NsAmemge8gHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },

    {
        id: 2,
        brand: "DIESEL",
        description: "Men Printed Dial Watch",
        price: 31995,
        quantity: 15,
        imgPath:
            "https://th.bing.com/th/id/OIP.7Xbt-uZuoEg3Im9DPLQzxQHaI4?w=174&h=208&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 3,
        brand: "Tommy Hilfiger",
        description: "Blue Dial & Brown Leather Watch",
        price: 4399,
        quantity: 2,
        imgPath:
            "https://th.bing.com/th/id/OIP.VBS3b6svkGcN-InO7fMewAHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 4,
        brand: "WROGN",
        description: "Men White Analogue Watch",
        price: 2399,
        quantity: 10,
        imgPath:
            "https://th.bing.com/th/id/OIP.TGrF9Lmo3Imk4IdELfO7vgHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 5,
        brand: "Titan",
        description: "Men Silver Toned Dial Watch",
        price: 5999,
        quantity: 1,
        imgPath:
            "https://th.bing.com/th/id/OIP.4Gwu3cPmELniEIZh_bL2kgHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 6,
        brand: "Tommy Hilfiger",
        description: "Blue Dial & Brown Leather Watch",
        price: 4399,
        quantity: 2,
        imgPath:
            "https://th.bing.com/th/id/OIP.VBS3b6svkGcN-InO7fMewAHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 7,
        brand: "Titan",
        description: "Men Black Dial Watch 1639SM02",
        price: 4599,
        quantity: 23,
        imgPath:
            "https://th.bing.com/th/id/OIP.aUIwWLMHaO43NsAmemge8gHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },
    {
       id: 8,
        brand: "Fastrack",
        description: "Unisex Black Analogue Watch",
        price: 2399,
        quantity: 10,
        imgPath:
            "https://th.bing.com/th/id/OIP.Hp5MMHCiiSgWFt3aSN3mdgHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 9,
        brand: "Fastrack",
        description: "Unisex Black Analogue Watch",
        price: 2399,
        quantity: 10,
        imgPath:
            "https://th.bing.com/th/id/OIP.Hp5MMHCiiSgWFt3aSN3mdgHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 10,
        brand: "Fastrack",
        description: "Unisex Black Analogue Watch",
        price: 2399,
        quantity: 10,
        imgPath:
            "https://th.bing.com/th/id/OIP.Hp5MMHCiiSgWFt3aSN3mdgHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7",
    },
    {
      id: 11,
        brand: "WROGN",
        description: "Men White Analogue Watch",
        price: 2399,
        quantity: 10,
        imgPath:
            "https://th.bing.com/th/id/OIP.TGrF9Lmo3Imk4IdELfO7vgHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7",
    },
    {
        id: 12,
        brand: "Titan",
        description: "Men Black Dial Watch 1639SM02",
        price: 4599,
        quantity: 23,
        imgPath:
            "https://th.bing.com/th/id/OIP.aUIwWLMHaO43NsAmemge8gHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    }
];


function saveToLocalStorage() {
    localStorage.setItem("Products", JSON.stringify(products));
}

saveToLocalStorage();

function showProducts() {
    document.getElementById("productList").innerHTML = products.map((product) =>
        `<div class="card shadow m-3" style="width: 17rem;">
            <img src="${product.imgPath}" class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text text-success">₹ ${product.price}</p>
            <div class= "row">
            <p class="card-text text-danger col m-2">only ${product.quantity} left</p>
            <button onclick="addToCart(${product.id})" class="btn btn-dark col m-2" >Add to cart</button></div>
            </div>
            </div>`
    ).join('');
}
showProducts();
saveToLocalStorage();



cart = [];

document.getElementById('cartLength').innerHTML = cart.length; 

function addToCart(id) {
    let product = products.find((p) => p.id === id)
    console.log(product);

    cart.push(product);
    document.getElementById('cartLength').innerHTML = cart.length;
    console.log(cart);
    cartDisplay(cart);
}

function calcultePrice(){
    totalPrice = cart.reduce((total, prod)=> { 
        return total + prod.price;
    },0
);
    // totalPrice = total;
    console.log(totalPrice);

    discount = (totalPrice*0.10).toFixed(2);
    discountedPrice = totalPrice - discount;

    document.getElementById('cartTotal').innerHTML = `<h6 class="text-primary text-center">Flat 10% Off  discount on all products<h6><br>
                                                    Total MRP : ${totalPrice}<br>
                                                    Discount on MRP : ${discount}<br><br>
                                                    Total discounted amount : ${discountedPrice} 
                                                         `
    //  `<h3>Total discounted price : ${totalPrice}</h3>`
}


 

function cartDisplay(){
    document.getElementById("productAddedToCart").innerHTML = 
    cart.map((prod)=>
        `
    <div class="cardCustom card m-3 shadow" style="width: 25rem;">

    <div class="shadow"><img src="${prod.imgPath}" class="card-img-top m-3" style="height:120px; width:120px" alt="..."></div> 
    <div class="card-body">
     <h6 class="card-title">${prod.brand}</h6>
            <p class="card-text">${prod.description}</p>
            <p class="card-text text-success">₹${prod.price}</p>
    </div>
     </div> `
    ).join('');
    // <p class="card-text text-danger m-2">only ${prod.quantity} left</p>

}


{/* <div class="card m-3 shadow row" style="width: 12rem;">
            <div class="col">
            <img src="${prod.imgPath}" class="card-img-top" style="height:120px;" alt="..."></div>
            <div class="card-body col">
            <h5 class="card-title">${prod.brand}</h5>
            <p class="card-text">${prod.description}</p>
            <p class="card-text">₹${prod.price}</p>
            <p class="card-text text-danger col m-2">only ${prod.quantity} left</p>
            </div>
            </div> */}




cartDisplay();

searchInput.addEventListener('input', () => {
    searchKey = event.target.value.toLowerCase();
    products = products.filter((prod) => prod.brand.toLowerCase().includes(searchKey))
    showProducts(products);
})

