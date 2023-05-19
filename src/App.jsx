import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import { Banner } from "./Components/Banner/Banner";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

