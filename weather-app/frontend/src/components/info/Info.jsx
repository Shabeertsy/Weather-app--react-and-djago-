import React, { useContext } from 'react'
import './Info.css'
import { DataContext } from '../../context/ContectAuth'


export default function Info() {

    const { apiData } = useContext(DataContext)


    return (
        <div>
            <div className="info-container">
                <div className="inner-info">
                    <div className="inner-info-box">
                        <h3 className="text-center mt">Weather</h3>
                        <p className='text-center light mt'>Humidity : {apiData&&apiData.main.humidity}</p>
                        <p className='text-center light mt'>Pressure : {apiData&&apiData.main.pressure}</p>
                        <p className='text-center light mt'>Temp Max : {apiData&&apiData.main.humidity} k</p>
                       

                    </div>
                    <div className="inner-info-box">
                    <h3 className="text-center mt">Wind</h3>
                    <p className='text-center light mt'>Speed : {apiData&&apiData.wind.speed}</p>
                    <p className='text-center light mt'>Deg : {apiData&&apiData.wind.deg}</p>



                    </div>
                </div>

            </div>
        </div>
    )
}
