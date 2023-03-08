import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
    </>

  
  );
}

export default App;
