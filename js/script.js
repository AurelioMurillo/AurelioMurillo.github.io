


$( document ).ready(function() {
    var text = ["Te perdono si tu me perdonas...", "Mañana será un nuevo día...", "Te amo infinitamente...", "Mi chichicho...","5 minutos...","Un día menos para vernos...", "Te cielo...","El amor de mi vida y para mi vida...","Te extraño tanto...","Solo estamos a 80 km de distancia...", "Me haces tanta falta..."];
    var counter = 0;
    var elem = document.getElementById("quote");
    var inst = setInterval(change, 4000);

    function change() {
        elem.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) {
          counter = 0;
        }
      }
      
      function newQuote(){
        var randomNumber = Math.floor(Math.random() * (text.length));
        document.getElementById('quote').innerHTML = text[randomNumber];
        
      }

    newQuote();
});