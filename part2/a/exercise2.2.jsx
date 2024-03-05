import { useState } from "react"

const Part = ({name, exercises}) => (
  <div>
    <p>{name} {exercises}</p>
  </div>
)

const Content = ({parts}) => {
  const total = 0

  return (
    <div>
      {parts.map(part => 
        <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
      )}
    </div>
  )
}

const Header = ({header}) => (
  <div>
    <h1>{header}</h1>
  </div>
)

const Course = ({course}) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
  <div>
    <Header header = {course.name}/>
    <Content parts = {course.parts}/>
    <p>Total exercises: {totalExercises}</p>
  </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
