import './css/styles.css';

const DEBOUNCE_DELAY = 300;
import { fetchCountries } from "./js/fetchCountries";
import "./css/styles.css";

// function fetchCountries(name) {
// // const name = "sweden";
//     const BASE_URL ='https://restcountries.eu';
//     fetch(`${BASE_URL}/rest/v2/name/${name}`).then(response => { return response.json() }).then(country => { console.log(country) }).catch(error => { console.log(error)});
// }
// fetchCountries('sweden');