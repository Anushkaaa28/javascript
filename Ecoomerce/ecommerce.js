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
    brand: "Fastrack",
    description: "Unisex Black Analogue Watch",
    price: 2399,
    quantity: 10,
    imgPath:
      "https://th.bing.com/th/id/OIP.Hp5MMHCiiSgWFt3aSN3mdgHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    brand: "DIESEL",
    description: "Men Printed Dial Watch",
    price: 6779,
    quantity: 15,
    imgPath:
      "https://th.bing.com/th/id/OIP.WXrS-6ouBAvCmlebyLgrZAHaLu?w=134&h=213&c=7&r=0&o=5&pid=1.7",
  }
];

function saveToLocalStorage(){
  localStorage.setItem("Products", JSON.stringify(products));
}

saveToLocalStorage();

function showProducts() {
  document.getElementById("productList").innerHTML = products.map((product) =>  
        `  <div class="card shadow mb-3" style="width: 18rem;">
            <img src="${product.imgPath}" class="card-img-top" style="height:200px;" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">₹${product.price}</p>
            <p class="card-text">${product.quantity}</p>
            <button onclick="editProduct(${product.id})" class="btn btn-dark">Edit</button>
            <button onclick="deleteProduct(${product.id})" class="btn btn-dark">Delete</button>
            </div>
         </div> `
        ).join('');
}
showProducts();


function addProducts(){
   const newProduct =  
        {
            id: Date.now(),
            brand: document.getElementById('productBrand').value,
            description: document.getElementById('productDescription').value,
            price: document.getElementById('productPrice').value,
            quantity: document.getElementById('productQuantity').value,
            productImage: document.getElementById('productImage').value
        } 

        products.push(newProduct);
        showProducts();
        saveToLocalStorage();
        clearFields();
}

function deleteProduct(ID){
  products = products.filter((product)=>ID !== product.id)
  saveToLocalStorage();
  showProducts();
}

function updateProduct(id){
  const product = products.find((prod)=>prod.id === id)
  if(product){
    product.brand = document.getElementById("productBrand").value;
    product.description = document.getElementById("productDescription").value;
    product.price = Number(document.getElementById("productPrice").value);
    product.quantity = Number(document.getElementById("productQuantity").value);

    saveToLocalStorage();
    showProducts();
    clearFields();
  }
}

function editProduct(id){
  const product = products.find((prod)=>prod.id === id)
  // console.log(id)
  if(product){
    document.getElementById("productBrand").value = product.brand;
    document.getElementById("productDescription").value = product.description;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;

        // updateProduct(id);
        // addProducts();

    const addButton = document.querySelector(".save");
    addButton.textContent = "Save";
    addButton.onclick = function () {
      updateProduct(id);

      addButton.textContent = "Add Product";
      addButton.onclick = function () {
        addProducts();
      };
    };
  }
}


searchInput.addEventListener('input', ()=>{
  searchKey = event.target.value.toLowerCase();
  products = products.filter((prod)=>prod.brand.toLowerCase().includes(searchKey))
  showProducts(products);
})

function clearFields(){
  document.getElementById("productBrand").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "";
}


