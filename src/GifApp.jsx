import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"


const GifApp = () => {

  const [ categories, setCategories ] = useState(['One Pounch'])

  const onAddCategory = (setUpCategory) => {

    if(categories.includes(setUpCategory)) return;

    setCategories( [...categories, setUpCategory])
  }

  []


  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onAddCategory={onAddCategory} />
      {categories.map( category => <GifGrid key={ category } category={category} />)}

    </>
  )
}

export default GifApp
