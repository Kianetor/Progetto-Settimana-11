export const SEARCH_PENDING = 'search/PENDING'
export const SEARCH_SUCCESS = 'search/SUCCESS'
export const SEARCH_FAILURE = 'search/FAILURE'
export const CLEAR_SEARCH = 'search/CLEAR'

export const clearSearch = () => ({ type: CLEAR_SEARCH })

// action creator asincrona ("thunk"): invece di restituire un oggetto azione,
// restituisce una funzione. redux-thunk intercetta questa funzione e la
// esegue passandole dispatch, così può fare la fetch e poi dispatchare
// azioni "normali" quando la risposta arriva.
export const fetchSearch = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_PENDING, payload: query })

  try {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
        encodeURIComponent(query),
    )
    if (!response.ok) {
      throw new Error('Ricerca non riuscita')
    }
    const body = await response.json()
    const results = body.data.map((track) => ({
      id: track.id,
      title: track.title,
      artist: track.artist.name,
      cover: track.album.cover_medium,
    }))
    dispatch({ type: SEARCH_SUCCESS, payload: results })
  } catch {
    dispatch({ type: SEARCH_FAILURE })
  }
}

const initialState = {
  query: '',
  results: [],
  status: 'idle',
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PENDING:
      return { ...state, status: 'loading', query: action.payload }
    case SEARCH_SUCCESS:
      return { ...state, status: 'succeeded', results: action.payload }
    case SEARCH_FAILURE:
      return { ...state, status: 'failed', results: [] }
    case CLEAR_SEARCH:
      return initialState
    default:
      return state
  }
}
