function lowerCaseName(string) {
    return string.toLowerCase();
  }


const getPokemon = () =>{
    const name = document.getElementById("pokemonName").value;
    constpokemonName = lowerCaseName(name);
 fetch('https://pokeapi.co/api/v2/pokemon/${name}')
 .then((response)=> response.json())
 .then((data)=>
  {
document.querySelector.(".pokemonBox").innerHTML =
 `
   <div>
        <img 
        scr="${data.sprites.other["official-artwork"].front_default}"
        alt = "pokemeName"
        />
    </div>
    <div class="pokemonInfos">
    <h1>${capitalizeFirstLetter(data.name)}</h1>
    <p>can nang:${data.weight}</p>

    </div>
     
    `;


 }
 )
 .catch((err) => {
    document.querySelector(".pokemonBox").innerHTML =
    `<h4> khong tim thay pokemon </h4>`;
 })
}