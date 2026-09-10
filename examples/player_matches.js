// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const playerId = '1wynwp4x95o9w5tt4cdog6i1';

(async () => {
    try {
        const result = await client.playerMatches(playerId, null, null, 'en');
        for (const competition of result.data.competitions) {
            console.log(competition.league.name + ':');
            for (const match of competition.matches) {
                console.log('- ' + match.date + ' vs ' + match.opponent.name + ' (' + match.score + ') goals: ' + match.goals);
            }
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
