import { ItemList } from "./item-list"


export default function Page() {
    return (
      <main>
        <div>
        <h1 className="text-4xl m-2 p-2"> Shopping List</h1>
        <ItemList/>
        </div>
        
   
      </main>
    );
  }