import React, { useState } from 'react'
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['React','Ryze']);

  const onAddCategory  = ( newCategory ) => {

    if (categories.includes(newCategory)){
        return;
    }

    setCategories([newCategory,...categories]);
  }

  return (
    /* titulo */
    <>
        <div>GifExpertApp</div>

        <AddCategory onAddCategory = { onAddCategory }  />
        {
            categories.map( (category) => {
            return (
                <GifGrid 
                    key={category} 
                    category={category} />
                )
            })
        }

        {/* Gif Item */}
    </>
    
    
  )
}

export default GifExpertApp