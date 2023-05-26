import React, { useContext, useState } from 'react'
import './Search.css'
import { instance1 } from '../../Axios'
import { API_KEY } from '../../Constants'
import { DataContext } from '../../context/ContectAuth'





export default function Search() {

    let { apiData, setApiData } = useContext(DataContext)

    let [area, setArea] = useState('')
    let [error, setError] = useState('')


    // get input area

    const getInput = (e) => {
        setArea(e.target.value)

    }



    // seach function

    let searchHandler = async (e) => {
        e.preventDefault();

        if (area.trim() === '') {
            setError('Enter a city')

        } else {

            try {
                await instance1.get(`data/2.5/weather?q=${area}&appid=${API_KEY}`).then((res) => {
                    setApiData(res.data)
                })

            } catch (err) {
                setError(err.response.data.message)

            }


        }
    }
    
    return (
        <div>

            <div className="group">
                <svg className="icon" onClick={searchHandler} aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <div className='error-section'>
                    <input placeholder="Enter your location" onBlur={() => setError('')} onChange={getInput} type="search" className="inputs" />
                </div>
            </div>
            {
                <i className='error'>{error}</i>
            }

        </div>
    )
}
