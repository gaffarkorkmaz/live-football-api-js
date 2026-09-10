// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const playerId = '1wynwp4x95o9w5tt4cdog6i1';

(async () => {
    try {
        const result = await client.player(playerId, 'en');
        console.log(result.data.name);
        console.log('Position: ' + result.data.position);
        console.log('Nationality: ' + result.data.nationality);
        console.log('Current team: ' + result.data.current_team.name);
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
