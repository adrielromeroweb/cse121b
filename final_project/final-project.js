// ideas de proyecto: un generador random de países con su respectiva información. Algo muy básico.

// puede incluir un buscador del país y luego desplegar la información.

const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('search-button');
const countryName = document.getElementById('name');
const flag = document.getElementById('flag');
const countryCapital = document.getElementById('capital');
const countryPopulation = document.getElementById('population');
const langTitle = document.getElementById('lang-title');
const countryLanguages = document.getElementById('languages');


let countryList = [];

const displayCountry = () => {
    let country = capitalize(countryInput.value);

    countryList.forEach((list) => {
        if (list.name.common == country) {
            countryName.innerHTML = list.name.common;
            flag.setAttribute('src', list.flags.png);
            flag.setAttribute('alt', list.name.common);
            countryCapital.innerHTML = `Capital: ${list.capital}`;
            countryPopulation.innerHTML = `Population: ${list.population}`;
            langTitle.innerHTML = 'Languaje:'
            countryLanguages.innerHTML = '';
            Object.values(list.languages).forEach((lang) => {
                countryLanguages.innerHTML += `<li>${lang}</li>`;
            })
            console.log(Object.values(list.languages));
        }
    })
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}


const getCountrys = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.ok) {
        countryList = await response.json();
        console.log(countryList);
    }
}

getCountrys();

searchButton.addEventListener('click', displayCountry);