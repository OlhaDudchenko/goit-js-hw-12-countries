import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
import { fetchCountries } from "./js/fetchCountries";
import "./css/styles.css";

// function fetchCountries(name) {
// // const name = "sweden";
//     const BASE_URL ='https://restcountries.eu';
//     fetch(`${BASE_URL}/rest/v2/name/${name}`).then(response => { return response.json() }).then(country => { console.log(country) }).catch(error => { console.log(error)});
// }
// fetchCountries('sweden');
const input = document.querySelector('[id="search-box"]');
console.log(input);
const countryList = document.querySelector(".country-list");
console.log(countryList);

input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

 export function onInput(evt) {
    console.log(evt.target.value)
    const name = evt.target.value;
    fetchCountries(name);
    countryList.textContent = name;



}


// console.log(name);