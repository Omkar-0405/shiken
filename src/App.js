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
import { GenerateHallTicket } from './pages/GenerateHallTicket/index'
import { UploadCsv } from './pages/UploadCsv/index'

export const DataToken = createContext();





function App() {


  return (
    <div className="App">
      <DataToken.Provider>
        <Router>
          <Switch>

            {/* public route */}
            <Route exact path="/" ><LoginForm /></Route>

            {/* routes for admin only*/}
            <Route path="/form-status"   > <AdminProtected><ViewAllStudents /></AdminProtected></Route>
            <Route path="/fac_home" ><AdminProtected><FacHome /></AdminProtected></Route>
            <Route path="/hall-ticket"   > <AdminProtected><GenerateHallTicket /></AdminProtected></Route>
            <Route path="/upload-csv"   > <AdminProtected><UploadCsv /></AdminProtected></Route>
            
            {/* routes for verified students only*/}
            <Route path="/stud_home" ><StudProtected><StudHome /></StudProtected></Route>
            <Route path="/form"  > <StudProtected><ExamForm /></StudProtected></Route>
            <Route path="/details"   > <StudProtected><ViewStudentPage /></StudProtected></Route>

          </Switch>
        </Router>
      </DataToken.Provider>
    </div>
  );
}

export default App;
