let meal;
let drink;
let dessert;

let priceMeal;
let priceDrink;
let priceDessert;

const Options = document.querySelectorAll(".option");
Options.forEach((op) => {
  op.addEventListener("click", select); 
})

function select(event) {
  const parent = event.target.offsetParent.localName;
  let category;
  let cardId;

  if(parent === "body") {
    category = event.target.classList[1]
    cardId = event.target.id;
  } else {
    category = event.target.offsetParent.classList[1];  
    cardId = event.target.offsetParent.id;
  }
 
  if(category === "food") {
    Options.forEach((element) => {
     element.classList.contains("food") && element.classList.remove("active");      
      addActive(cardId);      
    })       
   meal =  document.getElementById(cardId).getElementsByTagName("h4")[0].innerHTML;
   priceMeal = document.getElementById(cardId).getElementsByTagName("h5")[0].innerHTML;
   priceMealNumber = Number(priceMeal.replace(",", ".").split('').slice(3,).join("")); 
  }

  if(category === "drink") {
    Options.forEach((element) => {
      element.classList.contains("drink") && element.classList.remove("active");  
      addActive(cardId);      
    })
   drink =  document.getElementById(cardId).getElementsByTagName("h4")[0].innerHTML;
   priceDrink =  document.getElementById(cardId).getElementsByTagName("h5")[0].innerHTML;
   priceDrinkNumber = Number(priceDrink.replace(",", ".").split('').slice(3,).join(""));
  }

  if(category === "dessert") {
    Options.forEach((element) => {
      element.classList.contains("dessert") && element.classList.remove("active");  
      addActive(cardId)
    
    })
  dessert =  document.getElementById(cardId).getElementsByTagName("h4")[0].innerHTML;
  priceDessert =  document.getElementById(cardId).getElementsByTagName("h5")[0].innerHTML;
  priceDessertNumber = Number(priceDessert.replace(",", ".").split('').slice(3,).join(""));    
}

  addActive(cardId);

  openForCheckout();
}

function addActive (op) {
   document.getElementById(op).classList.add('active');
}

function openForCheckout() {
  const actives = document.querySelectorAll(".active");
  let button = document.getElementById("buttonCheckout");
    if(actives.length === 3) {
        button.classList.add("checkout-available");
        button.innerHTML = "Fechar pedido";
    }  
}

let container = document.querySelector(".containerModal")

function openModal() {
  document.querySelector(".mealModal").children[0].innerHTML = meal
  document.querySelector(".mealModal").children[1].innerHTML = priceMealNumber.toFixed(2)
  
  document.querySelector(".drinkModal").children[0].innerHTML = drink
  document.querySelector(".drinkModal").children[1].innerHTML = priceDrinkNumber.toFixed(2)
  
  document.querySelector(".dessertModal").children[0].innerHTML = dessert
  document.querySelector(".dessertModal").children[1].innerHTML = priceDessertNumber.toFixed(2)

  document.querySelector(".totalModal").children[1].innerHTML = (priceMealNumber + priceDrinkNumber + priceDessertNumber).toFixed(2)
  
  container.classList.add("openContainerModal")
}

function goWhatsapp() {  
  let message;
  let total = priceMealNumber + priceDrinkNumber + priceDessertNumber;

  message = "Olá, gostaria de fazer o pedido: \n - Prato: " + meal 
  + "\n - Bebida: " + drink 
  + "\n - Sobremesa: " + dessert 
  + "\n Total: R$ " + total.toFixed(2);

  messageEncoded = window.encodeURIComponent(message); 

  window.open("https://wa.me/5585981828613?text=" + messageEncoded);
}

function closeModal(){
  container.classList.remove("openContainerModal")
}


