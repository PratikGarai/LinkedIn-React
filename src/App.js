import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import {useSelector} from "react-redux";

import './App.css';
import Login from './components/Login/Login';

const App = () => 
{
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className="App">
      <Header />
      {!user ? <Login /> :
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      }
    </div>
  );
}

export default App;
