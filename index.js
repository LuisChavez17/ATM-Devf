



let user1 = ["Luis Chavez", "luischavez94@gmail.com", "LL12345", 5000]
let user2 = ["Anya Forger", "anyaforger22@gmail.com", "AA56789", 3000]
let user3 = ["Eren Jeager", "erenjeager18@gmail.com", "EE98765", 7500]

let users = [user1, user2, user3];
let userValido;
let balanceActual;

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
        document.getElementById("welcome").innerText = "Welcome to the online bank " + userValido[0]; 
        document.getElementById("balance").innerText = userValido[3];
    } else {
        document.getElementById("error").textContent = "error intenta nuevamente"
    }
}else {
    document.getElementById("error").textContent = "error el correo es invalido"
}
}


function depositar() {
    let balanceEtiqueta = document.getElementById("balance");
    balanceActual = parseFloat(userValido[3]);
    balanceEtiqueta.innerText = balanceActual;
    
    let monto = parseFloat(document.getElementById("depositar").value)
    if ((monto+balanceActual) > 9990) {
        mostrarError("Su cuenta no puede contener mas de $9990 pesos")
    } else {
        parseFloat( balanceActual += monto);
        balanceEtiqueta.innerText = balanceActual;
    }
}

function retirar() {
    let balanceEtiqueta = document.getElementById("balance");
    let balanceActual = parseFloat(userValido[3]);
    balanceEtiqueta.innerText = balanceActual;
    
    let monto = parseFloat(document.getElementById("retirar").value)
    if(monto>=balanceActual){
        mostrarError("No es posible retirar la cantiad revise su cuenta")
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
