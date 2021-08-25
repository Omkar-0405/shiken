import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./containers/home/Home";
import LoginForm from "./containers/login/LoginForm";
import ViewStudentPage from "./pages/ViewStudentPage/ViewStudentPage";
import ExamForm from "./pages/ExamForm";
import ViewAllStudents from "./pages/ViewAllStudentsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
           {/* public route */}
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/form"  component={ExamForm} /> 
          <Route path="/details"  component={ViewStudentPage} /> 
          <Route path="/form-status"  component={ViewAllStudents} /> 
          {/* route of id of particular student for verification and edit */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
