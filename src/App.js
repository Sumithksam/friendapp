import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addfriends from './components/Addfriends';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewfriend from './components/Viewfriend';
function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route path='/' exact element={<Addfriends/>}/>
<Route path="/view" exact element={<Viewfriend/>}/>


  </Routes>
  </BrowserRouter>
  );
}

export default App;
