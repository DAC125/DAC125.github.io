
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skils from "./pages/Skils/Skils"
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
// import Card from './components/Card/Card'
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
      <Projects/>
      {/* <Card/> */}
    </div>
  );
}


export default App;
