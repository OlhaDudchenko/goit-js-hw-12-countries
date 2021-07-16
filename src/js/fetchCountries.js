
export const fetchCountries = (name) => {
  const BASE_URL = 'https://restcountries.eu';
  
  return fetch(`${BASE_URL}/rest/v2/name/${name}?fields=name;capital;population;flag;languages`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
  })
}