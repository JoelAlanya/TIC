var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18) {
    greeting = "¡Buenas noches!";
} else if (hourNow >= 12) {
    greeting = "¡Buenas tardes!";
} else {
    greeting = "¡Buenos días!";
}
document.write("<h4>" + greeting + "</h4>");
