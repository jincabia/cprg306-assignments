'use client'; // Marking the component as a client component
import { useState, useEffect } from 'react'; // Added import for useState and useEffect
import { useUserAuth } from "../_utils/auth-context"; // Imported useUserAuth custom hook
import { getItems, addItem } from "../_services/shopping-list-service"; // Imported getItems and addItem functions from shopping-list-service
import NewItem from './new-item';
import ItemList from './item-list';
import { loadMeal } from './fetch-load-meals';
import {Recipe} from './recipe';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // Extracted user, gitHubSignIn, and firebaseSignOut from useUserAuth hook
  const [items, setItems] = useState([]); // Initialized state for items
  const [meals, setMeals] = useState(null);
  const [mealIdeas, setMealIdeas] = useState("Select an item to see meal ideas");

  const loadItems = async () => { // Created function to load items from Firestore
    if (user) { // Check if user is authenticated
      const itemsData = await getItems(user.uid); // Fetch items from Firestore using user's UID
      setItems(itemsData); // Set items state with fetched items
    }
  };

  useEffect(() => { // Added useEffect hook to load items when user authentication state changes
    loadItems(); // Call loadItems function
  }, [user]); // Added user as a dependency for useEffect to reload items when user changes

  const handleAddItem = async (newItem) => { // Created function to handle addition of new item
    try {
      const itemId = await addItem(user.uid, newItem); // Add new item to Firestore
      setItems(prevItems => [...prevItems, { id: itemId, ...newItem }]); // Update items state with newly added item
    } catch (error) { // Handle errors
      console.error("Error adding item:", error); // Log error to console
    }
  };

  function handleSignOut() { // Created function to handle sign out
    firebaseSignOut(); // Call firebaseSignOut function from useUserAuth hook
  }

  function handleSignIn() { // Created function to handle sign in
    gitHubSignIn(); // Call gitHubSignIn function from useUserAuth hook
  }

  const changeItem = (newItem) => {
    loadMeal(newItem, setMeals, setMealIdeas);
}

useEffect(() => {
    loadMeal(null, setMeals, setMealIdeas);
}, []);
  return (
    <main>
      {!user && ( // Render sign-in prompt if user is not authenticated
        <div>
          <h1 className='m-4 text-xl'>Please sign in.</h1>
          <button className='m-4 p-2 bg-slate-600 hover:bg-slate-400' onClick={handleSignIn}>Sign in with GitHub</button>
        </div>
      )}
      {user && ( // Render shopping list and other content if user is authenticated
        <div className='grid grid-cols-3'>
          <div>
            <h1 className="text-4xl m-2 p-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} ></NewItem> {/* Render NewItem component with handleAddItem function as prop */}
            <ItemList items={items} onClickItem={changeItem}/> {/* Render ItemList component with items state as prop */}
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
            <button className="p-2 m-4 bg-stone-500" onClick={handleSignOut}>Sign out</button> {/* Render sign-out button */}
          </div>
        </div>
      )}
    </main>
  );
}
