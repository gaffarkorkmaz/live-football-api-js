// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const result = await client.matches(today, 'en');
        for (const match of result.data.matches) {
            console.log(match.home.name + ' vs ' + match.away.name + ' - ' + match.status.display);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
