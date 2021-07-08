export function fetchCountries(name) {
    const BASE_URL ='https://restcountries.eu';
    fetch(`${BASE_URL}/rest/v2/name/${name}`).then(data => { console.log(data)});
}
  fetchCountries('sweden')