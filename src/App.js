import { useState } from "react";

const courses = [
  {
    id : 1,
    name : 'JavaScript'
  },
  {
    id : 2,
    name : 'ReactJS'
  },
  {
    id : 3,
    name : 'NodeJS'
  }
]

function App() {
  const   [checked1, setChecked1]  = useState(1)
  
  const   [checked2, setChecked2]  = useState([])

  const handleSubmitRadio = () => {
    console.log(checked1)
    alert(`You have registered course ${JSON.stringify(checked1)}`)
  }
  
  const handleSubmitCheckBox = () => {
    console.log(checked2)
    alert(`You have registered course ${JSON.stringify(checked2)}`)
  }
  
  const handleCheck = (id) => {
    setChecked2(prev => {
      const isChecked = checked2.includes(id)
      if (isChecked) {
        return checked2.filter(item => item !== id)
      } else {
        return [...prev,id]
      }
    })
  }

  return (
    <div style={{padding : 32}}>
      {courses.map(course => (
          <div key = {course.id}>
            <input 
              type = 'radio' 
              checked = {checked1 === course.id}
              onChange={() => setChecked1(course.id)}
            />
            {course.name}
          </div>
        )) }
      <button onClick={handleSubmitRadio}>Register</button>
      
      {courses.map(course => (
          <div key = {course.id}>
            <input 
              type = 'checkbox' 
              checked = {checked2.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
      <button onClick={handleSubmitCheckBox}>Register</button>
    </div>
  );
}

export default App;
