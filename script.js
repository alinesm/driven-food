let meal;
let drink;
let dessert;

let priceMeal;
let priceDrink;
let priceDessert;

const Options = document.querySelectorAll(".option")
Options.forEach((op) => {
  op.addEventListener("click", select) 
})

function select(event) {
  const category = event.target.offsetParent.classList[1];  
  const parentDivId = event.target.offsetParent.id;

  if(category === "food") {
    Options.forEach((element) => {
      element.classList.contains("food") && element.classList.remove("active");  
      addActive(parentDivId, "food")
    
    })
  //  meal =  document.querySelector(".food h4").innerHTML
   meal =  document.getElementById(parentDivId).getElementsByTagName("h4")[0].innerHTML
   priceMeal = document.getElementById(parentDivId).getElementsByTagName("h5")[0].innerHTML
   priceMealNumber = Number(priceMeal.replace(",", ".").split('').slice(3,).join("")) 
  }

  if(category === "drink") {
    Options.forEach((element) => {
      element.classList.contains("drink") && element.classList.remove("active");  
      addActive(parentDivId)
      
    })
   drink =  document.getElementById(parentDivId).getElementsByTagName("h4")[0].innerHTML
   priceDrink =  document.getElementById(parentDivId).getElementsByTagName("h5")[0].innerHTML
   priceDrinkNumber = Number(priceDrink.replace(",", ".").split('').slice(3,).join(""))
  }

  if(category === "dessert") {
    Options.forEach((element) => {
      element.classList.contains("dessert") && element.classList.remove("active");  
      addActive(parentDivId)
    
    })
  dessert =  document.getElementById(parentDivId).getElementsByTagName("h4")[0].innerHTML
  priceDessert =  document.getElementById(parentDivId).getElementsByTagName("h5")[0].innerHTML
  priceDessertNumber = Number(priceDessert.replace(",", ".").split('').slice(3,).join(""))     
}

  addActive(parentDivId)

  openForCheckout();
}

function addActive (op) {
  // console.log(meal)
  document.getElementById(op).classList.add('active')
}

function openForCheckout() {
  const actives = document.querySelectorAll(".active");
  let button = document.getElementById("buttonCheckout")

    if(actives.length === 3) {
        button.classList.add("checkout-available")
        button.innerHTML = "Fechar pedido"
    }  
}

function checkout() {
  let message;
  let total = priceMealNumber + priceDrinkNumber + priceDessertNumber

  message = "Olá, gostaria de fazer o pedido: \n - Prato: " + meal 
  + "\n - Bebida: " + drink 
  + "\n - Sobremesa: " + dessert 
  + "\n Total: R$ " + total.toFixed(2);
  console.log(message)

  messageEncoded = window.encodeURIComponent(message); 

  window.open("https://wa.me/5585981828613?text=" + messageEncoded)
}



