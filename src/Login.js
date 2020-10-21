import React ,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
import { auth } from './firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //it succesfully created anew user with email and password

                
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message));
        //some fancy firebase login

    }
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('')
            })
            .catch(error => alert(error.message));
        
    }

    return (
        <div>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
                </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    
                    <input type="text" name="" value={email} onChange={e => setEmail(e.target.value)} id=""/>
                    
                    <h5>Passworld</h5>

                    <input type="password" name="" value={password} onChange={e => setPassword(e.target.value)} id=""/>

                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>

                    <p>
                    By signing-in you agree to the AMAZON FAKE CLONE
                    Conditions of Use & Sale. Please see out Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login__registerButton' onClick={register}>Create your account</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login
