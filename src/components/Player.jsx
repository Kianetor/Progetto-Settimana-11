import { useSelector } from 'react-redux'

function Player() {
  const currentTrack = useSelector((state) => state.player.currentTrack)

  return (
    <div className="now-playing-bar">
      <div className="now-playing-track">
        {currentTrack ? (
          <img src={currentTrack.cover} alt="" />
        ) : (
          <div className="now-playing-cover-placeholder" aria-hidden="true">
            <i className="bi bi-plus-lg"></i>
          </div>
        )}
        <div>
          <p className="now-playing-title">
            {currentTrack ? currentTrack.title : 'Nessuna traccia'}
          </p>
          <p className="now-playing-artist">
            {currentTrack ? currentTrack.artist : 'Seleziona un brano'}
          </p>
        </div>
      </div>
      <div className="now-playing-center">
        <div className="now-playing-controls" aria-hidden="true">
          <i className="bi bi-shuffle"></i>
          <i className="bi bi-skip-start-fill"></i>
          <i className="bi bi-play-fill play"></i>
          <i className="bi bi-skip-end-fill"></i>
          <i className="bi bi-arrow-repeat"></i>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  )
}

export default Player
