import { reducerCases } from "./reducerCases";

export const initialState = {
  token: null,
  playlists: [],
  userProfile: null,
  selectedPlaylistID: "5QYbviISWqVYQPoecd1ku1",
  selectedPlaylist: null,
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
    case reducerCases.SET_PLAYLIST_ID:
      return {
        ...state,
        selectedPlaylistID: action.selectedPlaylistID,
      };
    case reducerCases.SET_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    default:
      return state;
  }
};

export default reducer;
