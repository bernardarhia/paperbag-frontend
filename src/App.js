import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Home from './global/Home';
import Login from './global/Login';
import Signup from './global/Signup';
import './users/styles/style.css';
import {UserContext} from '../src/context/UserContext'
import Profile from './global/Profile';
import localForage from 'localforage';
import {decryptData} from './functions/test';
import User from "./Api/requests";
import Loader from './global/Loader';

const App = () => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pageLoad, setPageLoad] = useState(false)

  return (
    <>
    {pageLoad ? <Loader /> :<UserContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" exact component={Profile} />
        <Redirect from="*" to="/dashboard" />
        </Switch>
      </Router>
    </UserContext.Provider>}
    
    </>
  )
}

export default App
