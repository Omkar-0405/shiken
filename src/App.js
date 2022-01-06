import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import LoginForm from "./containers/login/LoginForm";
import ViewStudentPage from "./pages/ViewStudentPage/ViewStudentPage";
import ExamForm from "./pages/ExamForm";
import ViewAllStudents from "./pages/ViewAllStudentsPage";
import StudHome from "./containers/home/StudentHome/Home";
import FacHome from "./containers/home/FacultyHome/FacHome";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";

import { GenerateHallTicket } from "./pages/GenerateHallTicket/index";
import { UploadCsv } from "./pages/UploadCsv/index";
import AddSubj from "./containers/AddStudentSubj/AddSubj";
import ProtectedRoute from "./routers/ProtectedRoute";

export const DataToken = createContext();

function App() {
  return (
    <div className="App">
      <DataToken.Provider>
        <Router>
          <Switch>
            {/* public route */}
            <Route exact path="/">
              <LoginForm />
            </Route>

            {/* routes for admin only*/}
            <Route path="/form-status">
              <ProtectedRoute component={ViewAllStudents} />
            </Route>

            <Route path="/fac_home">
              <ProtectedRoute component={FacHome} />
            </Route>

            <Route path="/hall-ticket">
              <ProtectedRoute component={GenerateHallTicket} />
            </Route>

            <Route path="/upload-csv">
              <ProtectedRoute component={UploadCsv} />
            </Route>

            <Route path="/addsubj">
              <ProtectedRoute component={AddSubj} />
            </Route>

            <Route path="/student/:slug">
              <ProtectedRoute component={ViewStudentPage} />
            </Route>

            {/* routes for verified students only*/}
            <Route path="/stud_home">
              <ProtectedRoute component={StudHome} />
            </Route>

            <Route path="/form">
              <ProtectedRoute component={ExamForm} />
            </Route>

            <Route exact path="/details">
              <ProtectedRoute component={ViewStudentPage} />
            </Route>
          </Switch>
        </Router>
      </DataToken.Provider>
    </div>
  );
}

export default App;
