'use client';
import { useState, useEffect } from 'react';
import itemsData from './item.json';
import { ItemList } from "./item-list"
import { NewItem } from "./new-item";
import {Recipe} from "./recipe";
// import {loadMeal} from "./loadmeal";
import { loadMeal } from './fetch-load-meals';

export default function Page (){

    //state var
    const [items,setItems] = useState(itemsData.slice());
    const [meals, setMeals] = useState(null);
    const [mealIdeas, setMealIdeas] = useState("Select an item to see meal ideas");


    //event handler
    //when a new item is added it gets added to the items array and re rendered
    const handleAddItems = (newItem) => {
        setItems((prevItems) => [...prevItems,newItem]);
    }

      //calls the loadMeal function where it takes newItem, setMeals and setMealIdeas as parameters uses newItem to update the meals and mealsIdeas as well as search through the api  
     const changeItem = (newItem) => {
         // console.log(newItem);
        loadMeal(newItem,setMeals,setMealIdeas);
     }

     //initial render
     useEffect(() => {
      loadMeal(null,setMeals,setMealIdeas);
      }, []);

    

    return (
        <main>
        <div className='grid grid-cols-3'>
         <div>
               <h1 className="text-4xl m-2 p-2"> Shopping List</h1>
               <NewItem onAddItem={handleAddItems}></NewItem>
               <ItemList items={items} onClickItem ={changeItem}/>
         </div>
         <div>
            <h1 className="text-4xl ">Meals</h1>
                        {mealIdeas}
                        {meals && meals.map(meal => (
                           <div key={meal.idMeal} >
                              <Recipe {...meal} ></Recipe>
                           </div>
                        ))}
         </div>
        </div>
      </main>
    )
}


