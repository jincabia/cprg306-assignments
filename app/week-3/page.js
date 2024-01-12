import { ItemList } from "./item-list"
// import { StudentInfo } from "./student-info";
// name,quantity,category
export default function Page() {
    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };
    return (
      <main>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        
        <ItemList></ItemList>
      </main>
    );
  }