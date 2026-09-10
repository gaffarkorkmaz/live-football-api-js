// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const matchId = '5ahxi4l9k8fkbj3n2r6hgdmac';

(async () => {
    try {
        const result = await client.h2h(matchId, 'en');
        console.log('Previous meetings: ' + result.data.h2h.length);
        for (const match of result.data.home_form) {
            console.log(match.date + ' ' + match.home.name + ' vs ' + match.away.name + ' (' + match.score + ')');
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
