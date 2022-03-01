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
import AdminProtectedRoute from "./routers/AdminProtectedRoute";
import StudentProtectedRoute from "./routers/StudentProtectedRoute";
import { EncryptObjectData } from "./utils/Hash/Hash";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* public route */}
          <Route exact path="/">
            <LoginForm />
          </Route>

          {/* routes for admin only*/}

          <AdminProtectedRoute
            exact
            path="/form-status"
            component={ViewAllStudents}
          />

          <AdminProtectedRoute exact path="/fac_home" component={FacHome} />

          <AdminProtectedRoute
            exact
            path="/hall-ticket"
            component={GenerateHallTicket}
          />

          <AdminProtectedRoute exact path="/upload-csv" component={UploadCsv} />

          <AdminProtectedRoute exact path="/addsubj" component={AddSubj} />

          <AdminProtectedRoute
            exact
            path="/student/:slug"
            component={ViewStudentPage}
          />

          {/* routes for verified students only*/}

          <StudentProtectedRoute exact path="/stud_home" component={StudHome} />

          <StudentProtectedRoute exact path="/form" component={ExamForm} />

          <StudentProtectedRoute
            exact
            path="/details"
            component={ViewStudentPage}
          />
          <Redirect to={"/"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
