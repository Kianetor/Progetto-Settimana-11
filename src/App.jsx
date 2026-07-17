import { useSelector } from 'react-redux'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import TopNav from './components/TopNav'
import BottomBar from './components/BottomBar'
import Category from './components/Category'
import Player from './components/Player'
import { rockClassics, popCulture, hipHop } from './data/mockTracks'
import './App.css'

function App() {
  const { results, status } = useSelector((state) => state.search)

  return (
    <div id="app">
      <Sidebar />
      <div className="main-column">
        <MobileHeader />
        <div className="page-content">
          <TopNav />
          <main className="content">
            {status === 'loading' && <p className="search-status">Cerco...</p>}
            {status === 'failed' && (
              <p className="search-status">Ricerca non riuscita, riprova.</p>
            )}
            {results.length > 0 && (
              <Category title="Search Results" tracks={results} />
            )}
            <Category title="Rock Classics" tracks={rockClassics} />
            <Category title="Pop Culture" tracks={popCulture} />
            <Category title="Hip Hop" tracks={hipHop} />
          </main>
        </div>
        <div className="bottom-dock">
          <Player />
          <BottomBar />
        </div>
      </div>
    </div>
  )
}

export default App
