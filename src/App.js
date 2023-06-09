import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import './App.css';
import Main from './page/Main';
import Setting from './page/Setting';
import Locations from './page/Locations';
import Plan from './page/Plan';
import Album from './components/Album';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={<Main />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/plan' element={<Plan />} />
      <Route path='/album' element={<Album />} />
      <Route path='/setting' element={<Setting />} />
    </Routes>

  );
}

export default App;
