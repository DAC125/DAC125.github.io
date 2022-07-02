
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skils from "./components/Skils"
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import './css/App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skils/>
      <WorkExperience/>
      <Education/>
      <Contact/>
    </div>
  );
}


export default App;
