const imageSection = document.querySelector(".image-section");
let i = 0;
const castleOutput = function() {  
  imageSection.innerHTML += `<img src="assets/img/castle${castles[i].id}.jpg" alt="${castles[i].title}">`;
  i++;
}

castles.forEach(castleOutput);
