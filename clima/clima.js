const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ffcbc050957058883812960b97169b8b&units=metric`)

    return resp.data.main.temp;

};


module.exports = {
    getClima
};
