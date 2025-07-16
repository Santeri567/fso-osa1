const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
} 

const Content = (props) => {
  return (
    <>
    <Part prt={props.prt1} ex={props.ex1}></Part>
    <Part prt={props.prt2} ex={props.ex2}></Part>
    <Part prt={props.prt3} ex={props.ex3}></Part>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of excercises {props.ex1+props.ex2+props.ex3}</p>
    </>
  )
}

const Part = (props) => (<p>{props.prt} {props.ex}</p>)


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} ></Header>
      <Content 
        prt1={part1} 
        prt2={part2} 
        prt3={part3}
        ex1={exercises1}
        ex2={exercises2}
        ex3={exercises3}  
      ></Content>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}></Total>
    </div>
  )
}

export default App