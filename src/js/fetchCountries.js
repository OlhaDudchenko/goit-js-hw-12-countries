


export function fetchCountries(name) {
    const BASE_URL ='https://restcountries.eu';
    fetch(`${BASE_URL}/rest/v2/name/${name}`).then(response=>response.json().name).then(data => {
  console.log(data)
  })
  .catch(error => {
  console.log(error)
  });
}
  
// function filterResponse(service,fields) {
//   // https://restcountries.eu/rest/v2/{service}?fields={field};{field};{field}
//   // https://restcountries.eu/rest/v2/all?fields=name;capital;currencies
//   const fields = [name,capital,population,flag,languages]
//   const service = all;
//   fetch(`${BASE_URL}/rest/v2/name/${service}?${fields}=${field};${field};${field}`).then(data => {
//   console.log(data)
//   })
//   .catch(error => {
//   console.log(error)
//   });
// }