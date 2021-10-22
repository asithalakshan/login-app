import React, { useEffect, useState } from "react";
import back from '../../assets/back.jpg';
import { useHistory } from "react-router-dom";
import './LogIn.css';
import { IoEye, IoEyeOff, IoCloseCircleOutline} from "react-icons/io5";
import { users } from '../../assets/users';
import { Alert } from 'react-bootstrap'

let initFormValue = {
    username: null,
    password: null,
}

const LogIn = () => {

    let history = useHistory();

    useEffect(()=> {
        document.body.style.backgroundImage = `url('${back}')`
        localStorage.setItem('isLogin' ,false)
    },[])

    const [formValues, setFormValues] = useState({...initFormValue})
    const [showPassword, setShowPassword] = useState(false)
    const [show, setShow] = useState(false)
    const [alertHedding, setAlertHedding] = useState(null)
    const [alertMessage, setAlertMessage] = useState(null)

    const onChangeForm = (val) => {
        let value = val.target.value
        let field = val.target.name 
        setFormValues({ ...formValues, [field]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('On submit')
        console.log(formValues)        

        let valid = users.find(item => {
             if(formValues.username === item.userName && formValues.password === item.password){
                 return true
             }
             else return false
        })
        if(!formValues.password || !formValues.username){
            if(!formValues.username && formValues.password){
                setAlertHedding('Username is requird..!')
                setAlertMessage('Please enter your username')
                setShow(true) 
            }
            else if(formValues.username && !formValues.password){
                setAlertHedding('Password is requird..!')
                setAlertMessage('Please enter your password')
                setShow(true) 
            }
            else{
                setAlertHedding('Username & Password requird..!')
                setAlertMessage('Please enter your username & password')
                setShow(true) 
            }
        }

        else{
            if(valid){
                console.log('vav', valid)
                localStorage.setItem('userName' , formValues.username)
                localStorage.setItem('isLogin' , true)
                history.push('/home')            
            }
            else {
                setAlertHedding('Invalid Login..!')
                setAlertMessage('Please check your username & password and try again')
                setShow(true)
            }
        }      
    }

    return(

        <div className='main'> 
        <div style={{justifyContent: 'center', display: 'flex', margin: 10}}>
            <Alert variant="danger" style={{width: '40%', maxWidth: 800,  position: 'absolute'}} show={show}>
                            <button
                                style={{
                                    width: '60px', 
                                    padding: 5, 
                                    margin: 0, 
                                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                                    position: 'absolute',
                                    border: 'none',
                                    right: 0,                                
                                }}
                                type='reset'
                                onClick={() =>
                                setShow(false)
                                }
                            >
                <IoCloseCircleOutline  size={50} color='#f00' style={{right: 0}}/>
                </button>
                <Alert.Heading style={{fontSize: 40, textAlign: 'center'}}>{alertHedding}</Alert.Heading>
                <p>{alertMessage}</p>                
            </Alert>    
        </div>       
            <div className='container' >
                <div className='card-body'>
                    <div>
                        <h1 style={{textAlign: 'center'}}>Log In</h1>
                    </div>
                    <form>
                        <div className='form-group'>
                            <span style={{flex: 2}}>User Name :</span>
                            <input
                                type='text'
                                placeholder='User Name'
                                name='username'
                                className='form-control'
                                style={{flex: 11}}
                                value={formValues.username}
                                onChange={onChangeForm}
                            ></input>
                        </div>
                        <div className='form-group'>
                            <span style={{flex: 4}}>Password :</span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Password'
                                name='password'
                                className='form-control'
                                style={{
                                    flex: 21,
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 0, 
                                }}
                                value={formValues.password}
                                onChange={onChangeForm}
                            ></input>
                            <button
                                style={{
                                    width: '60px', 
                                    padding: 5, 
                                    margin: 0, 
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                                    border: 1,
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10, 
                                }}
                                type='reset'
                                onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                                }
                            >
                                {showPassword ? <IoEye size={50} color='#fff'/> : <IoEyeOff size={50} color='#fff'/>}
                            </button>
                        </div>                    
                        <div style={{textAlign: 'center'}}>
                            <button className='btn button' onClick={onSubmit}>
                                <h3>Log In</h3>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;