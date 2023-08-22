/* Caja principal de encriptador */
const mensajeResultado = document.querySelector('.resultado');
const areaTexto = document.querySelector(".cajaTexto--encriptador")
const leyenda = document.querySelector('.resultado--parrafo');

/* Botones */
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnPegar = document.getElementById('pegar');
const btnLimpiar = document.getElementById('limpiar');


/* Llaves Desencriptador */
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


/* Función para encriptar un mensaje */
function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
        if (letra === "e") {
            mensajeEncriptado += "enter";
        } else if (letra === "i") {
            mensajeEncriptado += "imes";
        } else if (letra === "a") {
            mensajeEncriptado += "ai";
        } else if (letra === "o") {
            mensajeEncriptado += "ober";
        } else if (letra === "u") {
            mensajeEncriptado += "ufat";
        } else {
            mensajeEncriptado += letra;
        }
    }
    return mensajeEncriptado;
};

