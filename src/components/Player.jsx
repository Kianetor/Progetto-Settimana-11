import { useSelector } from 'react-redux'

function Player() {
  const currentTrack = useSelector((state) => state.player.currentTrack)

  if (!currentTrack) return null

  return (
    <div className="now-playing-bar">
      <div className="now-playing-track">
        <img src={currentTrack.cover} alt="" />
        <div>
          <p className="now-playing-title">{currentTrack.title}</p>
          <p className="now-playing-artist">{currentTrack.artist}</p>
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
