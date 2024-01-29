'use client';
import { useState } from 'react';

import { Item } from "./item"

import itemsData from './item.json';



export function ItemList() {

    const [sortBy,setSortBy] = useState("name");

    

  const sortByName = () => {
    setSortBy("name")
  }

  const sortByCategory = () => {
    setSortBy("category")
  }

  const sortByGroup = () => {
    setSortBy("group")
  }

//  itemsData.sort((a,b) => a.name.localeCompare(b.name));
 const printSorted = () =>
 {

  const sliceItems = itemsData.slice(0,13);
  

  
  
  if (sortBy =="name")
  {
    
    sliceItems.sort((a,b) => a.name.localeCompare(b.name));
  }
  else if (sortBy =="category") 
  {
    sliceItems.sort((a,b) => a.category.localeCompare(b.category));
  }
  else if (sortBy =="group")
  {
    const result = sliceItems.reduce((groupedCategory,item) => {
      const category = item.category
      if (groupedCategory[category] == null) groupedCategory[category] = []
      groupedCategory[category].push(item)
      return groupedCategory
    }, {})

    return <div>
    {Object.keys(result).map(category => (
      <div key={category}>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <ul>
          {result[category].map(item => (
            <li key={item.id}>
              <Item {...item}/>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div> //review this one idk what i did just copied it lol
  }

  return [...sliceItems].map(item => <li key={item.id}><Item {...item}/></li>);
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
        <button onClick={sortByGroup}
        className='p-2 m-2 bg-red-500'
        > Group
        </button>

        <ol>{printSorted()}</ol>

      </div>
      

      
    );
  }

