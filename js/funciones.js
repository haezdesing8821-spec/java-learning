/* ================================
    MODO OSCURO / MODO CLARO
   ================================ */

// Referencia al botón
const btnModoOscuro = document.getElementById("modoOscuroBtn");

// Al cargar la página, revisamos si el usuario tenía un modo guardado
document.addEventListener("DOMContentLoaded", () => {
    const modoGuardado = localStorage.getItem("modo");

    if (modoGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");
        btnModoOscuro.textContent = "☀️ Modo Claro";
    }
});

// Evento para cambiar entre claro/oscuro
btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    // Guardamos preferencia
    if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo", "oscuro");
        btnModoOscuro.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("modo", "claro");
        btnModoOscuro.textContent = "🌙 Modo Oscuro";
    }
});


/* ================================
    SCROLL SUAVE MEJORADO
   ================================ */

// Seleccionamos todos los enlaces del menú lateral
const enlacesMenu = document.querySelectorAll(".menu a");

// Agregamos scroll animado
enlacesMenu.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault();

        const destino = document.querySelector(enlace.getAttribute("href"));

        // Animación suave
        window.scrollTo({
            top: destino.offsetTop - 10,
            behavior: "smooth"
        });
    });
});
