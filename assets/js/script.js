const imageSection = document.querySelector(".image-section");
let i = 0;
const castleOutput = function() {  
  imageSection.innerHTML += `
  <figcaption>    
    <h2>${castles[i].title}</h2>
    <a href="${castles[i].linkURL}"><h3>Picture taken by: ${castles[i].credit}</h2></a>
    <p>${castles[i].description}</p>
    <a href="${castles[i].creditURL}"><img src="assets/img/castle${castles[i].id}.jpg" alt="${castles[i].title}">
  </figcaption>`;
  i++;
}

castles.forEach(castleOutput);
