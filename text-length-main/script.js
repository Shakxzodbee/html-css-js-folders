var Myid = document.getElementById("my-text");

var result = document.getElementById("result");

var limit = 60;

result.textContent = 0 + "/" + limit;

Myid.addEventListener("input", function(){
    var textlength = Myid.value.length;

    result.textContent = textlength + "/" + limit;

    if(textlength > limit){
        Myid.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
        alert("cheklangan qiymatdan oshib ketdi");
    }

    else{
        Myid.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
})