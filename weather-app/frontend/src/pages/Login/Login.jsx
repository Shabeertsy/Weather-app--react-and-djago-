import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { DataContext } from '../../context/ContectAuth'
import LoadingComp from '../../components/loader/Loader'



export default function Login() {

    const { loginUsername, loginPassword, loginHandler, loginError, setLoginError, loading, message } = useContext(DataContext)


    return (
        <div>
            {loading ? <LoadingComp /> :
                <div className="login-main">
                    <div className="login-inner">

                        <form className="form">

                            <h3 className="header">Sign In</h3>
                            {
                                <i className='error'>{loginError}</i>
                            }
                            {
                                <i className='success text-center'>{message}</i>
                            }
                            <div className="input-section">
                                <input placeholder="Username" onBlur={() => setLoginError('')} onChange={loginUsername} className="input" type="text" />
                                <input placeholder="Password" onBlur={() => setLoginError('')} onChange={loginPassword} className="input" type="password" />
                                <div className="checkbox-container">

                                </div>
                                <button onClick={loginHandler} className="sigin-btn">Submit</button>
                                <p className="signup-link">Don't have an account? <Link to='/register'>Register</Link></p>

                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}
