# Live Football API — Node.js Client

Official Node.js client for [Live Football API](https://live-football-api.com) — real-time football scores, lineups, standings, head-to-head stats, injuries, referee data, and goal webhooks. Zero dependencies, works with Node 18+ (uses the built-in `fetch`). Ships with TypeScript type definitions.

## Installation

```bash
npm install live-football-api
```

## Getting an API key

Sign up for free at [live-football-api.com](https://live-football-api.com) — new accounts get 500 free credits instantly, no card required.

## Usage

```js
const { Client, ApiError } = require('live-football-api');

const client = new Client('YOUR_API_KEY');

(async () => {
    try {
        const result = await client.matches('2026-07-03', 'en');
        console.log(result.data.matches);
    } catch (err) {
        if (err instanceof ApiError) {
            console.log('Error ' + err.statusCode + ': ' + err.message);
        }
    }
})();
```

TypeScript:

```ts
import { Client, ApiError } from 'live-football-api';

const client = new Client('YOUR_API_KEY');
const result = await client.matches('2026-07-03', 'en');
```

## Examples

The [`examples/`](examples) folder has one runnable file per endpoint — every single one tested against the live API using a real match (Sporting CP vs Galatasaray, UEFA Champions League) and a real player (Victor Osimhen). Clone the repo, run `npm install`, drop your API key into a file, and run it with `node examples/<file>.js`.

| File | Endpoint |
|---|---|
| [`examples/matches.js`](examples/matches.js) | `matches()` |
| [`examples/live_match_details.js`](examples/live_match_details.js) | `liveMatchDetails()` |
| [`examples/lineups.js`](examples/lineups.js) | `lineups()` |
| [`examples/h2h.js`](examples/h2h.js) | `h2h()` |
| [`examples/injuries.js`](examples/injuries.js) | `injuries()` |
| [`examples/officials.js`](examples/officials.js) | `officials()` |
| [`examples/leagues.js`](examples/leagues.js) | `leagues()` |
| [`examples/league_standings.js`](examples/league_standings.js) | `leagueStandings()` |
| [`examples/league_fixtures.js`](examples/league_fixtures.js) | `leagueFixtures()` |
| [`examples/team_matches.js`](examples/team_matches.js) | `teamMatches()` |
| [`examples/team_squad.js`](examples/team_squad.js) | `teamSquad()` |
| [`examples/team_standings.js`](examples/team_standings.js) | `teamStandings()` |
| [`examples/team_search.js`](examples/team_search.js) | `teamSearch()` |
| [`examples/player.js`](examples/player.js) | `player()` |
| [`examples/player_matches.js`](examples/player_matches.js) | `playerMatches()` |
| [`examples/player_search.js`](examples/player_search.js) | `playerSearch()` |
| [`examples/webhook_register.js`](examples/webhook_register.js) | `registerWebhook()` |
| [`examples/webhook_list.js`](examples/webhook_list.js) | `listWebhooks()` |
| [`examples/webhook_delete.js`](examples/webhook_delete.js) | `deleteWebhook()` |

Output of `examples/live_match_details.js`:

```
Sporting CP 3 - 1 Galatasaray
Status: FT
5' own_goal - Gonçalo Inácio
22' yellow_card - Sergi Altimira
27' goal - Geny Catamo
```

## Available methods

| Method | Description |
|---|---|
| `matches(date, lang)` | Daily fixtures and results |
| `liveMatchDetails(matchId, lang)` | Live score, stats, events |
| `lineups(matchId, lang)` | Starting lineups and substitutes |
| `h2h(matchId, lang)` | Head-to-head history for the two teams in a match |
| `injuries(matchId, lang)` | Injury list for both teams in a match |
| `officials(matchId, lang)` | Referee and assistants, including average cards |
| `leagues(lang)` | Full league coverage, grouped by country |
| `leagueStandings(leagueId, season, lang)` | League table |
| `leagueFixtures(leagueId, season, week, lang)` | Full season fixture list, optionally filtered by season/week |
| `teamMatches(teamId, season, lang)` | A team's matches |
| `teamSquad(teamId, season, lang)` | A team's squad |
| `teamStandings(teamId, season, lang)` | A team's league position |
| `teamSearch(query, lang)` | Search teams by name |
| `player(playerId, lang)` | Player profile |
| `playerMatches(playerId, teamId, season, lang)` | A player's match history |
| `playerSearch(query, lang)` | Search players by name |
| `registerWebhook(webhookUrl, label)` | Register a goal-alert webhook (free) |
| `listWebhooks()` | List registered webhooks (free) |
| `deleteWebhook(id)` | Remove a webhook by its numeric id (free) |

Full parameter and response reference: [live-football-api.com/docs](https://www.live-football-api.com/docs)

## Requirements

- Node.js >= 18 (for native `fetch`)

## License

MIT © [FORCESCRIPTS LTD](https://live-football-api.com)
