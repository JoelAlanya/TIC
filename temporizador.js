var duracion = 300; // 5 minutos
var finSesion = Number(sessionStorage.getItem("finSesion"));

if (!finSesion) {
    finSesion = Date.now() + duracion * 1000;
    sessionStorage.setItem("finSesion", finSesion);
}

function temporizador() {
    var tiempo = Math.max(0, Math.ceil((finSesion - Date.now()) / 1000));
    var minutos = Math.floor(tiempo / 60);
    var segundos = tiempo % 60;

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("temporizador").textContent =
        minutos + ":" + segundos;

    if (tiempo === 0) {
        cerrarSesion();
    }
}

function cerrarSesion() {
    sessionStorage.removeItem("finSesion");
    window.location.replace("../../Inicio/Pagina.html");
}

temporizador();
setInterval(temporizador, 1000);
