let button = document.getElementById("submit");
let name = document.getElementById ("fullname");
let email = document.getElementById ("email");
let emailHTML = document.getElementById("result-email");
let fullnameHTML = document.getElementById("result-fullname");

function calculatePrice(e) {
    e.preventDefault();
    console.log('Funkcija sako "Labas"');
    
    
    emailHTML.innerHTML = email.value;
    fullnameHTML.innerHTML = fullname.value;
}

button.addEventListener("click", calculatePrice);