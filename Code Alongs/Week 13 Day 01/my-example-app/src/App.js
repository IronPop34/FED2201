import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";

import "./App.css";
import ButtonCounter from "./components/week12-day1/ButtonCounter";
import ButtonCounterTwo from "./components/week12-day1/ButtonCounterTwo";
import RandomNumber from "./components/week12-day2/RandomNumber";
import FuncRandomNumber from "./components/week12-day2/FuncRandomNumber";
import Day from "./components/week13/HOC/Day";
import Home from "./components/week13/Home";
import Lists from "./components/week13/Lists";
import Ajax from "./components/week13/Ajax";
import NotFound from "./components/week13/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello FED 2201</h1>

        <div className="navigation">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/lists">Lists</Link>
            <Link to="/ajax">AJAX</Link>
          </nav>
        </div>

        {/* <Day title="Week 12 Day 1 - React Intro" />
      <ButtonCounter increment="" decrement="" />
      <ButtonCounterTwo increment="Plus 1" decrement="Minus One" />

      <Day title="Week 12 Day 2 - React Lifecycle" />
      <RandomNumber maxNumber="499" />
    <FuncRandomNumber maxNumber="10" /> */}

        <Day title="Week 13 Day 1 - React Routing and Lists" />
        <Switch>
          <Route path="/" element={<Home />} />

          <Route path="/lists/*" element={<Lists />} />

          <Route path="/ajax" element={<Ajax />} />

          <Route path="/*" element={<NotFound />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
