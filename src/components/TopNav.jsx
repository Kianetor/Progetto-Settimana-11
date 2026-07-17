const links = ['Trending', 'Podcast', 'Moods and genres', 'New releases', 'Discover']

function TopNav() {
  return (
    <nav className="top-nav">
      {links.map((label) => (
        <a href="#" key={label}>
          {label}
        </a>
      ))}
    </nav>
  )
}

export default TopNav
