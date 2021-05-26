import logo from './logo.svg';
import Map from './components/map/Map'
import { pushRotate as Menu } from 'react-burger-menu'

import './App.css';


function App() {

  return (
    <div className="App">
        {/* <img className="logo" src={logo}></img>             */}
        <Map theme="light"/>
    </div>
  );
}

export default App;
