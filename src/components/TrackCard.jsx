import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../store/favoritesSlice'
import { setCurrentTrack } from '../store/playerSlice'

function TrackCard({ track }) {
  const dispatch = useDispatch()
  const isFavorite = useSelector((state) => state.favorites.ids.includes(track.id))

  return (
    <div className="track-card">
      <button
        type="button"
        className="track-cover-btn"
        onClick={() => dispatch(setCurrentTrack(track))}
      >
        <img src={track.cover} alt="" loading="lazy" />
      </button>
      <p className="track-title">Track: "{track.title.slice(0, 14)}{track.title.length > 14 ? '...' : ''}"</p>
      <p className="track-artist">Artist: {track.artist}</p>
      <button
        type="button"
        className={`track-favorite${isFavorite ? ' is-favorite' : ''}`}
        aria-label="Toggle favorite"
        onClick={() => dispatch(toggleFavorite(track.id))}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </div>
  )
}

export default TrackCard
