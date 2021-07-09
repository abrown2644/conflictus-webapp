import logo from './logo.svg';
import Map from './components/map/Map'
import useWindowDimensions from './components/hooks/windowDimensions';

import './App.css';


function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <Map screenSize={width} theme="dark" />
    </div>
  );
}

export default App;