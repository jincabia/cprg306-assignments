'use client';
import { useState } from 'react';

import { Item } from "./item"




export function ItemList({items}) {

    const [sortBy,setSortBy] = useState("name");

    

  const sortByName = () => {
    setSortBy("name")
  }

  const sortByCategory = () => {
    setSortBy("category")
  }

  
  

 const printSorted = () =>
 {

  // const sliceItems = itemsData.slice();
  const itemsArray = [...items]
  

  
  
  if (sortBy =="name")
  {
    
    itemsArray.sort((a,b) => a.name.localeCompare(b.name));
  }
  else if (sortBy =="category") 
  {
    itemsArray.sort((a,b) => a.category.localeCompare(b.category));
  }

  
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

