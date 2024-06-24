// import React from 'react'
// import { initializeApp } from "firebase/app";
import { useState } from "react";
// import { GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import * as firebase from '../services/firebase.ts';
import { GoogleAuthProvider, User, signInWithRedirect } from "firebase/auth";


const Header = () => {
    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth(app);
    const { auth } = firebase;
    const [loggedIn, setLoggedIn] = useState(false)
    const provider = new GoogleAuthProvider();
    // provider.setCustomParameters({ prompt: 'select_account' });
    // provider.setCustomParameters({
    //     prompt: 'select_account',
    //     login_hint: 'name@listen.co',
    //     redirect_uri: 'https://listen-lunch.firebaseapp.com/__/auth/handler',
    //   });

    const [user, setUser] = useState<User | null>(null);

    return (
    <div className='absolute flex flex-row justify-between w-full top-0 h-10 text-white items-center p-8'>
        {/* Logo */}
        <svg version="1.1" viewBox="0 0 77 19" xmlns="http://www.w3.org/2000/svg" className="listen-logo w-32 relative">
            <title>LISTEN</title>
            <g fill="none" fillRule="evenodd">
                <g className="logo-g" transform="translate(-85 -67)" fill="#FFF">
                    <g transform="translate(85 64)">
                        <path d="m26.815 3c1.869 0 3.543 0.609 5 1.827 0.086 0.072 0.1 0.203 0.031 0.293l-1.5 1.975c-0.079 0.103-0.228 0.109-0.32 0.018-0.818-0.814-1.717-1.222-2.697-1.222-1.376 0-2.472 0.84-2.472 1.959 0 0.49 0.187 0.863 0.536 1.166 0.373 0.303 1.096 0.629 2.145 1.026 1.982 0.723 3.312 1.492 4.012 2.332 0.699 0.816 1.048 1.866 1.048 3.148 0 1.702-0.583 3.101-1.725 4.174-1.143 1.072-2.611 1.609-4.407 1.609-2.438 0-4.409-1.068-5.933-3.184-0.062-0.085-0.05-0.205 0.025-0.278l1.886-1.826c0.1-0.097 0.262-0.07 0.331 0.05 0.816 1.403 2.007 2.113 3.574 2.113 1.563 0 2.729-1.049 2.729-2.471 0-0.63-0.21-1.143-0.63-1.493-0.42-0.373-1.352-0.816-2.775-1.352-1.632-0.583-2.775-1.236-3.405-1.936-0.629-0.7-0.932-1.632-0.932-2.798 0-1.469 0.512-2.682 1.539-3.661 1.05-0.979 2.354-1.469 3.94-1.469zm38.642 0.303c0.116 0 0.212 0.095 0.212 0.211v9.845c0 0.2 0.252 0.288 0.377 0.131l8.031-10.107c0.039-0.05 0.101-0.08 0.165-0.08h2.042c0.116 0 0.211 0.095 0.211 0.211v17.16c0 0.116-0.095 0.211-0.211 0.211h-3.006c-0.116 0-0.211-0.095-0.211-0.211v-9.888c0-0.2-0.254-0.288-0.378-0.131l-8.007 10.149c-0.04 0.051-0.101 0.081-0.166 0.081h-2.064c-0.117 0-0.212-0.095-0.212-0.211v-17.16c0-0.116 0.095-0.211 0.212-0.211zm-7.306 0c0.116 0 0.211 0.095 0.211 0.211v2.562c0 0.117-0.095 0.212-0.211 0.212h-5.873c-0.117 0-0.212 0.095-0.212 0.211v3.471c0 0.118 0.095 0.212 0.212 0.212h5.639c0.117 0 0.212 0.095 0.212 0.211v2.539c0 0.117-0.095 0.211-0.212 0.211h-5.639c-0.117 0-0.212 0.095-0.212 0.212v4.357c0 0.117 0.095 0.212 0.212 0.212h5.873c0.116 0 0.211 0.094 0.211 0.211v2.539c0 0.116-0.095 0.211-0.211 0.211h-9.301c-0.117 0-0.212-0.095-0.212-0.211v-17.16c0-0.116 0.095-0.211 0.212-0.211zm-12.727 0c0.116 0 0.211 0.095 0.211 0.211v2.562c0 0.117-0.095 0.212-0.211 0.212h-3.542c-0.117 0-0.211 0.095-0.211 0.211v14.175c0 0.116-0.095 0.211-0.212 0.211h-3.005c-0.116 0-0.211-0.095-0.211-0.211v-14.175c0-0.116-0.095-0.211-0.212-0.211h-3.518c-0.116 0-0.211-0.095-0.211-0.212v-2.562c0-0.116 0.095-0.211 0.211-0.211zm-28.147 0c0.117 0 0.212 0.095 0.212 0.211v17.16c0 0.116-0.095 0.211-0.212 0.211h-3.005c-0.116 0-0.211-0.095-0.211-0.211v-17.16c0-0.116 0.095-0.211 0.211-0.211zm-14.06 0c0.116 0 0.212 0.095 0.212 0.211v14.198c0 0.117 0.093 0.212 0.21 0.212h7.615c0.182 0 0.279 0.214 0.159 0.351l-2.232 2.538c-0.04 0.046-0.097 0.072-0.159 0.072h-8.81c-0.117 0-0.212-0.095-0.212-0.211v-17.16c0-0.116 0.095-0.211 0.212-0.211h3.005z"></path>
                    </g>
                </g>
            </g>
        </svg>

        <h1 className='text-5xl'>
            time to vote!
        </h1>
        
        {/* User Icon */}
        <div className='flex flex-col'>
            {loggedIn ? (
                <p className='text-white bold w-50'>Welcome {user?.displayName?.split(" ")[0]}!</p>
            ) : (
                <a onClick={() => signInWithRedirect(auth, provider)}>
                    <p className='text-white italic w-20 cursor-pointer hover:text-yellow-500'>Sign in!</p>
                </a>
            )}
            <div className='flex flex-row text-white font-bold items-center'>
                Voting Active: <div className={`rounded-full w-4 h-4 ${(user !== null)?('bg-green-500'):('bg-red-500')} ml-2`}/>
            </div>
        </div>
    </div>
    )
}

export default Header
