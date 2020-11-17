import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./tailwind.output.css";

import Home from "./Home";
import Timer from "./timer/Timer";

function App() {
  return (
    <div>
      <Router>
        <nav className="shadow-sm px-8 py-3 border-b border-gray-300">
          <Link to="/">ReactPlay</Link>
        </nav>
        <main className="container mx-auto pt-3">
          <Switch>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
