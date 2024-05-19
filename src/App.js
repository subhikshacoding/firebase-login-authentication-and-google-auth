import './App.css';
import {Routes,Route} from 'react-router-dom';
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login  />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;
