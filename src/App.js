import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';

import LoginForm from "./containers/login/LoginForm";
import ViewStudentPage from "./pages/ViewStudentPage/ViewStudentPage";
import ExamForm from "./pages/ExamForm";
import ViewAllStudents from "./pages/ViewAllStudentsPage";
import StudHome from "./containers/home/StudentHome/Home";
import FacHome from "./containers/home/FacultyHome/FacHome";
import StudProtected from "./routers/ProtectedRoutes/StudProtected";
import 'react-toastify/dist/ReactToastify.css';
import AdminProtected from "./routers/ProtectedRoutes/AdminProtected";
import { createContext } from "react";

export const DataToken = createContext();


function App() {
  
  
  return (
    <div className="App">
     <DataToken.Provider>
      <Router>
        <Switch>
         
           {/* public route */}
          <Route path="/fac_home" ><AdminProtected><FacHome/></AdminProtected></Route>
          <Route path="/details"   > <StudProtected><ViewStudentPage/></StudProtected></Route>
          <Route path="/form-status"   > <AdminProtected><ViewAllStudents/></AdminProtected></Route>

          <Route exact path="/" ><LoginForm/></Route>

          <Route path="/stud_home" ><StudProtected><StudHome/></StudProtected></Route>
          <Route path="/form"  > <StudProtected><ExamForm/></StudProtected></Route>
          
          {/* route of id of particular student for verification and edit */}
        </Switch>
      </Router>
      </DataToken.Provider>
    </div>
  );
}

export default App;
