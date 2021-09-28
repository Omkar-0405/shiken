import Types from './types'
export const initialState = {
    isAuthenticated: false,     
    //i.e if token avaliable 
    userType: "student",
    user: {
        // sdrn: "123",
        // password: "Dypatil@100",
        // role: "teacher"  etc
    },
    verifiedList:[]    
    //for faculty to send verified list
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                userType: action.payload.userType
            };

        case Types.LOGIN_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                userType: "student"
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
                user: action.payload.user
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

