import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const key ='b1218091f2772402716e94b095bbc4a2'


const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric',
            APPID:key
        }
    });
    console.log(data);
    return data;
}


export default fetchWeather;
