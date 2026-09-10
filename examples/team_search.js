// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.teamSearch('Galatasaray', 'en');
        for (const team of result.data.teams) {
            console.log(team.id + ' - ' + team.name + ' (' + team.country + ')');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
