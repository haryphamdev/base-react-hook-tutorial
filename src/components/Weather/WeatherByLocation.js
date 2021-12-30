import {
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";

const WeatherByLocation = () => {
    const { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({})

    useEffect(() => {
        getWeatherByLocation();
    }, []);
    const getWeatherByLocation = async () => {
        let response = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` }, //template string
        });

        if (response && response.data) {
            setLocationWeather(response.data)
        }
    }

    return (
        <div>
            {/* {JSON.stringify(locationWeather)} */}
            <WeatherState
                weatherState={"Showers"}
            />
        </div>
    )
}

export default WeatherByLocation;