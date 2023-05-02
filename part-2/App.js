const App = () => (
  <div>
    <Tweet
      username="LauLau"
      name="Lauren"
      date="Apr 29, 2023"
      message="My first tweet"
    />
    <Tweet
      username="benny"
      name="Ben"
      date="Apr 27, 2023"
      message="This is cool"
    />
    <Tweet
      username="heyhey"
      name="Moana"
      date="Apr 3, 2023"
      message="Open seas ahead"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
