import SearchBar from './SearchBar'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand">MusiCode</div>
        <nav className="sidebar-nav">
          <a href="#">Home</a>
          <a href="#">Your Library</a>
        </nav>
        <SearchBar />
      </div>
      <div className="sidebar-bottom">
        <button type="button" className="btn btn-outline">Sign Up</button>
        <button type="button" className="btn btn-filled">Login</button>
      </div>
    </aside>
  )
}

export default Sidebar
