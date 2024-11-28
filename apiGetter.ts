import { ForestBotAPI } from "forestbot-api-wrapper-v2";

export const api = new ForestBotAPI({ 
    apiUrl: "http://127.0.0.1:8000",
    logerrors: true,
    apiKey: "123",
    websocket_url: "ws://127.0.0.1:8000",
    isBotClient: false,
}); 