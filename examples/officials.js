// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');
const matchId = '5ahxi4l9k8fkbj3n2r6hgdmac';

(async () => {
    try {
        const result = await client.officials(matchId, 'en');
        for (const official of result.data.officials) {
            let line = official.role + ': ' + official.name;
            if (official.avg_yellow_cards !== null) {
                line += ' (avg yellow: ' + official.avg_yellow_cards + ', avg red: ' + official.avg_red_cards + ')';
            }
            console.log(line);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
