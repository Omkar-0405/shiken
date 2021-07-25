import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./containers/home/Home";
import LoginForm from "./containers/login/LoginForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginForm} />
          
          LoginForm
        </Switch>
      </Router>
    </div>
  );
}

export default App;
