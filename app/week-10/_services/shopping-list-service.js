import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCollection = collection(db, "users", userId, "items");
  const querySnapshot = await getDocs(itemsCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}
