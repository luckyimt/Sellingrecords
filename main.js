import { db } from "./firebase.js";
import { collection, addDoc } from "firebase/firestore";

async function saveSale(){

    const record = {
        date: "2026-03-20",
        shift: "Morning",
        employee: "Anna",
        product: "Facial Cleanser",
        price: 12.99,
        quantity: 2,
        total: 25.98,
        createdAt: new Date()
    };

    try {
        await addDoc(collection(db, "sales"), record);
        console.log("Saved!");
    } catch (e) {
        console.error(e);
    }
}

window.saveSale = saveSale;