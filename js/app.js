let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Rođendanska žurka',
        image: 'luka-cestitka-2.jpg',
        price: "500"
    },
    {
        id: 2,
        name: 'Prvi rođendan',
        image: '5743657.jpg',
        price: "500" 
    },
    {
        id: 3,
        name: 'Rođendanska čestitka',
        image: 'jana ilustracija.png',
        price: "1000"
    },
    {
        id: 4,
        name: 'Božićna čestitka',
        image: 'ivana.png',
        price: "1000"
    },
    {
        id: 5,
        name: '21. Rođendan',
        image: 'IMG_4543.jpeg',
        price: "1000" 
    },
    {
        id: 6,
        name: 'Pavlov rođendan',
        image: '',
        price: "1200" 
    },
    {
        id: 7,
        name: 'Pavlov rođendan',
        image: 'pavle.jpg',
        price: "1200"
    },
    {
        id: 8,
        name: '',
        image: '', 
        price: "1200"
    },
    {
        id: 9,
        name: 'Džonijev 1. rođendan!',
        image: 'dzoni-rodjendan.png',
        price: "1000" 
    },
    {
        id: 10,
        name: 'Čestitka za Emu',
        image: 'ema cestitka.jpg',
        price: "1000"
    },
    {
        id: 11,
        name: 'Godišnjica',
        image: 'IMG_4551.jpeg',
        price: "1000"
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Dodaj u korpu</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    // total.innerText = totalPrice.toLocaleString();
    total.innerText = "Plati";
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}