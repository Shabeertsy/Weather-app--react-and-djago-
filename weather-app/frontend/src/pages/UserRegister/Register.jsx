import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { instance2 } from '../../Axios'
import LoadingComp from '../../components/loader/Loader'
import { DataContext } from '../../context/ContectAuth'


export default function Register() {

    const navigate = useNavigate()
    const {setMessage}=useContext(DataContext)
    

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [errors, setErrors] = useState({});
    const [loading,setLoading]=useState(false)



    // function for get the data from in the input fields

    let getData = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData({ ...data, [name]: value })
    }



    // validation of data

    const validateData = () => {

        const { name, email, phone } = data;
        const newErrors = {};

        // name validation

        if (!name || name.trim() === '') {
            newErrors.name = 'Name is required';
        } else if (!name || !/^[a-zA-Z0-9]+$/.test(name)) {
            newErrors.name = 'Username is invalid';
        }

        // email validation

        if (email.trim() === '') {
            newErrors.email = 'Email required'
        } else if (!email || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }


        // phone validation
        if (phone.trim() === '') {
            newErrors.phone = 'Phone required';
        } else if (!phone || !/^\d{10}$/.test(phone)) {
            newErrors.phone = 'Mobile number is invalid';
        }


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };




    // regstration function

    const onSubmit = async (e) => {
        setErrors({})
        setLoading(true)
        try {
            const response = await instance2.post('api/register/', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                setMessage(response.data.message)
                navigate('/login')

            });

        } catch (error) {
            setMessage('')
            console.log(error);
            setErrors({ reError: error.response.data.message })
        }
        setLoading(false)
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validateData();

        if (isValid) {
            onSubmit()
            setErrors({})
        } else {
            console.log('Invalid data:', errors);
        }
    };




    return (
        <div>
            { loading ? <LoadingComp/> :
            <div className='register-main'>
                <div className="content">
                    <h3 className='text-center'>Register here</h3>
                </div>
                <div className="section_form">
                    <div className="register-inner">
                        <form id="consultation-form" className="feed-form" action="#" onSubmit={handleSubmit}>
                            {
                                <i className='error text-center'>{errors.reError}</i>
                            }
                            <input name='name' required="" placeholder="Name" type="text" onChange={getData} />
                            {
                                <i className='error text-center'>{errors && errors.name}</i>
                            }
                            <input name="phone" required="" placeholder="Phone number" onChange={getData} />
                            {
                                <i className='error text-center'>{errors.phone}</i>
                            }
                            <input name="email" required="" placeholder="E-mail" type="email" onChange={getData} />
                            {
                                <i className='error text-center'>{errors.email}</i>
                            }
                            <button className="button_submit" type='input' >Register</button>
                        </form>
                    </div>
                </div>
                <div className="lower-content text-center">
                    <p>Password will be sended on to <br /> your given email address</p>
                    <p>Already have an account ? <Link to='/login'>Login</Link> </p>
                </div>
            </div>
            }
        </div>
    )
}
