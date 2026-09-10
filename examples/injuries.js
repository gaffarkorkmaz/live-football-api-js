// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const matchId = '5ahxi4l9k8fkbj3n2r6hgdmac';

(async () => {
    try {
        const result = await client.injuries(matchId, 'en');
        console.log('Home team:');
        for (const player of result.data.injuries.home) {
            console.log('- ' + player.name + ' (' + player.status + ')');
        }
        console.log('Away team:');
        for (const player of result.data.injuries.away) {
            console.log('- ' + player.name + ' (' + player.status + ')');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
