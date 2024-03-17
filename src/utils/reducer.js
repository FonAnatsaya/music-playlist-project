import { reducerCases } from "./reducerCases";

export const initialState = {
  token: null,
  playlists: [],
  userProfile: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_PLAYLISTS: {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case reducerCases.SET_USERPROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
      };
    }
    default:
      return state;
  }
};

export default reducer;
