function main() {

  //Bal menü
  var games = document.getElementById("games");
  var misc = document.getElementById("misc");
  var about = document.getElementById("about");
  var back = document.getElementById("back");

  //Kép és jobb <div>ek
  var kep = document.getElementById("kep");
  var gamesJobb = document.getElementById("gamesJobb");
  var miscJobb = document.getElementById("miscJobb");
  var aboutJobb = document.getElementById("aboutJobb");

  //Kép és jobb <div>ek eltüntetése/megjelenítése
  games.addEventListener("click", function(){
    kep.style.display = "none";
    miscJobb.style.display = "none";
    aboutJobb.style.display = "none";

    gamesJobb.style.display = "block"
  });

  misc.addEventListener("click", function(){
    gamesJobb.style.display = "none";
    aboutJobb.style.display = "none";
    
    miscJobb.style.display = "block"
  });

  about.addEventListener("click", function(){
    kep.style.display = "none";
    gamesJobb.style.display = "none";
    miscJobb.style.display = "none";

    aboutJobb.style.display = "block"
  });

  back.addEventListener("click", function(){
  kep.style.display = "block";
  });
  //Eletüntet/megjelenít vége
}

/*Copyright 2015 Benedek Tomasik*/