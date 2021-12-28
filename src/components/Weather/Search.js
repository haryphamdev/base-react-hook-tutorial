import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [locationArr, setLocationArr] = useState([]);
    let history = useHistory();

    const handleSearchBtn = async () => {
        let response = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` }, //template string
        });



        if (response && response.data) {
            let result = response.data;
            let _locationArr = [];

            if (!_.isEmpty(result)) {

                for (let key in result) {
                    _locationArr.push(result[key])
                }
                setLocationArr(_locationArr);

                //not empty
            } else {
                setLocationArr([]);
            }

        }
    }

    const handleViewDetail = (woeid) => {
        history.push(`/weather/detail/${woeid}`);
    }
    return (
        <div className="search-weather-container">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder="Search any city..."
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <button onClick={() => handleSearchBtn()}>Search</button>
            </div>

            <div className="result-container">
                {locationArr && locationArr.length > 0 &&
                    locationArr.map((item, index) => {
                        return (
                            <div className="result-child" key={`location-${index}`}>
                                <div className="title">Title: {item.title}</div>
                                <div className="type">Type: {item.location_type}</div>
                                <div className="woeid"><span onClick={() => handleViewDetail(item.woeid)}>Woeid: {item.woeid}</span></div>
                                <div className="latt_long">latt_long: {item.latt_long}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search;