import React from "react";
import axios from "axios";
// const Weather = () => {
//     return (
//         <div> inside weather component</div>
//     )
// }




class Weather extends React.Component {

    async componentDidMount() {
        // let data = await axios.get("https://www.metaweather.com/api/location/1236594/",
        // )

        let response = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: 'https://www.metaweather.com/api/location/1236594/' },

        });
        console.log(">>> check data: ", response.data);
    }

    render() {
        return (
            <div> inside weather component</div>
        )
    }
}


export default Weather;