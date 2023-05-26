import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/ContectAuth'
import Weather from '../weather/Weather'
import Search from '../search/Search'
import Info from '../info/Info'
import './Hero.css'



export default function Hero() {

    let { setApiData,getDefaultWeather,apiData } = useContext(DataContext)

    useEffect(()=>{
        getDefaultWeather()
    },[])

    return (
        <div className='hero'>
            <div className="hero-main">
                <div className="hero-inner">
                    <div className="hero-container">

                        <div className="left-side">
                            <div className="inp">
                                <h1 className="heading">Weather Finder</h1>
                                <p className='hero-quotes'>Let the weather guide your journey</p>
                                <Search />
                            </div>
                        </div>
                        <div className="right-side">
                            <Weather />
                        </div>

                    </div>

                    {/* other weather infos */}
                    <div className="hero-bottom-container">
                        <div className="hero-bottom-containers">
                            <Info />
                        </div>
                       
                    </div>


                </div>
            </div>
        </div>
    )
}
