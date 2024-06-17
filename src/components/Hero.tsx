import { useState, useEffect } from 'react'
import Modal from './Modal'
import restaurants from '../assets/spots.json'
import * as firebase from '../services/firebase.ts'
import { doc, writeBatch, query, collection, onSnapshot } from 'firebase/firestore'


interface Spot {
  ref: any;
  name: string;
  address: string;
  distance: string;
  description: string;
  tags: string[];
  known_for: string;
  menu: string;
}

const Hero = () => {

  const { db } = firebase;

  // async function addRestaurants() {
  //   const batch = writeBatch(db);
  //   for (let i = 0; i < restaurants.restaurants.length; i++) {
  //     const ref = doc(db, "restaurants", restaurants.restaurants[i].name);
  //     batch.set(ref, restaurants.restaurants[i]);
  //   }
  //   await batch.commit();
  // }

  // addRestaurants(); // Call the function to add restaurants
  
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    const orderQuery = query(collection(db, "restaurants"));
    const unsubscribe = onSnapshot(orderQuery, (querySnapshot: any) => {
      const trades: Spot[] = [];
      querySnapshot.forEach((doc: any) => {
          trades.push({
            ref: doc.ref,
            ...doc.data(), 
          });
      });
      setSpots(trades)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='min-h-screen w-full mt-10 text-white'>
      <div
       className='flex flex-col justify-around space-x-6 text-center h-full w-full'
      >
        <div className='flex flex-row w-full justify-around'>
          {spots.slice(0,2).map((spot: Spot, key: number) => (
            <Modal 
              {...spot} // Pass the spot object as props to the Modal component
              key={key}
            />
          ))}
        </div>
        <div className='flex flex-row w-full justify-around'>
        {spots.slice(2,3).map((spot: Spot, key: number) => (
          <Modal 
            {...spot} // Pass the spot object as props to the Modal component
            key={key}
          />
        ))}
        </div>
        <div className='flex flex-row w-full justify-around'>
        {spots.slice(3).map((spot: Spot, key: number) => (
          <Modal 
            {...spot} // Pass the spot object as props to the Modal component
            key={key}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
