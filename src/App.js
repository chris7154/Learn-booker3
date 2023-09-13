import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import "./App.css";
import Course from './components/pages/Course'
import Lesson from './components/pages/Lesson'





export default function App() {
  return (
    <div className='App'>

      <Router>
        <Header/>
        
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/signup" element={<Signup />} />
           <Route exact path="/courses/:courseId" element={<Course />} />
           <Route exact path="/courses/:courseId/lessons/:lessonId" element={<Lesson />} />
           
           
          
        </Routes>
      </Router>

     
        
    </div>
     

  );
}








