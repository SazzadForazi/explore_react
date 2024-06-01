import { useState } from 'react'
import SearchBar from './componenets/SearchBar'
import searchImages from './componenets/api'
import ImagesList from './componenets/ImagesList'
const App = () => {
    const [images, setImages]=useState([])
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        console.log(result);
        setImages(result)
    }
  return (
      <>
          <SearchBar onSubmit={handleSubmit} />
          <ImagesList images={images} />
      </>
  )
}

export default App