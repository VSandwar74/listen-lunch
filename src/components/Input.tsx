import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore"; 
// import { set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBNe5YjwNWQ6YVSKQq1ANy4rg8Lw4DXo1w",
  authDomain: "listen-59b63.firebaseapp.com",
  projectId: "listen-59b63",
  storageBucket: "listen-59b63.appspot.com",
  messagingSenderId: "750142558083",
  appId: "1:750142558083:web:73b851d24e017e0ad070b6",
  measurementId: "G-RRSYQ8NPKV"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const Input = () => {
  const [spot, setSpot] = useState('')

  async function writeUserData(e: Event) {
    e.preventDefault()
    if (spot === '') {
      return
    }
    setSpot('')
    await addDoc(collection(db, "restaurants"), {
      name: spot,
      type: "Mediteranean",
      address: "placeholder",
    });
  }

  return (
    <div className='absolute bottom-0 p-2 w-full items-center justify-center bg-blue-200'>
      <form onSubmit={() => writeUserData} className='w-full flex-row justify-between'>
        <input 
          value={spot} 
          onChange={(e) => setSpot(e.target.value)}
          placeholder='What are you craving?' 
          />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Input
