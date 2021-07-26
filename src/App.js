import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./containers/home/Home";
import LoginForm from "./containers/login/LoginForm";
import { ViewForm } from "./containers/viewForm/ViewForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           {/* public route */}
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/details"  component={ViewForm} /> 
          {/* route of id of particular student for verification and edit */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
