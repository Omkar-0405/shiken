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
import { createContext, useContext } from "react";

import { GenerateHallTicket } from "./pages/GenerateHallTicket/index";
import { UploadCsv } from "./pages/UploadCsv/index";
import AddSubj from "./containers/AddStudentSubj/AddSubj";
import ProtectedRoutes from "./ProtectedRoutes";

import { Context } from "./context/context";
import Illustration from "./assets/Illustration";

export const DataToken = createContext();

function App() {
  const { state, dispatch } = useContext(Context);

  return (
    <div className="App">
      <DataToken.Provider>
        <Router>
          <Switch>
            {/* public route */}
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route path="/404error">
              {" "}
              <Illustration />
            </Route>
            {/* Admin routes*/}

            <ProtectedRoutes
              strict
              path="/form-status"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={ViewAllStudents}
            />

            <ProtectedRoutes
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              path="/fac_home"
              component={FacHome}
            />

            <ProtectedRoutes
              strict
              path="/hall-ticket"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={GenerateHallTicket}
            />
            <ProtectedRoutes
              strict
              path="/upload-csv"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={UploadCsv}
            />
            <ProtectedRoutes
              strict
              path="/addsubj"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={AddSubj}
            />
            <ProtectedRoutes
              exact
              path="/student/:slug"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={ViewStudentPage}
            />

            {/* Student Routes*/}
            <ProtectedRoutes
              strict
              path="/stud_home"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={StudHome}
            />
            <ProtectedRoutes
              strict
              path="/form"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={ExamForm}
            />
            <ProtectedRoutes
              exact
              path="/details"
              userType={state?.auth?.userType}
              isAuth={state?.auth?.isAuthenticated}
              component={ViewStudentPage}
            />

            {/* Error Page       */}
            <Redirect to="404error" />
          </Switch>
        </Router>
      </DataToken.Provider>
    </div>
  );
}

export default App;
