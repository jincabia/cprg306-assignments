

export function Recipe({strMeal}) {


    return (
       
        
       <div className=" m-4 p-4 text-white bg-slate-900 rounded w-3/4 h-1/3 hover:bg-violet-600 active:bg-violet-700 cursor: cursor-pointer">
        {/* <h2 className="font-bold text-xl">{name}</h2>  */}
        <p className="text-sm">{strMeal}</p>
        <div>

        </div>
       </div>
        
      
    );
  }


  