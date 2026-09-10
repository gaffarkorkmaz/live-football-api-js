// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const matchId = '5ahxi4l9k8fkbj3n2r6hgdmac';

(async () => {
    try {
        const result = await client.lineups(matchId, 'en');
        console.log('Home formation: ' + result.data.formation.home);
        console.log('Away formation: ' + result.data.formation.away);
        for (const player of result.data.home.starting) {
            console.log(player.name);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
