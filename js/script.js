
const sustituciones = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Función para encriptar un mensaje
function encriptarMensaje(texto) {
    let mensajeEncriptado = texto;

    for (const sustitucion of sustituciones) {
        const letraOriginal = sustitucion[0];
        const letraEncriptada = sustitucion[1];

        const regex = new RegExp(letraOriginal, 'g');
        mensajeEncriptado = mensajeEncriptado.replace(regex, letraEncriptada);
    }

    return mensajeEncriptado;
}

// Evento click para encriptar
document.getElementById("encriptar").addEventListener("click", function () {
    const textoOriginal = document.getElementById("cajaTexto").value;
    const mensajeEncriptado = encriptarMensaje(textoOriginal);
    document.getElementById("").textContent = "";
    document.getElementById("mensajeEncriptado").textContent = mensajeEncriptado;
    
});


