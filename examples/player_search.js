// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.playerSearch('Osimhen', 'en');
        for (const player of result.data.players) {
            console.log(player.id + ' - ' + player.name + ' (' + player.country + ')');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
