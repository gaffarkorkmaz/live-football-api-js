// FORCESCRIPTS LTD - live-football-api.com
const { ApiError } = require('./apiError');

class Client {
    constructor(apiKey, baseUrl, timeout) {
        this.apiKey = apiKey;
        this.baseUrl = (baseUrl || 'https://live-football-api.com/api/v1').replace(/\/+$/, '');
        this.timeout = timeout || 45000;
    }

    matches(date, lang) {
        const params = { lang: lang || 'en' };
        if (date) params.date = date;
        return this.request('matches', params);
    }

    liveMatchDetails(matchId, lang) {
        return this.request('live_match_details', { match_id: matchId, lang: lang || 'en' });
    }

    lineups(matchId, lang) {
        return this.request('lineups', { match_id: matchId, lang: lang || 'en' });
    }

    h2h(matchId, lang) {
        return this.request('h2h', { match_id: matchId, lang: lang || 'en' });
    }

    injuries(matchId, lang) {
        return this.request('injuries', { match_id: matchId, lang: lang || 'en' });
    }

    officials(matchId, lang) {
        return this.request('officials', { match_id: matchId, lang: lang || 'en' });
    }

    leagues(lang) {
        return this.request('leagues', { lang: lang || 'en' });
    }

    leagueStandings(leagueId, season, lang) {
        const params = { league_id: leagueId, lang: lang || 'en' };
        if (season) params.season = season;
        return this.request('league_standings', params);
    }

    leagueFixtures(leagueId, season, week, lang) {
        const params = { league_id: leagueId, lang: lang || 'en' };
        if (season) params.season = season;
        if (week) params.week = week;
        return this.request('league_fixtures', params);
    }

    teamMatches(teamId, season, lang) {
        const params = { team_id: teamId, lang: lang || 'en' };
        if (season) params.season = season;
        return this.request('team_matches', params);
    }

    teamSquad(teamId, season, lang) {
        const params = { team_id: teamId, lang: lang || 'en' };
        if (season) params.season = season;
        return this.request('team_squad', params);
    }

    teamStandings(teamId, season, lang) {
        const params = { team_id: teamId, lang: lang || 'en' };
        if (season) params.season = season;
        return this.request('team_standings', params);
    }

    teamSearch(query, lang) {
        return this.request('team_search', { q: query, lang: lang || 'en' });
    }

    player(playerId, lang) {
        return this.request('player', { player_id: playerId, lang: lang || 'en' });
    }

    playerMatches(playerId, teamId, season, lang) {
        const params = { player_id: playerId, lang: lang || 'en' };
        if (teamId) params.team_id = teamId;
        if (season) params.season = season;
        return this.request('player_matches', params);
    }

    playerSearch(query, lang) {
        return this.request('player_search', { q: query, lang: lang || 'en' });
    }

    registerWebhook(webhookUrl, label) {
        const params = { webhook_url: webhookUrl };
        if (label) params.label = label;
        return this.request('webhook/register', params, 'POST');
    }

    listWebhooks() {
        return this.request('webhook/register', {}, 'GET');
    }

    deleteWebhook(webhookId) {
        return this.request('webhook/register', { id: webhookId }, 'DELETE');
    }

    async request(endpoint, params, method) {
        method = method || 'GET';
        const queryParams = new URLSearchParams({ api_key: this.apiKey });
        let bodyParams = null;
        if (method === 'POST') {
            bodyParams = new URLSearchParams(params || {});
        } else {
            Object.entries(params || {}).forEach(([key, value]) => queryParams.append(key, value));
        }
        const url = this.baseUrl + '/' + endpoint + '?' + queryParams.toString();
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), this.timeout);
        let response;
        try {
            response = await fetch(url, {
                method: method,
                headers: bodyParams ? { 'Content-Type': 'application/x-www-form-urlencoded' } : undefined,
                body: bodyParams,
                signal: controller.signal,
            });
        } catch (err) {
            throw new ApiError('Network error: ' + err.message, 0, {});
        } finally {
            clearTimeout(timer);
        }
        const text = await response.text();
        let decoded;
        try {
            decoded = JSON.parse(text);
        } catch (err) {
            throw new ApiError('Invalid JSON response from API', response.status, {});
        }
        if (response.status >= 400) {
            throw new ApiError(decoded.message || 'Unknown API error', response.status, decoded);
        }
        return decoded;
    }
}

module.exports = { Client, ApiError };
