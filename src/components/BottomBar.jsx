const tabs = [
  { label: 'Home', icon: 'bi-house-door' },
  { label: 'Search', icon: 'bi-search' },
  { label: 'Library', icon: 'bi-music-note-list' },
]

function BottomBar() {
  return (
    <nav className="bottom-tab-bar">
      {tabs.map((tab) => (
        <button type="button" className="tab" key={tab.label}>
          <i className={`bi ${tab.icon} tab-icon`} aria-hidden="true"></i>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default BottomBar
