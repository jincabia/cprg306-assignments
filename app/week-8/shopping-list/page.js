'use client'
import Link from 'next/link';
import  { useState, useEffect } from 'react';
import itemsData from './item.json';
import { ItemList } from "./item-list"
import { NewItem } from "./new-item";
import { Recipe } from "./recipe";
import { loadMeal } from './fetch-load-meals';
import { useUserAuth } from "../_utils/auth-context";
// import { useNavigate } from "react-router-dom";




export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Hook calls moved inside the functional component
    const [items, setItems] = useState(itemsData.slice());
    const [meals, setMeals] = useState(null);
    const [mealIdeas, setMealIdeas] = useState("Select an item to see meal ideas");

    // Event handler
    const handleAddItems = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const changeItem = (newItem) => {
        loadMeal(newItem, setMeals, setMealIdeas);
    }

    function handleSignOut()
    {
        firebaseSignOut();
    }

    function handleSignIn() {
      gitHubSignIn();
      
  }

    useEffect(() => {
        loadMeal(null, setMeals, setMealIdeas);
    }, []);

    return (
        <main>
            {!user && (
                <div>
                    <strong> 
                    <h1 className='m-4 text-xl'>Please sign in.</h1 >
                    </strong>
                    <button className='m-4 p-2  bg-slate-600 hover:bg-slate-400 ' onClick={handleSignIn}>Sign in with GitHub</button>
                </div>
            )}
            {user && (
                <div className='grid grid-cols-3'>
                    <div>
                        <h1 className="text-4xl m-2 p-2"> Shopping List</h1>
                        <NewItem onAddItem={handleAddItems}></NewItem>
                        <ItemList items={items} onClickItem={changeItem} />
                    </div>
                    <div>
                        <h1 className="text-4xl ">Meals</h1>
                        {mealIdeas}
                        {meals && meals.map(meal => (
                            <div key={meal.idMeal}>
                                <Recipe {...meal} ></Recipe>
                            </div>
                        ))}
                    </div>
                    <div>
                    <button className="p-2 m-4 bg-stone-500"onClick={handleSignOut}>Sign out</button>
                    </div>
                </div>
            )}
        </main>
    )
}
