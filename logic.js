let carShopItem = document.querySelector('.carShopingSection');
let garageItemArray = [];

onload();

function onload(){

    // In the first file, when adding items

let garageItemStr = localStorage.getItem('garageItemArray');
garageItemArray = garageItemStr ? JSON.parse(garageItemStr) : [];

    
  //  let garageItemStr = localStorage.getItem('garageItemArray');
  //  garageItemArray = garageItemStr ? JSON.parse(garageItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
};

function addToGarage(id) {
    garageItemArray.push(id);
    console.log('Item added:', id);
    console.log('Updated garageItemArray:', garageItemArray);
    displayBagIcon();
    localStorage.setItem('garageItemArray', JSON.stringify(garageItemArray));
    console.log(garageItemArray);
}


function displayBagIcon(){
    let garageItemcount = document.querySelector('.buyCarCount');
    if(garageItemArray.length > 0){
  
        garageItemcount.innerText = garageItemArray.length;
        console.log(garageItemArray.length)
    } 
}

function displayItemsOnHomePage(){
    let innerHTML ='';
    items.forEach(item => {
        innerHTML += `<div class="car1 car">
        <h3 class="carHeading" >${item.item_name}</h3>
        <div class="carImgContainer"><img class="carimg" src="${item.image}" alt=""></div>
        <div class="carfunction">
        <span class="carDetails">price: ${item.price}Rs</span>
        <button class="bookNow" onclick="addToGarage(${item.id})" >book now</button>
    </div>
    </div>`
    })

    carShopItem.innerHTML = innerHTML;
}

// export default displayItemsOnHomePage;