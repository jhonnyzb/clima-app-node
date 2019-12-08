const axios = require('axios')


const getClima = async (lat, lon) => {
   
   const resp =  await  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=becbd01c5243af5b121f0c22c1d988ed&units=metric`)


    return resp.data.main.temp

}


module.exports = {
    getClima
}