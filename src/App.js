import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import LoginForm from "./containers/login/LoginForm";
import ViewStudentPage from "./pages/ViewStudentPage/ViewStudentPage";
import ExamForm from "./pages/ExamForm";
import ViewAllStudents from "./pages/ViewAllStudentsPage";
import StudHome from "./containers/home/StudentHome/Home";
import FacHome from "./containers/home/FacultyHome/FacHome";
import Protected from "./routers/Protected";


function App() {
  
  
  return (
    <div className="App">
     
      <Router>
        <Switch>
           {/* public route */}
           <Route path="/fac_home" ><Protected><FacHome/></Protected></Route>
          <Route path="/stud_home" ><Protected><StudHome/></Protected></Route>
          <Route exact path="/login" ><LoginForm/></Route>
          <Route path="/form"  > <Protected><ExamForm/></Protected></Route>
          <Route path="/details"   > <Protected><ViewStudentPage/></Protected></Route>
          <Route path="/form-status"   > <Protected><ViewAllStudents/></Protected></Route>
          {/* route of id of particular student for verification and edit */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
