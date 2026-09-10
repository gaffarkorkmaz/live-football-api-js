// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.registerWebhook('https://yourapp.com/webhooks/football', 'my server');
        console.log('Registered webhook id: ' + result.data.id);
        console.log(result.data.message);
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
