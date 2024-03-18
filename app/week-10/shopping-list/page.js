'use client'
import Link from 'next/link';
import  { useState, useEffect } from 'react';
import { ItemList } from "./item-list"
import { NewItem } from "./new-item";
import { Recipe } from "./recipe";
import { loadMeal } from './fetch-load-meals';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service"

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [items, setItems] = useState([]);
    const [meals, setMeals] = useState(null);
    const [mealIdeas, setMealIdeas] = useState("Select an item to see meal ideas");

    async function loadItems(user) {
        try {
            const items = await getItems(user.uid);
            setItems(items);
        } catch (error) {
            console.error("Error loading items:", error);
            // Handle errors appropriately, e.g., show error message to the user
        }
    }

    const handleAddItems = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    const changeItem = (newItem) => {
        loadMeal(newItem, setMeals, setMealIdeas);
    }

    function handleSignOut() {
        firebaseSignOut();
    }

    function handleSignIn() {
        gitHubSignIn();
    }

    useEffect(() => {
        loadMeal(null, setMeals, setMealIdeas);
    }, []);

    useEffect(() => {
        if (user) {
            loadItems(user);
        }
    }, [user]);

    return (
        <main>
            {!user && (
                <div>
                    <h1 className='m-4 text-xl'>Please sign in.</h1>
                    <button className='m-4 p-2 bg-slate-600 hover:bg-slate-400' onClick={handleSignIn}>Sign in with GitHub</button>
                </div>
            )}
            {user && (
                <div className='grid grid-cols-3'>
                    <div>
                        <h1 className="text-4xl m-2 p-2">Shopping List</h1>
                        <NewItem onAddItem={handleAddItems}></NewItem>
                        <ItemList items={items} onClickItem={changeItem} />
                    </div>
                    <div>
                        <h1 className="text-4xl">Meals</h1>
                        {mealIdeas}
                        {meals && meals.map(meal => (
                            <div key={meal.idMeal}>
                                <Recipe {...meal}></Recipe>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className="p-2 m-4 bg-stone-500" onClick={handleSignOut}>Sign out</button>
                    </div>
                </div>
            )}
        </main>
    )
}
