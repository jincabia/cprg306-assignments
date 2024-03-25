'use client';
import { useState } from 'react';

import { Item } from "./item"



//                        prop
export default function ItemList({items, onClickItem}) {


  //state var
    const [sortBy,setSortBy] = useState("name");
    

    

  //event handler
  const sortByName = () => {
    setSortBy("name")
  }
  //event handler

  const sortByCategory = () => {
    setSortBy("category")
  }

  
  
  //event handler

 const printSorted = () =>
 {
  // const sliceItems = itemsData.slice();


  //referencing the prop from above
  const itemsArray = [...items]
  

  
  const clicked = (item) =>
  {
    // console.log(item)
    onClickItem(item)
  }

  if (sortBy =="name")
  {
    //sorts
    itemsArray.sort((a,b) => a.name.localeCompare(b.name));
  }
  else if (sortBy =="category") 
  {
    itemsArray.sort((a,b) => a.category.localeCompare(b.category));
  }

  //mapping
  return [...itemsArray].map(item => <li  key={item.id} onClick={() => clicked(item.name)}><Item {...item}  /></li>);
 }
 


 





    return (
      
      <div className='p-2 m-2'>
        <p>Sort By:</p>
        <button onClick={sortByName}
        className='p-2 m-2 bg-red-500'
        > Name
        </button>
        <button onClick={sortByCategory}
        className='p-2 m-2 bg-red-500'
        > Category
        </button>
        

        <ol>{printSorted()}</ol>

      </div>
      

      
    );
  }

