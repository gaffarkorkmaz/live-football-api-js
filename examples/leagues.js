// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.leagues('en');
        console.log('Countries covered: ' + result.data.total_countries);
        const firstCountry = result.data.data[0];
        console.log(firstCountry.country + ':');
        for (const league of firstCountry.leagues) {
            console.log('- ' + league.name + ' (' + league.id + ')');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
