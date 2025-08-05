import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MoodBoard from './pages/MoodBoard/MoodBoard'
import FallRecipes from './pages/FallRecipes/FallRecipes'
import AutumnPlanner from './pages/AutumnPlanner/AutumnPlanner'
import AutumnCountDown from './pages/AutumnEvents/AutumnCountDown'
import Navbar from './components/Navbar'



function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/moodboard' element={<MoodBoard />}/>
          <Route path='/planner'  element={<AutumnPlanner />}/>
          <Route path='/recipes'  element={<FallRecipes />}/>
          <Route path='/countdown'  element={<AutumnCountDown />} />
        </Routes>
      </Router>
     
    </>
  )
}

export default App
