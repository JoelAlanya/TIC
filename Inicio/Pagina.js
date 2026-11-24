function ingresar() {
    var correo = document.getElementById("correo").value;
    var clave = document.getElementById("clave").value;
    var mensaje = document.getElementById("mensaje");

    if (correo == "2026015404@unfv.edu.pe" && clave == "123") {
        alert("¡Bienvenido al Portal del Estudiante!");
        window.location.href = "../Portal/Inicio Portal/Contenido.html";
    } else {
        mensaje.textContent = "Correo o contraseña incorrectos.";
    }
    return false;
}
