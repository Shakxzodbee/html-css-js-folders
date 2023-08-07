function telltime() {
    var out = "";
    var now = new Date();
    out += "<br />kun: " + now.getDate();
    out += "<br />oy: " + now.getMonth();
    out += "<br />yil: " + now.getFullYear();
    out += "<br />soat: " + now.getHours();
    out += "<br />minut: " + now.getMinutes();
    out += "<br />sekund: " + now.getSeconds();
    document.getElementById("vaqt").innerHTML = out;
}

telltime();