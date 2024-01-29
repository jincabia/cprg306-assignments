'use client';
import { useState } from 'react';
import itemsData from './item.json';
import { ItemList } from "./item-list"
import { NewItem } from "./new-item";



export default function Page (){
    const [items,setItems] = useState(itemsData.slice());
    console.log(items);

    const handleAddItems = (newItem) => {
        console.log("Fuck")
        setItems((prevItems) => [...prevItems,newItem]);
    }

    return (
        <main>
        <div>
        <h1 className="text-4xl m-2 p-2"> Shopping List</h1>
        <NewItem onAddItem={handleAddItems}></NewItem>
        <ItemList items={items}/>
        
        </div>
        
   
      </main>
    )
}


