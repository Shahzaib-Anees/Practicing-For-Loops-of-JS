let fruits = ["Apple" , "Banana" , "Mango" , "Orange", "Stawberry"];
document.write(`<h3>Array Items</h3>`)  
for(var i = 0 ; i < fruits.length ; i++){
    document.write(`<p>${fruits[i]}</p>`);
}

for(var a = 0 ; a < fruits.length ; a++){
    document.write(`<div class="card">
    <p>Element at index ${a} is ${fruits[a]}</p>
    </div>`);
}