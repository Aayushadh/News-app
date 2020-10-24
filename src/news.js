const request = require('request');
const dotenv = require("dotenv");

function getNews(callback) {
    const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey='+process.env.yourAPIKey;
   
    request({
            url,
            json: true
        },
        (error, response) => {
            if (error) {
                callback("NO Internet Access!!!", undefined);
            } else if (response.body.error) {
                callback(response.body.error, undefined);
            } else {
                callback(undefined, response);
            }
        });
}

module.exports = {
    getNews
};