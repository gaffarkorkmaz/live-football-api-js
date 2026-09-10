// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const teamId = 'esa748l653sss1wurz5ps3228';

(async () => {
    try {
        const result = await client.teamStandings(teamId, null, 'en');
        for (const group of result.data.standings) {
            for (const row of group.table) {
                if (row.team.id === teamId) {
                    console.log(row.team.name + ' is rank ' + row.rank + ' with ' + row.points + ' points in ' + group.league);
                }
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
