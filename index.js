



let user1 = ["Luis Chavez", "luischavez94@gmail.com", "LL12345", 500]
let user2 = ["Anya Forger", "anyaforger22@gmail.com", "AA56789", 300]
let user3 = ["Eren Jeager", "erenjeager18@gmail.com", "EE98765", 750]

let users = [user1, user2, user3];
let userValido;


function login() {
    let cliente = document.getElementById("email").value;
    let contra = document.getElementById("password").value;
    
    userValido = users.find((email) => (email[1] == cliente))
    console.log(userValido);
    if (userValido != undefined) {
    if (userValido[2] == contra) {
        let login = document.getElementById("divlogin")
        login.className = "divloginOculto"
        let divBanca = document.getElementById("banca")
        divBanca.className = "showBanca";
        document.getElementById("welcome").innerText = "Welcome to the online bank MMA " + userValido[0]; 
        balanceActual = parseFloat( document.getElementById("balance").innerText = userValido[3]);
    } else {
        document.getElementById("error").textContent = "error intenta nuevamente"
    }
}else {
    document.getElementById("error").textContent = "error el correo es invalido"
}
}

let balanceEtiqueta = document.getElementById("balance");
    balanceEtiqueta.innerText = balanceActual;

function depositar() {
    let monto = parseFloat(document.getElementById("depositar").value)
    if ((monto+balanceActual) > 990) {
        mostrarError("Su cuenta no puede contener mas de $990 pesos")
    } else {
        parseFloat( balanceActual += monto);
        balanceEtiqueta.innerText = balanceActual;
    }
}

function retirar() {
    let monto = parseFloat(document.getElementById("retirar").value)
    if(monto>=balanceActual){
        mostrarError("No es posible retirar la cantiad revise su cuenta y debe dejar una base de almenos 10 pesos")
    } else if ((balanceActual-monto) < 10){
        mostrarError("Su cuenta debe conservar al menos 10 pesos")
    } else {
    balanceActual -= monto;
    balanceEtiqueta.innerText = balanceActual;
    }
}

function mostrarError(mensaje) {
    alert(mensaje)
}
