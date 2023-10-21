// idea project: a basic program that allows to enter a country name and received information about that country

// variables with dom information

const countryInput = document.getElementById('country-input');
const searchButton = document.getElementById('search-button');
const countryName = document.getElementById('name');
const flag = document.getElementById('flag');
const countryCapital = document.getElementById('capital');
const countryPopulation = document.getElementById('population');
const langTitle = document.getElementById('lang-title');
const countryLanguages = document.getElementById('languages');

// empty variable for the entire country list

let countryList = [];

/* the displayCountry function will compare the country input with every object element in the countryList list
to found the correct one and output the information */

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

// a simple function to capitalize the country name

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

// the getCountrys function will gives us all the information from the api

const getCountrys = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (response.ok) {
        countryList = await response.json();
        console.log(countryList);
    }
}

getCountrys();

// add an event listener for the search button

searchButton.addEventListener('click', displayCountry);