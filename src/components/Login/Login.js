import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {auth} from '../../firebase';
import {setCurrentUser} from '../../redux/user/user.actions';

import './Login.css';

const Login  = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState({
        name : "",
        email : "",
        imageUrl : "",
        password : ""
    });

    const handleChange = (e) => {
        let data2 = {...data};
        data2[e.target.name] = e.target.value; 
        setData(data2);
    }

    const register = () => {
        if(data.name==="")
            return alert("Please enter your full name");
        if(data.email==="")
            return alert("Please enter your email");
        if(data.password==="")
            return alert("Please enter your password");
        
        auth
            .createUserWithEmailAndPassword(data.email, data.password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName : data.name,
                    photoURL : data.imageUrl
                })
                .then(()=> {
                    dispatch(setCurrentUser({
                        email : userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName : data.name,
                        photoUrl : data.imageUrl
                    }));
                })
            })
            .catch(err => {
                return alert(err);
            })

    };

    const loginToApp = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(data.email, data.password)
            .then((userAuth)=> {
                dispatch(setCurrentUser({
                    email : userAuth.email,
                    uid : userAuth.uid,
                    displayName : userAuth.displayName,
                    photoUrl : userAuth.photoURL
                }));
            });
    };

    return (
        <div className="login">
            <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt="LinkedIn"/>

            <form>
                <input type="text" value={data.name} name="name" onChange={handleChange} placeholder="Full Name (required if registering) " />
                <input type="url" value={data.imageUrl} name="imageUrl" onChange={handleChange} placeholder="Profile pic URL (optional) " />
                <input type="email" value={data.email} name="email" onChange={handleChange} placeholder="Email " />
                <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Password " />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register}>Register now</span>
            </p>
        </div>
    )
}

export default Login;