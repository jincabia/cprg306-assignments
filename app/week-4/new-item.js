'use client';
import { useState } from 'react';

export function NewItem()
{
    const[name, setName] = useState("")
    const[quantity, setQuantity] = useState(1)
    const[category, setCategory] = useState("")




                /*Create an item object with the current values of name, quantity, and category.
                Log the item object to the console.
                Display an alert with the current state of name, quantity, and category.
                Reset the state variables to their initial values.*/ 

                // const item12 = {
                //     name: "hand soap 🧼",
                //     quantity: 4,
                //     category: "household",
                //   };
    const submitFunction = (event) => {
        event.preventDefault();
        const newItem = {
            Name: name,
            Quantity: quantity,
            Category: category,
            
        };
        console.log(newItem);
        alert(name,quantity,category);
        
      };

   
    return(
        <div>
            <form onSubmit="submitFunction(event)">
            <input type="text" name="name" placeholder="Enter your name" className='text-black' />
            <input type="number" name="quantity" placeholder="Enter your Quantity" className='text-black' />
            <input type="text" name="category" placeholder="Enter your Category" className='text-black' />
            <button type="submit">Submit</button>
            </form>


            

            {/* Change Name: <input value={name} onChange={n=> setName(n.target.value)}/>
            <p>Name: {name}</p> */}


        </div>
    )

}


// export function CounterExample() {
//     const [count, setCount] = useState(0);
   
//     const increment = () => {
//       setCount(count + 1);
//     };
   
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment</button>
//       </div>
//     );
//   }


