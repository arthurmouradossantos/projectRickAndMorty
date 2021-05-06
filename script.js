const button = document.querySelector("button");
const inputCharacters = document.querySelector(".formulario");
const main = document.querySelector(".principal__div");
const imageCharacters = document.createElement("img");
const nameCharacters = document.createElement("h2");
const nameSpecies = document.createElement("p");


button.addEventListener("click", (event)=>{
event.preventDefault();
resopnseApi ();

})


function resopnseApi (){
  axios.get("https://rickandmortyapi.com/api/character")
  .then((response)=>{
    const valueCharacters = inputCharacters.value;
    const listCharacters = response.data.results;
    const findCharacters = listCharacters.find(function(characters){

      return characters.name === `${valueCharacters}`;
    })

    const newParagraph = document.createTextNode(findCharacters.name)
const newText = document.createTextNode(findCharacters.species)
    
    imageCharacters.setAttribute("src", `${findCharacters.image}`);
    imageCharacters.setAttribute("alt", "foto do personagem");
    imageCharacters.classList.add("foto");
    nameCharacters.classList.add("personagem");
    nameSpecies.classList.add("species");
    
    emptyName();
    nameCharacters.appendChild(newParagraph)
    nameSpecies.appendChild(newText)

    const listCharactersInformation = [imageCharacters,nameCharacters, nameSpecies]

    for (let i= 0; i < listCharactersInformation.length; i++){
    main.appendChild(listCharactersInformation[i]);
  }
  
  })
  .catch((error)=> {console.log(error)})
}


function emptyName(){

  nameCharacters.innerText=""
  nameSpecies.innerText=""
}