import React from 'react'
import ImagesShow from './ImagesShow';
import './ImagesList.css'
const ImagesList = ({ images }) => {
    // console.log(images);
  return (
      <div className="img-list">
          {images.map((image) => ( 
              <ImagesShow image={image} key={image.id} />
          ))}
      </div>
  )
}

export default ImagesList