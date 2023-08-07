    // funcsiya yaratilgan 
function traffictimes () {
    // htmldan ID lar caqiilgan //
    let green =document.getElementById("green"),
     red =document.getElementById("red"),
     yellow =document.getElementById("yellow");
    ////////////////////////////////





    green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },4000);



    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },6000);




    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },9000);
}


  // bu funksiya davoomiylik muddatini belgilayapti 
let Times = setInterval(function () {
    traffictimes();
},10000);
  //

  
traffictimes();