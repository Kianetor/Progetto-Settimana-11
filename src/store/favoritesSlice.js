export const TOGGLE_FAVORITE = 'favorites/TOGGLE_FAVORITE'

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
})

const initialState = {
  ids: [],
}

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const id = action.payload
      const alreadyFavorite = state.ids.includes(id)
      return {
        ...state,
        ids: alreadyFavorite
          ? state.ids.filter((favoriteId) => favoriteId !== id)
          : [...state.ids, id],
      }
    }
    default:
      return state
  }
}
