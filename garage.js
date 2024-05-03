let garageItemObject;
console.log(garageItemArray);
console.log("hjkfdsjhk");


document.addEventListener('DOMContentLoaded', function () {
  onLoad();
});


async function onLoad() {
  let garageItemStr = localStorage.getItem('garageItemArray');
  garageItemArray = garageItemStr ? JSON.parse(garageItemStr) : [];

  garageItemArray = garageItemStr ? JSON.parse(garageItemStr) : [];
  console.log('Garage items loaded:', garageItemArray);
  loadBagItemObjects();
  displayGargeItems();
  displayBagIcon();
}


// function onLoad(){
//   // In the second file, when retrieving items
// let garageItemStr = localStorage.getItem('garageItemArray');

//  // let garageItemStr = localStorage.getItem('garageItemArray');
//   garageItemArray = garageItemStr ? JSON.parse(garageItemStr) : [];
//   console.log(garageItemArray); 
//    loadBagItemObjects();
//     displayGargeItems();
// }

function loadBagItemObjects() {
   console.log(garageItemArray);
    garageItemObject = garageItemArray.map(itemId => {
      
      console.log(garageItemObject);
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(garageItemObject);
  }


  function removeFromGarageList(itemId){
      garageItemArray = garageItemArray.filter(garageItemId => garageItemId != itemId);
      localStorage.setItem('garageItemArray', JSON.stringify(garageItemArray));
      loadBagItemObjects();
      displayGargeItems();
      displayBagIcon();
  }



  function displayGargeItems() {
    let containerElement = document.querySelector('.garage-list-container');
    let innerHTML = ''; // Initialize innerHTML as an empty string

    garageItemObject.forEach(garageCar => {
        innerHTML += generateCarHTML(garageCar);
    });

    containerElement.innerHTML = innerHTML;
}

  function generateCarHTML(itemId){
        return ` <div class="garage-item">
        <div class="garage-item-img">
            <img class="img-list-book" src="${itemId.image}" alt="">
        </div>
        <div class="garage-item-details">
            <div class="carName">Company Name :${itemId.item_name}</div>
            <div class="carId">Product Id : ${itemId.id}</div>
            <div class="carPrice">Price : ${itemId.price}Rs</div>
        </div>
        <div class="cross" onclick="removeFromGarageList(${itemId.id})">x</div>
    </div>`

  }