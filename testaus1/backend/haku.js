const request = require('postman-request')

const tapahtumahaku = (haku, callback) => {
  const url =
    "https://tapahtumainfo.fi?hakulause=x" +
    haku +
    

  request({ url: url, json: true }, (error, response, body) => {
    if (error) {
      callback("Ei saada yhteyttä", undefined);
    } else if (body.error) {
      callback("Ei oo paikkaa", undefined);
    } else {
      callback(undefined, body.query.pages);
    }
  });
};

module.exports = {
  tapahtumahaku,
};
