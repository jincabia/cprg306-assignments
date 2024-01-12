export function Item(props) {


    return (
        // name,quantity,category
        
       <div className=" m-4 p-4 text-white bg-slate-900 rounded w-1/4 h-1/3 ">
        <h2 className="font-bold text-xl">{props.name}</h2> 
        <p className="text-sm">Buy {props.quantity} in {props.category}</p>
       </div>
        
      
    );
  }

