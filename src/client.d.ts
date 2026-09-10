// FORCESCRIPTS LTD - live-football-api.com
export declare class ApiError extends Error {
    statusCode: number;
    responseBody: Record<string, unknown>;
    constructor(message: string, statusCode: number, responseBody?: Record<string, unknown>);
}

export declare class Client {
    constructor(apiKey: string, baseUrl?: string, timeout?: number);
    matches(date?: string, lang?: string): Promise<any>;
    liveMatchDetails(matchId: string, lang?: string): Promise<any>;
    lineups(matchId: string, lang?: string): Promise<any>;
    h2h(matchId: string, lang?: string): Promise<any>;
    injuries(matchId: string, lang?: string): Promise<any>;
    officials(matchId: string, lang?: string): Promise<any>;
    leagues(lang?: string): Promise<any>;
    leagueStandings(leagueId: string, season?: string, lang?: string): Promise<any>;
    leagueFixtures(leagueId: string, season?: string, week?: string, lang?: string): Promise<any>;
    teamMatches(teamId: string, season?: string, lang?: string): Promise<any>;
    teamSquad(teamId: string, season?: string, lang?: string): Promise<any>;
    teamStandings(teamId: string, season?: string, lang?: string): Promise<any>;
    teamSearch(query: string, lang?: string): Promise<any>;
    player(playerId: string, lang?: string): Promise<any>;
    playerMatches(playerId: string, teamId?: string, season?: string, lang?: string): Promise<any>;
    playerSearch(query: string, lang?: string): Promise<any>;
    registerWebhook(webhookUrl: string, label?: string): Promise<any>;
    listWebhooks(): Promise<any>;
    deleteWebhook(webhookId: number): Promise<any>;
}
