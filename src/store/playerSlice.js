export const SET_CURRENT_TRACK = 'player/SET_CURRENT_TRACK'

export const setCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
})

const initialState = {
  currentTrack: null,
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack: action.payload }
    default:
      return state
  }
}
