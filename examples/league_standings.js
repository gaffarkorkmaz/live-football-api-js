// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const leagueId = '482ofyysbdbeoxauk19yg7tdt';

(async () => {
    try {
        const result = await client.leagueStandings(leagueId, null, 'en');
        for (const group of result.data.standings) {
            console.log(group.title);
            for (const row of group.table) {
                console.log(row.rank + '. ' + row.team.name + ' - ' + row.points + ' pts');
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
