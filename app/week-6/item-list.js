'use client';
import { useState } from 'react';

import { Item } from "./item"



//                        prop
export function ItemList({items}) {


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
  return [...itemsArray].map(item => <li key={item.id}><Item {...item}/></li>);
 }
 
 





    return (
      
      <div>
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

