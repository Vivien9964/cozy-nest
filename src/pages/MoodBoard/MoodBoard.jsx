import React, { useState } from 'react'
import autumnImages from '../../data/autumnImages';
import ImageGrid from '../../components/moodBoardComponents/ImageGrid';


const MoodBoard = () => {

  const [mood, setMood] = useState('');

  const handleMoodSelect = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
  }

  const moodImages = autumnImages.filter((image) => image.moods.includes(mood));


  return (
    <div>

        <h1>Autumn Mood Board</h1>
        <p>
          Choose your autumn vibe and discover images that match your mood!
          Each mood unlocks a collection of photos that capture that cozy seasonal feeling.
        </p>


        <select value={mood} onChange={handleMoodSelect}>
            <option value="all">All</option>
            <option value="cozy">Cozy</option>
            <option value="warm">Warm</option>
            <option value="halloween">Halloween</option>
            <option value="outdoor">Outdoor</option>
        </select>


      {!moodImages ? (
        <div>
          <ImageGrid images={autumnImages} />
        </div>
      ): (

        <div>
        <ImageGrid images={moodImages} />
        </div>
      )}
 
    </div>
  )
}

export default MoodBoard