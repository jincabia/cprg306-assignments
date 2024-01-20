'use client';
import { useState } from 'react';




export function NewItem() {

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [category,setCategory] = useState("Produce");

    const handleSubmit = event => {
        event.preventDefault();
        const item = {name,quantity,category};
        console.log(item);
        alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
        //Added item: a, quantity: 1, category: produce
        setName("");
        setQuantity(1);
        setCategory("");
        
    };
    
    const changeName = event => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const changeQuantity = event => {
        console.log(event.target.value);
        
        setQuantity(event.target.value);
    };

    const changeCategory = event => {
        console.log(event.target.value);
        setCategory(event.target.value);    
    };



 
        return (
            <div className='flex items-center justify-center'>
                <div>
                    <form onSubmit={handleSubmit} className='bg-gray-500 m-4 p-4 grid grid-rows-2 grid-flow-row gap-4 rounded'>
                        <input
                            required
                            onChange={changeName}
                            value={name}
                            className='text-black mb-4 w-max p-4'
                            placeholder='Enter Item Name'
                        />
                        <input
                            required
                            max="99"
                            onChange={changeQuantity}
                            type='number'
                            value={quantity}
                            className='text-black mb-4 pl-4 rounded'
                        />
    
                        <select
                            onChange={changeCategory}
                            value={category}
                            className='text-black p-4 rounded'
                            placeholder='Enter Item Category'
                        >
                            <option disabled>Category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
    
                        <div className='flex items-center justify-center'>
                            <button className='py-3 px-20 bg-blue-500 text-white rounded hover:bg-blue-700'>
                                +
                            </button>
                        </div>
    
                    </form>
                </div>
            </div>
        );
  }

