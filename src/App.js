import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects"
import About from "./About";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>

  
  );
}

export default App;
