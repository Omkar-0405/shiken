import Types from "./types";
export const initialState = {
  isAuthenticated: false, //i.e if token avaliable
  userType: "student",
  user: {
    //     Addr: "401,'A' wing arihant shopping complex,dhamankarnaka, bhiwandi- 421305"
    // Contact_no: 9076129359
    // DOB: "2000-12-10T00:00:00.000Z"
    // Department: "Computer"
    // Desig: "heck"
    // Doj: "2017-08-01T00:00:00.000Z"
    // Email: "jayghayar2000@gmail.com"
    // First_name: "JAY"
    // Last_name: "GHAYAR"
    // Middle_name: "SHAFEEN"
    // OTP: 123
    // Password: "$2b$10$bp/Z7gNOT2051sLz3LCXuueAx.Exk1qIRG6iqIISuIHtVgFyZOe4u"
    // Qualification: "BE"
    // Role: "Faculty"
    // Sdrn: 123
    // createdAt: "2021-09-23T07:07:23.000Z"
    // id: 124
    // updatedAt: "2021-09-23T07:07:23.000Z"
  },

  studentList: [],
  verifiedList: [], //for faculty to send verified list
  filter: [], // for using it in all other compo for updating data!
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        user: action.payload.user,
      };

    case Types.LOGIN:
      return {
        ...state,
        isAuthenticated: Boolean(action?.payload?.token) ?? false,
        userType: action?.payload?.faculty.Role ?? null,
        user: { ...action?.payload?.faculty },
      };

    case Types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        userType: "student",
      };

    case Types.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        // userType: null
      };
    case Types.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case Types.VERIFY:
      return {
        ...state,
        //    user: {...user, verified: action.payload.user}
      };

    case Types.VERIFY_ALL:
      return {
        ...state,
        // verifiedList :[...verifiedList, action.payload.user]
      };
    default:
      return state;
  }
};
