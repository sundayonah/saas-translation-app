'use client';

import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

const CheckoutButton = () => {
   const { data: session } = useSession();
   const [loading, setLoading] = useState(false);

   const createCheckoutSession = async () => {
      if (!session?.user.id) return;
      // push a document to firestore db
      setLoading(true);
      const docRef = await addDoc(
         collection(db, 'customers', session.user.id, 'checkout_sessions'),
         {
            price: 'price_100998KDjTc6FlwiIL3eBoYQ',
            success_url: window.location.origin,
            cancel_url: window.location.origin,
         }
      );

      // ... stripe extension on firebase will create a checkoout session

      // redirect user to checkout page
   };

   return (
      <div className="flex flex-col space-y-2">
         {/* if subscribed show me the user is subscribe */}

         <button
            onClick={() => createCheckoutSession()}
            className="mt-8 block rounded-md bg-indigo-800 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
         >
            Sign Up
         </button>
      </div>
   );
};

export default CheckoutButton;
