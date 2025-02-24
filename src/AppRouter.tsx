import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App'
import Animados from './Components/Animados'
import Series from './Components/Series'
import Peliculas from './Components/Peliculas'
import Juegos from './Components/Juegos'
import Novelas from './Components/Novelas'

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/*' element={<App />} />
            <Route path='/animados' element={<Animados />} />
            <Route path='/series' element={<Series />} />
            <Route path='/peliculas' element={<Peliculas />} />
            <Route path='/novelas' element={<Novelas />} />
            <Route path='/juegos' element={<Juegos />} />
        </Routes>
    </Router>
  )
}

export default AppRouter;