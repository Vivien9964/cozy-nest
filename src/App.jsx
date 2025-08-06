import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MoodBoard from './pages/MoodBoard/MoodBoard'
import FallRecipes from './pages/FallRecipes/FallRecipes'
import AutumnPlanner from './pages/AutumnPlanner/AutumnPlanner'
import AutumnCountDown from './pages/AutumnEvents/AutumnCountDown'
import Navbar from './components/Navbar'
import TaskProvider from './context/TaskContext'



function App() {

  return (
    <>

      <TaskProvider>
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
      </TaskProvider>
     
    </>
  )
}

export default App
