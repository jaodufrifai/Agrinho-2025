function toggleSenha() {
    var senhaInput = document.getElementById("senhaTexto");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
}

document.getElementById("toggleSenha").addEventListener("click", function() {
    var senhaInput = document.getElementById("senha");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
})