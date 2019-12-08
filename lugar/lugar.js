const axios = require('axios')



const getLugarLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '62f4d28c09mshe2796551a49b142p17dbd7jsn44c4bf83e92a' }
    });

      const resp = await instance.get()
      if (resp.data.Results.length === 0) {
          throw new Error(`No hay resultados para la ${dir}`)
      }

      const data = resp.data.Results[0]
      const direccion = data.name
      const lat = data.lat
      const lon = data.lon
      return {
          direccion,
          lat,
          lon
      }


}

module.exports={
    getLugarLatLng
}

