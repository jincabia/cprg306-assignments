'use client';
import { useState, useEffect } from 'react';


// i changed all the names inside the json file and removed the emojis and commas.



export default function Page () {
  const [meals, setMeals] = useState(null);

  async function fetchMeal() {
     const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken");
     const data = await response.json();
     return data.meals;
  }

  async function loadMeal() {
     const newMeals = await fetchMeal();
     setMeals(newMeals); 
  }

  useEffect(() => {
     loadMeal();
  }, []);
   
  return (
     <main>
        <div>
           <h1 className="text-4xl m-2 p-2">Shopping List</h1>
       
           <div>
              {meals && meals.map(meal => (
                 <div key={meal.idMeal}>
                    <p>{meal.strMeal}</p>
                    
                 </div>
              ))}
           </div>
        </div>
     </main>
  )
}

