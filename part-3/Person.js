const Person = (props) => {
  let reply;
  if (props.age < 18) {
    reply = "You must be 18";
  } else {
    reply = "Please go vote!";
  }

  let nameDisplay;
  if (props.name.length > 8) {
    nameDisplay = props.name.slice(0, 6);
  } else {
    nameDisplay = props.name;
  }

  return (
    <div>
      <h3> {reply} </h3>
      <p> Learn some more information about {nameDisplay} </p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <ul>
        <b>Hobbies</b>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
