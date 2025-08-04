import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav>
        <ul>

            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/moodboard'}>Mood Board</Link></li>
            <li><Link to={'/planner'}>Cozy Planner</Link></li>
            <li><Link to={'/recipes'}>Fall Recipes</Link></li>
            <li><Link to={'/countdown'}>Events</Link></li>
    
        </ul>
        </nav>
    </div>
  )
}

export default Navbar