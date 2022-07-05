class Character {
  // No se si me falto algo mas para protejer las variables, tengo esa duda.
  constructor(name, species, image) {
    this.name = name;
    this.species = species;
    this.image = image;
  }

  getName (){
    return this.name;
  }

  getSpecies (){
    return this.species;
  }

  getImage() {
    return this.image;
  }

  show(name,species,image) { 
    return '<div>'
            +'<h1>'+name+'</h1>'
            +'<h2>'+species+'</h2>'
            +'<img src='+image+' />' 
          +'</div>';
  }
}

let container0 = document.createElement("span");
document.body.appendChild(container0);

let div = document.getElementsByTagName("span")[0];
div.id = "container"; 

document.addEventListener("DOMContentLoaded", () => {
  getCharacters();
});

const getCharacters = async () => {
  try {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const data = await request.json();
    let resultWeb = '';
    data.results.forEach((element) => {
      let character = new Character(
        element.name,
        element.species,
        element.image
      );
      resultWeb = resultWeb + character.show(character.getName(),character.getSpecies(),character.getImage());
    });
    
    document.getElementById("container").innerHTML = resultWeb;
  } catch (error) {
    console.log(error);
  }
};