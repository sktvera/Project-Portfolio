import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import { Banner } from "./Components/Banner/Banner";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Welcome from './Routes/Welcome/Welcome'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Project-Portfolio' element={<Welcome/>}/>
      </Routes>     
    </div>
  );
}

export default App;

