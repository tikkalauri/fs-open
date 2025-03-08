const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <section>
      <p>{props.name} {props.exercises}</p>
    </section>
  );
};

const Content = (props) => {
  const parts = props.parts;

  return(
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  );
};

const Total = (props) => {
  const parts = props.parts;

  return (
    <section>
      <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </section>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <>
      <Header title={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
  );
};

export default App;