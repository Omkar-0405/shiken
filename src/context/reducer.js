import Types from "./types";
export const initialState = {
  auth: {
    isAuthenticated: false, //i.e if token avaliable
    userType: "student",
    token: "null",
  },
  user: {
    // faculty data -
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
    //
    // Student res-
    // Address: "D-505 PANCHAVATI CHS ,SEC -5 ,GHANSOLI, NAVI MUMBAI-400701"
    // Branch: "comps"
    // Category: "GENERAL"
    // Dob: "2000-12-10T00:00:00.000Z"
    // Email: "harshdeshmukh9915@gmail.com"
    // Father_Name: "LOKESH"
    // First_Name: "HARSH"
    // Gender: "MALE"
    // Last_Name: ""
    // Mobile_No: 8850534266
    // Mother_Name: "AKANSHA"
    // Password: "$2b$10$JSWXZBZfYkr2lIdjnJIXD.RajvRwMSEZolE8oa/vFDBySJBrRmWDi"
    // Photograph: "something"
    // Role: "student"
    // Roll_No: "123"
    // Specialization: "ds"
    // createdAt: "2021-09-23T07:35:24.000Z"
    // updatedAt:
  },
  examform: {
    formStatus: 0, // 0 - null , 1- Awaiting for Approval , 2 - verified
    statusMessage: null, // "Awaiting for Approval"
    Seat_No: null,
    // verifaction status and other data
    // res after submit=
    //  data:
    // Department: " computer "
    // Elective: "IP"                         <---
    // Email: "krushna.dahake.01@gmail.com"
    // Father_Name: "Krushna"
    // First_Name: "Krushna"
    // Form_Status: "Awaiting for Approval"  <---
    // Last_Name: "Krushna"
    // Mobile_No: "0000000000"
    // Mother_Name: "Krushna"
    // Roll_No: "12"
    // Seat_No: null                        <---
    // Sem: "1"
    // Year: "TE"
    // createdAt: "2022-01-04T18:16:31.211Z"
    // id: 3
    // updatedAt: "2022-01-04T18:16:31.21
  },
  studentList: [],
  verifiedList: [], //for faculty to send verified list
  filter: {
    semester: null,
    // 1/2/3.../8
    department: null,
    //CE/EXCT/IT/...
  }, // for using it in all other compo for updating data!
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        user: action.payload.user,
      };

    case Types.LOGIN_FACULTY:
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: Boolean(action?.payload?.token) ?? false,
          userType: action?.payload?.faculty?.Role ?? null,
          token: action?.payload?.token,
        },
        user: { ...action?.payload?.faculty },
      };
    case Types.LOGIN_STUDENT:
      return {
        ...state,
        auth: {
          // ...state.auth,
          isAuthenticated: Boolean(action?.payload?.token),
          userType: action?.payload?.student?.Role ?? null,
          token: action?.payload?.token,
        },
        user: { ...action?.payload?.student },
      };

    case Types.LOGIN_FAILED:
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
          userType: "student",
          token: null,
        },
        user: {},
      };

    case Types.LOGOUT:
      localStorage.clear();
      return initialState;

    case Types.APPLY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          semester: action.payload?.semester ?? null,
          department: action.payload?.department ?? null,
        },
      };
    case Types.POST_EXAM_FORM_SUCESS:
      return {
        ...state,
        examform: {
          ...state.examform,
          formStatus: action.payload?.formStatus, // 0 - null , 1- Awaiting for Approval , 2 - verified
          statusMessage: action.payload?.statusMessage,
        },
      };
    case Types.POST_EXAM_FORM_FAIL:
      return {
        ...state,
        examform: {
          ...state.examform,
          Form_Status: null, // "Awaiting for Approval"  // msg
          Seat_No: null,
        },
      };
    case Types.GET_ALL_STUDENTS_BY_SEM:
      return {
        ...state,
        studentList: [...state.studentList, "abc"],
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
