import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query,doc } from "firebase/firestore";

// getItems this gets all items from a users database
async function getItems(userId)
{
    try {
        const itemsSnapshot = await getDocs(collection(db, "users", userId, "items"));
        const items = [];
        itemsSnapshot.forEach((doc) => {
          items.push({
            id: doc.id,
            data: doc.data()
          });
        });
        return items;
      } catch (error) {
        console.error("Error getting items:", error);
        throw error;
      }
}


async function addItem(userId, item) {
    try {
      const docRef = await addDoc(collection(db, "users", userId, "items"), item);
      console.log("Item is created with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  }
//addItems this adds items towards a users database

const docRef = await addDoc(collection(db, "users", "user1", "items"), {
    name: "Milk 🥛",
    quantity: 1,
    category: "Dairy",
  });
  console.log("Item is created with ID: ", docRef.id);

  