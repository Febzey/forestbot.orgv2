import ForestBotApi from "forestbot-api-wrapper-v2";

export const api = new ForestBotApi({ 
    apiUrl: "http://127.0.0.1:5000/api/v1",
    logerrors: true,
    apiKey: "this_is_the_read_key",
});