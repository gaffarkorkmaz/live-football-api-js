// FORCESCRIPTS LTD - live-football-api.com
class ApiError extends Error {
    constructor(message, statusCode, responseBody) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        this.responseBody = responseBody || {};
    }
}

module.exports = { ApiError };
