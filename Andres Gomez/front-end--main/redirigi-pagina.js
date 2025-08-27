document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Aquí podrías validar datos o guardarlos
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("Registrado:", nombre, email); // Para probar

    // Redirigir a otra página
    window.location.href = "index2.html"; // Cambia "bienvenido.html" por tu página destino
});
