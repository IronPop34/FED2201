import "./App.css";
import ButtonCounter from "./components/week12-day1/ButtonCounter";
import ButtonCounterTwo from "./components/week12-day1/ButtonCounterTwo";
import RandomNumber from "./components/week12-day2/RandomNumber";
import FuncRandomNumber from "./components/week12-day2/FuncRandomNumber";

function App() {
  return (
    <div className="App">
      <h1>Hello FED 2201</h1>

      {/* <div className="day-section">

        <h2> Week 12 Day 1 - React Intro</h2>
        <ButtonCounter increment="" decrement="" />
        <ButtonCounterTwo increment="Plus 1" decrement="Minus One" />
      </div> */}

      <div className="day-section">

        <h2> Week 12 Day 2 - React Lifecycle</h2>
        <RandomNumber maxNumber="5"/>
        {/* <RandomNumber maxNumber="100"/>
        <RandomNumber maxNumber="499"/> */}

        <FuncRandomNumber maxNumber="10" />
      </div>
    </div>
  );
}

export default App;
