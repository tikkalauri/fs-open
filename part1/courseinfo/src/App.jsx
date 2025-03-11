const Header = (props) => {
  const course = props.course;

  return (
    <div>
      <h1>{course.name}</h1>
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
  const course = props.course;
  return(
    <div>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>
  );
};

const Total = (props) => {
  const course = props.course;
  return (
    <section>
      <p>Total number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </section>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  };

  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  );
};

export default App;