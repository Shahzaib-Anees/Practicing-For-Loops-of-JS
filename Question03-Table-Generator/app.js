let user_input_num = +prompt("Enter a number to show its Multilplication Table");
for(var a = 1 ; a < 16 ; a++){
    document.write(`<div class="card">
    <p>${user_input_num}  x ${a}  =  ${user_input_num * a}</p>
    </div>`);
}