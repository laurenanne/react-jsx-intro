const App = () => (
  <div>
    <Person
      name="Lauren"
      age={19}
      hobbies={["tennis", "walking", "knitting"]}
    />
    <Person name="Alexandra" age={10} hobbies={["pottery", "glass blowing"]} />
    <Person name="Gail" age={30} hobbies={["foodie", "guitar"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
