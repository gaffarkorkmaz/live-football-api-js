// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const webhookId = 123;
        const result = await client.deleteWebhook(webhookId);
        console.log(result.data.message);
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
