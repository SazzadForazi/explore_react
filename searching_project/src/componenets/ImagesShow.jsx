import React from 'react'

const ImagesShow = ({image}) => {
  return (
      <img src={image.urls.small} alt={image.alt_description} />
      
  )
}

export default ImagesShow