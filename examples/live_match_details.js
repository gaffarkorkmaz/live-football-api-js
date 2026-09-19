// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const matchId = '5ahxi4l9k8fkbj3n2r6hgdmac';

(async () => {
    try {
        const result = await client.liveMatchDetails(matchId, 'en');
        const header = result.data.header;
        console.log(header.home.name + ' ' + header.home.score + ' - ' + header.away.score + ' ' + header.away.name);
        console.log('Status: ' + header.status.display);
        for (const event of result.data.events) {
            let detail = '';
            if (event.type === 'substitution') {
                detail = event.detail.out.name + ' -> ' + event.detail.in.name;
            } else if (event.detail.player) {
                detail = event.detail.player.name;
            }
            console.log(event.time + "' " + event.type + ' - ' + detail);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
