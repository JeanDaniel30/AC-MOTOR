const fetch = require('node-fetch');

const url = 'https://api-plaque-immatriculation-siv.p.rapidapi.com/get-vehicule-info?token=TokenDemoRapidapi&host_name=https%3A%2F%2Fapiplaqueimmatriculation.com&immatriculation=AA-123-BC';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '6dc3e8cb6bmsh8a346921b9c4c64p1f94dcjsn384636e252de',
    'x-rapidapi-host': 'api-plaque-immatriculation-siv.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}