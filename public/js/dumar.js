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
