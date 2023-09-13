import React from "react";
import './Home.css'

import CourseSummary from '../CourseSummary'
import courses from "../../courses";
//import "./pages/Sign up.css";

function Home() {
    return(
        <>
          <div className="Home page">
            <header>
              
              <h1>Choose a Class</h1>
            </header>
            {
              courses.map((course)=>(
               <CourseSummary course={course} key={course.id}/> 
              ))
            }
          </div>
        </>
    )
}

export default Home;