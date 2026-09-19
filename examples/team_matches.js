// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const teamId = 'esa748l653sss1wurz5ps3228';

(async () => {
    try {
        const result = await client.teamMatches(teamId, null, 'en');
        for (const match of result.data.matches) {
            const score = (match.home.score !== null && match.away.score !== null)
                ? match.home.score + '-' + match.away.score
                : 'vs';
            console.log(match.date + ' ' + match.home.name + ' ' + score + ' ' + match.away.name + ' [' + match.league.name + ']');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
