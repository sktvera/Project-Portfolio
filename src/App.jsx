import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { NavBar } from "./Components/NavBar"; */
import { Banner } from "./Components/Banner/Banner";
import { Skills } from "./Components/Skills/Skills";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

/* https://api.whatsapp.com/send/?phone=3183731442&text&type=phone_number&app_absent=0 */