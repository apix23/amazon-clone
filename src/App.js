import React , {useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom'; 
import Login from './Login';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HhdtREVGDxKodB2voR3dMyWvENX9ROPhevj3wj3PLebZVBrK1O1TfAt2cUmSd3xYwriNqUo9FfqNEQmno3c6kZ600qEw1YgOp')

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
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
