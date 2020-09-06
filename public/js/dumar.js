let mensaje = localStorage.getItem("mensajeLogin");
if (mensaje) {
    let div = document.getElementById("mensajeLogin");
    div.style.display = "block";
    div.innerText = mensaje;
    localStorage.removeItem("mensajeLogin");
}
//limpiar local storage
let perfil = localStorage.getItem("perfil");
if (perfil) {
    localStorage.removeItem("perfil");
}
let calendario = localStorage.getItem("calendario");
if (calendario) {
    localStorage.removeItem("calendario");
}
let quienesSomos = localStorage.getItem("quienesSomos");
if (quienesSomos) {
    localStorage.removeItem("quienesSomos");
}
let publicidad = localStorage.getItem("publicidad");
if (publicidad) {
    localStorage.removeItem("publicidad");
}
let investigador = localStorage.getItem("investigador");
if (investigador) {
    localStorage.removeItem("investigador");
}
let equipamiento = localStorage.getItem("equipamiento");
if (equipamiento) {
    localStorage.removeItem("equipamiento");
}
let documento = localStorage.getItem("documento");
if (documento) {
    localStorage.removeItem("documento");
}
let otraInfo = localStorage.getItem("otraInfo");
if (otraInfo) {
    localStorage.removeItem("otraInfo");
}
let imagenesLogin = localStorage.getItem("imagenesLogin");
if (imagenesLogin) {
    localStorage.removeItem("imagenesLogin");
}
let usuario = localStorage.getItem("usuario");
if (usuario) {
    localStorage.removeItem("usuario");
}
let cepas = localStorage.getItem("cepas");
if (cepas) {
    localStorage.removeItem("cepas");
}

function showPass() {
    var input = document.getElementById("passwordLogin");
    var icon = document.getElementById("iconLogin");
    if (input.type === "password") {
        input.type = "text";
        icon.className = "fas fa-eye";
    } else {
        input.type = "password";
        icon.className = "fas fa-eye-slash";
    }
}

function showPassConfirmation() {
    var input = document.getElementById("passwordLogin-confirmation");
    var icon = document.getElementById("iconLogin-confirmation");
    if (input.type === "password") {
        input.type = "text";
        icon.className = "fas fa-eye";
    } else {
        input.type = "password";
        icon.className = "fas fa-eye-slash";
    }
}
