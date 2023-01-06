import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'X-RapidAPI-Key': '191104d8efmshc871af584bb6ffdp16f4e3jsn314f2d30935c',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export async function fetchData(url) {
    const { data } = await axios.get(url, {
        headers: {
            'X-RapidAPI-Key': '191104d8efmshc871af584bb6ffdp16f4e3jsn314f2d30935c',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    

    return data;
}