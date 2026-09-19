// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const teamId = 'esa748l653sss1wurz5ps3228';

(async () => {
    try {
        const result = await client.teamSquad(teamId, null, 'en');
        for (const player of result.data.squad) {
            console.log((player.number ?? '-') + ' ' + player.name + ' - ' + player.position);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
