import React, { useEffect, useState } from "react";
import back from '../../assets/back.jpg';
import './Home.css';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Home = () => {

    const [userName, setUserName ] = useState('')
    const [userInput, setUserInput] = useState(null)
    let history = useHistory();

    useEffect(()=> {
        document.body.style.backgroundImage = `url('${back}')`

        const storeData = localStorage.getItem('userName')
        setUserName(storeData)
        console.log(storeData)
    },[])

    const onLogOut = () => {
        
        history.goBack()
        localStorage.setItem('userName' , '')  
        localStorage.setItem('isLogin' , false)      
    }

    const onChangeInput = (val) => {
        setUserInput(val.target.value)        
    }

    return(
        <div className='containerr'>
            <div className='mainCard'>
                <div className='navBar'>
                    <button onClick={onLogOut}>Log Out</button>
                </div>
                <div className='contentCard'>
                    <div className='content'>
                        <h1>Welcome {userName}</h1>
                        <div className='userInput'>
                            <input
                                type='text'
                                placeholder='Enter something'
                                name='username'
                                className='form-control'
                                style={{width: '50%'}}
                                onChange={onChangeInput}
                            ></input>
                        </div>
                        <h1>Hi {userInput && userInput}</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <div>
                            <IoLogoFacebook size={50} className='logo'/>
                            <IoLogoInstagram size={50} className='logo'/>
                            <IoLogoLinkedin size={50} className='logo'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;