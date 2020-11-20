import React,{useEffect, useState} from 'react'
import { Link} from 'react-router-dom'
import {currentRoute} from '../functions/getCurrentLocation';

const Header = ({routes}) => {
   const [location, setLocation] = useState('');

   useEffect(()=>{
       if(currentRoute()==='login'){
        return setLocation('Signup')
       }
       if(currentRoute()==='signup'){
        return setLocation('Login')
       }
   }, [])
    
    return (
        <header className="header">
            <div className="wrapper">
            <div className="logo">
                <Link className="logo__icon" to='/'>Logo</Link>
            </div>
            <div className="cta">
                {routes ? routes.map((route, index)=>{
                   return <Link to={`${route.toLowerCase()}`} key={index}>{route}</Link>
                }):<Link to={`/${location.toLowerCase()}`}>{location}</Link>} 
            </div>
            </div>
        </header>
    )
}

export default Header
