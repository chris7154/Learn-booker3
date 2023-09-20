import React from 'react'
import courses from '../../courses'
import CourseSummary from '../CourseSummary'
import './classes.css';

function Primarytwo() {
  return (
    <div className='Home page'>

      <header>
        <h1>Online finance course</h1>
      </header>
      {courses.map((course) => (
        <CourseSummary course = {course} key = {course.id} />
      )

      )}

    </div>
  )
  
}

export default Primarytwo