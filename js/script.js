

document.addEventListener("DOMContentLoaded", function() {
    const textMensaje = document.getElementById("cajaTexto");
    const btnEncriptar = document.getElementById("encriptar");
    const btnLimpiar = document.getElementById("limpiar");
            
    let encriptado = false;

    btnEncriptar.addEventListener("click", () => {
    let mensaje = textMensaje.value;

    if (encriptado) {
        textMensaje.value = atob(mensaje);
        btnEncriptar.textContent = "Encriptar";
    } else {
        textMensaje.value = btoa(mensaje);
        btnEncriptar.textContent = "Desencriptar";
    }

    encriptado = !encriptado;
});

    btnLimpiar.addEventListener("click", () => {
    textMensaje.value = "";
    });
});
   