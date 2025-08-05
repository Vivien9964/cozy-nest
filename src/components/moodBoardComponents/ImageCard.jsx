import React from 'react'

const ImageCard = ({ imageID, imageUrl, altText, mood }) => {



  return (
    <div style={{ width: '100%'}}>
        <img style={{width: '100%', height: 'auto'}}  src={imageUrl} alt={altText} />
        <p>Description: {altText}</p>

        <ul>
            {mood.map((moods, index) => {
                return <li key={`${imageID}-${index}`}>{moods}</li>
            })}
        </ul>
    </div>
  )
}

export default ImageCard