// FORCESCRIPTS LTD - live-football-api.com
const { Client, ApiError } = require('../src/client');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.listWebhooks();
        console.log('Total registered: ' + result.data.total);
        for (const webhook of result.data.webhooks) {
            console.log(webhook.id + ' - ' + webhook.webhook_url + ' - ' + webhook.label);
        }
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        } else {
            throw err;
        }
    }
})();
