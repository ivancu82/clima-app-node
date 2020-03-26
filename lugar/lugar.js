const axios = require('axios');

const getLugarLatLng = async( dir ) => {

    const encodeUrl = encodeURI( dir );
    // console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '65eaec6adfmsh2268ce6c6a77d99p11229fjsn24e8556082a0'}
    });

    const resp = await instance.get();
    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
};


