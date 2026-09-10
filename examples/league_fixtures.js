// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const leagueId = '482ofyysbdbeoxauk19yg7tdt';

(async () => {
    try {
        const result = await client.leagueFixtures(leagueId, null, '1', 'en');
        for (const week of result.data.weeks) {
            console.log('Week ' + week.week + ':');
            for (const match of week.matches) {
                console.log('- ' + match.home.name + ' ' + match.home.score + '-' + match.away.score + ' ' + match.away.name);
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
