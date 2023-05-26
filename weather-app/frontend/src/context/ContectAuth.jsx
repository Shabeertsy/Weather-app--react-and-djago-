import { createContext, useState, useEffect } from "react";
import jwt_decode from 'jwt-decode'
import { instance1, instance2 } from "../Axios";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../Constants";



// Create context and context data

export const DataContext = createContext();



export const DataProvider = ({ children }) => {


    const navigate = useNavigate()

    let [apiData, setApiData] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [loginError, setLoginError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')


    // get authtoken from localStorage

    const [authToken, setAuthtoken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode((localStorage.getItem('authToken'))) : null)




    // get username and password from login page

    const loginPassword = (e) => {
        setPassword(e.target.value)

    }

    const loginUsername = (e) => {
        setUsername(e.target.value)

    }


    // default current weather data
    const getDefaultWeather = async () => {
        try {
            await instance1.get(`data/2.5/weather?q=delhi&appid=${API_KEY}`).then((res) => {
                setApiData(res.data)
            })

        } catch (err) {
            console.log('no data found')

        }


    }



    // login  handler  function

    const loginHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await instance2.post('api/token/', { 'username': username, 'password': password }, { headers: { 'Content-Type': 'application/json', } }).then(response => {

                if (response.status === 200) {
                    localStorage.setItem("authToken", JSON.stringify(response.data))
                    setAuthtoken(response.data)
                    setUser(jwt_decode(response.data.access))


                }
                navigate('/')
            })
        }
        catch (error) {
            setLoginError(error.response.data.detail)
        }
        setLoading(false)

    }



    // logout function

    const logout = () => {
        setAuthtoken(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/')
    }



    useEffect(() => {

    }, [loading]);



    // all data and mangaed states

    const contextData = {
        apiData: apiData,
        setApiData: setApiData,
        loginPassword: loginPassword,
        loginUsername: loginUsername,
        loginHandler: loginHandler,
        loginError: loginError,
        setLoginError: setLoginError,
        getDefaultWeather: getDefaultWeather,
        loading: loading,
        setMessage: setMessage,
        logout: logout,
        message: message,
        user: user,

    };



    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>)
};
