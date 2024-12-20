cars = [
    {
        id:1,
        name: 'Tata Altroz',
        price: 10.99,
        color: 'Opera Blue',
        imgPath: 'https://imgd.aeplcdn.com/600x337/n/yk6reeb_1760179.png?q=80'
    },

    {
        id:1,
        name: 'Mercedes-Benz C-Class',
        price: 61.85,
        color: 'Opalith White',
        imgPath: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/178535/c-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80'
    }
]





document.getElementById('carsList').innerHTML = cars.map((car)=> `<div class="card m-3 cardCustom shadow" style="width: 60rem;">
  <img src="${car.imgPath}" class="card-img-top " alt="...">
  <div class="card-body shadow">
    <h4 class="card-title">${car.name}</h4>
    <p class="card-text">Rs. ${car.price} lakhs onwards</p>
    <p class="card-text bg-primary d-inline-block p-1">${car.color}</p>
    <p class="card-text m-0" style="font-size:12px">Pick a colour</p>
    <span class="dot" id="imgColor" style="background-color: blue;"></span>
    <span class="dot" style="background-color: brown;"></span>
    <span class="dot" style="background-color: grey;"></span>
    <span class="dot" style="background-color: black;"></span><br><br>
    
    <button class="btn btn-sm btn-warning">Ckeck more details</button>
  </div>
</div>`
);