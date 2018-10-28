import axios from 'axios';

const API_KEY='6a78596d062df78380eff5944c4e5567';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    let url = `${ROOT_URL}&q=${city}`;
    let request = axios.get(url);

    return{
        'type':FETCH_WEATHER,
        'payload':request,
        'meta': { city /*,'ts': Date.now()*/ }
    };
}