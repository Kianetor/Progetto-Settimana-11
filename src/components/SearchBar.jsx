import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearch, clearSearch } from '../store/searchSlice'

function SearchBar() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter') return
    const query = value.trim()
    if (query) {
      dispatch(fetchSearch(query))
    } else {
      dispatch(clearSearch())
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="search-go" onClick={() => handleKeyDown({ key: 'Enter' })}>
        GO
      </button>
    </div>
  )
}

export default SearchBar
