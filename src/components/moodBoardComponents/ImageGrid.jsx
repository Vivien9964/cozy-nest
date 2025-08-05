import React from 'react'
import ImageCard from './ImageCard'

const ImageGrid = ({ images }) => {

  return (
    <div>

        {images.map((image) => {
            return <ImageCard 
                        key={image.id} 
                        imageID={image.id} 
                        imageUrl={image.url} 
                        altText={image.alt} 
                        mood={image.moods}
                    />
        })}

    </div>
  )
}

export default ImageGrid