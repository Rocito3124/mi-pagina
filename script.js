const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    const frases = [
        "Hola",
        "Ando intentando programar",
        "AYUDA!",
        "Funciono?"
    ];
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    mensaje.textContent = aleatoria;
});
