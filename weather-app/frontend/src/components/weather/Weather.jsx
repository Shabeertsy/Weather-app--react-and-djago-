import React, { useContext, useEffect, useState } from 'react'
import './Weather.css'
import { DataContext } from '../../context/ContectAuth'

export default function Weather() {

    const { apiData } = useContext(DataContext)
    const [temp, setTemp] = useState(0)
    const [dateTime,setDateTime]=useState()



    const tempConversion = () => {
        let kelvin = apiData && apiData.main.temp // convert temp kelvin to celsius
        const celsius = (kelvin - 273.15).toFixed(0)
        setTemp(apiData ? celsius : '0')


    }



    // unx time stamp format convert
    let dateConversion = () => {
        const sunriseTimestamp = apiData && apiData.dt * 1000; // Multiply by 1000 to convert seconds to milliseconds
        const sunriseDate = new Date(sunriseTimestamp);

        const options = {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        };
        const formattedDate = sunriseDate.toLocaleDateString('en-US', options);

        const timeOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        const formattedTime = sunriseDate.toLocaleTimeString('en-US', timeOptions);

        setDateTime({
            date:formattedDate,
            time:formattedTime,
        })

    };




    // useeffect
    useEffect(() => {
        tempConversion()
        dateConversion()
    }, [apiData])



    return (
        <div>
            <div className="card">
                <div className="container">
                    <div className="cloud front">
                        <span className="left-front"></span>
                        <span className="right-front"></span>
                    </div>
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                    <div className="cloud back">
                        <span className="left-back"></span>
                        <span className="right-back"></span>
                    </div>
                </div>


                <div className="card-header">
                    <span>{apiData ? apiData.name : 'city'}<br />{apiData ? apiData.sys.country : 'country'}</span>
                    <span>{apiData ? apiData.weather[0].description : ''}</span>
                    <span>{apiData&&dateTime ? dateTime.date : ''},{apiData&&dateTime ? dateTime.time : ''}</span>
                </div>

                <span className="temp">{temp && temp + '\u00B0C'} </span>
                <div className="temp-scale">
                    <span>Celcius</span>
                </div>
            </div>

        </div>
    )
}
