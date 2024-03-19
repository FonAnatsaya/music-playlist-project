import { reducerCases } from "./reducerCases";

export const initialState = {
  token: null,
  playlists: [],
  userProfile: null,
  selectedPlaylistID: "5QYbviISWqVYQPoecd1ku1",
  selectedPlaylist: null,
  currentPlaying: null,
  playerState: false,
  deviceID: null,
  shuffleState: false,
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
    case reducerCases.SET_PLAYING:
      return {
        ...state,
        currentPlaying: action.currentPlaying,
      };
    case reducerCases.SET_PLAYER_STATE:
      return {
        ...state,
        playerState: action.playerState,
      };
    case reducerCases.SET_DEVICE_ID:
      return {
        ...state,
        deviceID: action.deviceID,
      };
    case reducerCases.SET_SHUFFLE_STATE:
      return {
        ...state,
        shuffleState: action.shuffleState,
      };
    default:
      return state;
  }
};

export default reducer;
