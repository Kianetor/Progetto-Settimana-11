import TrackCard from './TrackCard'

function Category({ title, tracks }) {
  return (
    <section className="category-section">
      <h2>{title}</h2>
      <div className="category-grid">
        {tracks.map((track) => (
          <TrackCard track={track} key={track.id} />
        ))}
      </div>
    </section>
  )
}

export default Category
