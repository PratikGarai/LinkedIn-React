import { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import {useDispatch, useSelector} from "react-redux";
import Login from './components/Login/Login';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';
import { auth } from './firebase';

const App = () => 
{
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.currentUser);

  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // user is logged in
        dispatch(setCurrentUser({
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl : userAuth.photoURL
        }));
      }
      else {
        // user is not logged in 
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {!user ? 
        <Login /> 
        :
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      }
    </div>
  );
}

export default App;
