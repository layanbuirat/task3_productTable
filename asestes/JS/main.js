document.addEventListener("DOMContentLoaded", function() {
var registerform = document.querySelector(".registerform");
var nameInput = document.querySelector("#name");
var descreptionInput = document.querySelector("#descreption");
var priceInput = document.querySelector("#price");
var products = [];
registerform.onsubmit = function (e) {
    e.preventDefault();
    var product = {
        name: nameInput.value,
        descreption: descreptionInput.value,
        price: priceInput.value
    };
    products.push(product);
    console.log(products);
    printData();
}

function printData() {
    
    var data = ``;
    for (var count = 0; count < products.length; count++) {
        data += ` 
        <tr>
        <td>${products[count].name}</td>
        <td>${products[count].descreption}</td>
        <td>${products[count].price}</td>
        </tr>
        `
            ;

    }
    document.querySelector("tbody").innerHTML = data;
}

});
