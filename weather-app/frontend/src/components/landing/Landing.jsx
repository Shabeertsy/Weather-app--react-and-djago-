import React from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate=useNavigate()

  return (
    <div>
      <div className="landing-main">
        <div className="landing-inner">
          <div className="landing-shadow">
            <div className="landing-container">
              <h1 className='text-center'>Update with weather</h1>
              <p className="text-center landing-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, autem et facilis, maiores perspiciatis tempore asperiores earum, reprehenderit eveniet possimus necessitatibus error aperiam! Natus reprehenderit, nulla quae laboriosam aut dolore.</p>
              <p className="text-center landing-text-info">
                You need login to get weather information

              </p>
              {/* button with animation */}
              <div className="landing-button">
                <button className="btn" type="button" onClick={()=>navigate('/login')}>
                  <strong>Start</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
