'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
//*************************************TODO:Our First AJAX Call_ XMLHttpRequest*********************************
// Old way to make ajax call
const getCountryData = function (country, curr) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const currency = Object.values(data.currencies); //The Object.values() method returns an array of a given object's own enumerable property values.
    // console.log(currency);
    const language = Object.values(data.languages);
    // console.log (language);
    const html = `  
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 100000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${language[0]}</p>
    <p class="country__row"><span>💰</span>${currency[0].name}</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bangladesh');
getCountryData('usa');
getCountryData('portugal');
getCountryData('nepal');
*/

//*************************************TODO:Welcome to Callback Hell*********************************
const renderCountry = function (data, currency, language) {
  const html = `  
  <article class="country">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 100000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${language[0]}</p>
    <p class="country__row"><span>💰</span>${currency[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  //Ajax call for country
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const currency = Object.values(data.currencies); //The Object.values() method returns an array of a given object's own enumerable property values.
    // console.log(currency);
    const language = Object.values(data.languages);
    // console.log (language);

    //Render Country
    renderCountry(data, currency, language);

    // Get neighbour country
    const neighbour = data.borders;
    if (!neighbour) return;
    // console.log(neighbour);

    // Ajax call for neighbour
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText);
    });
  });
};

getCountryAndNeighbour('bangladesh');
