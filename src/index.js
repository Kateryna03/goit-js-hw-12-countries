import './sass/main.scss';
import fetchCountries from './fetchCountries.js';
import countriesList from './templation/countries-list.hbs';
import countryCard from './templation/country-card.hbs';
import { data } from 'browserslist';
const refCountrySearch = document.querySelector('.country-search');
const refCountriesList = document.querySelector('.countries-list');
const refCountryInfo = document.querySelector('body > div > div');

var debounce = require('lodash.debounce');
refCountrySearch.addEventListener('input', debounce(onSearchCountry, 500));

function onSearchCountry(e) {
  const search = e.target.value;
  refCountrySearch.innerHTML = '';
  fetchCountries(search).then(data => {
    if (data.length > 10) {
      console.log('Too many matches found. Please enter a more specific query!');
    } else if (data.length === 1) {
      refCountriesList.innerHTML = '';
      refCountryInfo.innerHTML = '';
      fetchCountries(search)
        .then(onRenderCountryCard)
        .catch(error => console.log(error));
      //console.log(search);
    } else if (2 <= data.length <= 10) {
      refCountriesList.innerHTML = '';
      refCountryInfo.innerHTML = '';
      fetchCountries(search)
        .then(onRenderCountryList)
        .catch(error => console.log(error));
      //.finally(() => (search = ''));
    }
  });
}

function onRenderCountryList(search) {
  const markup = countriesList(search);
  refCountriesList.insertAdjacentHTML('beforeend', markup);
}

function onRenderCountryCard(search) {
  const markup = countryCard(search);
  refCountryInfo.insertAdjacentHTML('afterbegin', markup);
}
