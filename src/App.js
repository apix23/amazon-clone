import React , {useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom'; 
import Login from './Login';
import { auth } from './firebase';
import {useStateValue, useStateVaule} from './StateProvider'

function App() {
  const [{} , dispatch] = useStateValue();
  useEffect(() => {
  
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>>', authUser);
      
      if (authUser) {
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
      
      
      <Switch>
        <Route exact path="/">
          <Header/>
          <Home/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
