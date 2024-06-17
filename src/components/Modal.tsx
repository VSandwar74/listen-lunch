import { useState } from "react";
import * as firebase from "../services/firebase.ts";

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

// const restaurant: Restaurant = {
//   name: "Beatrix",
//   address: "834 W Fulton Market",
//   distance: ".2 mi",
//   description: "Upscale restaurant serving New American cuisine in a stylish setting.",
//   tags: ["New American", "Upscale", "Stylish"],
//   known_for: "Brunch",
//   menu: "https://www.beatrixrestaurants.com/beatrix/streeterville/menus/"
// };

const Modal = (spot: Spot) => {
  const { auth } = firebase;
  const [showModal, setShowModal] = useState(false);

  const user = auth.currentUser;

  return (
    <>
      <button
        className="text-white active:bg-blue-500 font-bold px-10 py-12 rounded-full shadow text-5xl
        hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 border-8 border-yellow-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {spot.name}
      </button>
      {/* {{showModal} ? (

      ) : null} */}
      {showModal ? (
          <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col justify-center p-5 rounded-t text-center w-full">
                  <h3 className="text-4xl font=semibold">{spot.name}</h3>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="flex flex-row space-x-6 text-center items-center justify-center">
                      <p>{spot.address}</p>
                      <p className="text-xs">{spot.distance}</p>
                    </div>
                    <p className="w-[50%] justify-center">{spot.description}</p>
                    <ul>
                      {spot.tags.map((tag) => (
                        <li>{tag}</li>
                      ))}
                    </ul>
                    <p>known for: {spot.known_for}</p>
                    {{user} ? (<button className="px-4 py-6 rounded-lg bg-yellow-400 cursor-pointer shadow-lg">
                      yes! i want to eat here
                    </button>): null}
                    <a 
                      className="px-6 py-2 bg-black text-white rounded-xl cursor-pointer"
                      href={spot.menu}
                      >
                      menu
                    </a>
                  </div>
                  {/* <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button> */}
                </div>
                {/* <div className="relative p-6 flex-auto">
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.address}
                  </p>
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.distance}
                  </p>
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.description}
                  </p>
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.tags}
                  </p>
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.known_for}
                  </p>
                  <p className="text-black text-sm font-bold mb-1">
                    {spot.menu}
                  </p>
                </div> */}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
        // <>
        //   <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        //     <div className="relative w-auto my-6 mx-auto max-w-3xl">
        //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //         <div className="flex justify-between p-5 border-b border-solid border-gray-300 rounded-t text-center w-full">
        //           <h3 className="text-3xl font=semibold">General Info</h3>
        //           <button
        //             className="bg-transparent border-0 text-black float-right"
        //             onClick={() => setShowModal(false)}
        //           >
        //             <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
        //               x
        //             </span>
        //           </button> 
        //         </div>
        //         <div className="relative p-6 flex-auto">
        //           <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
        //             <label className="block text-black text-sm font-bold mb-1">
        //               First Name
        //             </label>
        //             <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        //             <label className="block text-black text-sm font-bold mb-1">
        //               Last Name
        //             </label>
        //             <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        //             <label className="block text-black text-sm font-bold mb-1">
        //               Address
        //             </label>
        //             <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        //             <label className="block text-black text-sm font-bold mb-1">
        //               City
        //             </label>
        //             <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
        //           </form>
        //         </div>
        //         <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        //           <button
        //             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Close
        //           </button>
        //           <button
        //             className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Submit
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </>
      ) : null}
   
    </>
  );
};

export default Modal;
