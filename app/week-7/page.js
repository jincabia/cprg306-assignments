'use client';
import { useState, useEffect } from 'react';
import itemsData from './item.json';
import { ItemList } from "./item-list"
import { NewItem } from "./new-item";
import {Recipe} from "./recipe";


export default function Page (){

    //state var
    const [items,setItems] = useState(itemsData.slice());
    const [meals, setMeals] = useState(null);
    const [mealIdeas, setMealIdeas] = useState("Select an item to see meal ideas");


    //event handler
    const handleAddItems = (newItem) => {
        setItems((prevItems) => [...prevItems,newItem]);
    }

     const changeItem = (newItem) => {
         // console.log(newItem);
        loadMeal(newItem);
     }

    async function fetchMeal(recipe) {
      try{
         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipe}`);
         if(!response) throw new Error('Failed to fetch');
        const data = await response.json();
      //   console.log(data.meals);
        return data.meals;
      }
      catch(error) 
      {
         console.error('Error fetching ' + error);
         return null;
      }
     }
   
     async function loadMeal(recipe) {
         //error checking if nothing is passed in it just returns
        if (recipe == null) return; 

        //removes everything after a comma
        recipe = recipe.split(',')[0].trim()
        //records the name of the recipe
        const recipeName = recipe;
     
         //formats the recipe to remove spaces and replace it with _ so we can pass it into urls
        recipe = recipe.split(' ').join('_');

        //passes in the recipe name to search into the api
        const newMeals = await fetchMeal(recipe);
        
        //checking if therese anything inside of newMeals or if the API returns anything

        //if theres anything inside newMeals itll change Meal Ideas depending if there are anything inside or not
        if(newMeals)
         {
            setMealIdeas(`Here are some meal ideas for ${recipeName}`)
         }
         else 
         {
            setMealIdeas(`There are no meal ideas for ${recipeName}`)
         }
         setMeals(newMeals); 
     }
   

     //idk lol
     useEffect(() => {
      loadMeal();
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


