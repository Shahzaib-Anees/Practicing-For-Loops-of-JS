let bakeryItems = ["Cake","Apple Pie","Cookie","Chips","Patties"];
let userInputItem = prompt("Welcome to My Bakery! What do you want to order");
for(var a=0 ; a<bakeryItems.length ; a++){
    if(bakeryItems.includes(userInputItem)){
        document.write(`<div class="card">
        <p>${userInputItem} is <b>available</b> at ${bakeryItems.indexOf(userInputItem)}</p>
        </div>`);
        break;
    }else{
        document.write(`<div class="card">
        <p>${userInputItem} is <b>not available</b> in our Bakery</p>
        </div>`);
        break;
    }
}