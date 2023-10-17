// fetch.js
let pokemonList = document.getElementById('outputList')

const urlList = "https://pokeapi.co/api/v2/pokemon";

const results = null;

async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuffList(data) {
    console.log(data);
    const pokeList = data.results;
    pokeList.forEach(pokemon => {
        const html = `<li data-url='${pokemon.url}'>${pokemon.name}</li>`
        document.getElementById('outputList').innerHTML += html;
    });
}



getPokemonList(urlList);
console.log("second: ", results);

