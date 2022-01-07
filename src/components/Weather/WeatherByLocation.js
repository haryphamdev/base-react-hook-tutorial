import {
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherState from "./Child/WeatherState";
import { useHistory } from "react-router-dom";
import WeatherDay from "./Child/WeatherDay";
import _ from "lodash";
import './Weather.scss';
import moment from "moment";

const WeatherByLocation = (props) => {
    let { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({})
    let history = useHistory();

    useEffect(() => {
        getWeatherByLocation();

    }, []);
    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woeidFromParent;
        }
        let response = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/${woeid}/` }, //template string
        });

        if (response && response.data) {
            setLocationWeather(response.data)
        }
    }

    const handleBack = () => {
        history.push("/weather")
    }
    return (
        <div className="w-b-l-container">

            {!props.woeidFromParent &&
                <div className="back">
                    <span onClick={() => handleBack()}>--Back--</span>
                </div>
            }
            <div className="list-weather-day">
                {!_.isEmpty(locationWeather) && locationWeather.consolidated_weather
                    && locationWeather.consolidated_weather.length > 0
                    && locationWeather.consolidated_weather.map((item, index) => {
                        return (
                            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>
                                {index === 0 &&
                                    <div className="location-data">
                                        <div className="title">{locationWeather.title}</div>
                                        <div className="time">{moment(locationWeather.time).format("hh:mm:ss A")}</div>
                                    </div>
                                }
                                <WeatherDay
                                    dataWeather={item}
                                />
                            </div>

                        )
                    })

                }
            </div>


        </div>
    )
}

export default WeatherByLocation;