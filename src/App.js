import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



import "./App.css";
import Home from "./components/pages/Home";
import Primaryone from "./components/pages/Primaryone";
import Primarytwo from "./components/pages/Primarytwo";
import Primarythree from "./components/pages/Primarythree";
import Primaryfour from "./components/pages/Primaryfour";
import Primaryfive from "./components/pages/Primaryfive";
import Primarysix from "./components/pages/Primarysix";
import JSS1 from "./components/pages/JSS1";
import JSS2 from "./components/pages/JSS2";
import JSS3 from "./components/pages/JSS3";
import SS1 from "./components/pages/SS1";
import SS2 from "./components/pages/SS2";
import SS3 from "./components/pages/SS3";
import Tetiary from "./components/pages/Tetiary";







export default function App() {
  return (
    <div className='App'>

      <Router>
        <Header/>
        
        <Routes>
           <Route exact path="/" element={<Home/>} />
           
           <Route exact path="/primaryone" element={<Primaryone/>} />
           <Route exact path="/primarytwo" element={<Primarytwo/>} />
           <Route exact path="/primarythree" element={<Primarythree/>} />
           <Route exact path="/primaryfour" element={<Primaryfour/>} />
           <Route exact path="/primaryfive" element={<Primaryfive/>} />
           <Route exact path="/primarysix" element={<Primarysix/>} />
           <Route exact path="/JSS1" element={<JSS1/>} />
           <Route exact path="/JSS2" element={<JSS2/>} />
           <Route exact path="/JSS3" element={<JSS3/>} />
           <Route exact path="/SS1" element={<SS1/>} />
           <Route exact path="/SS2" element={<SS2/>} />
           <Route exact path="/SS3" element={<SS3/>} />
           <Route exact path="/Tertiary" element={<Tetiary/>} />
           
           
           
          
        </Routes>
      </Router>

     
        
    </div>
     

  );
}








