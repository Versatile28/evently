'use client';

import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from 'react';
import Spinner from '@/app/_components/Spinner';

function DeleteYourEvent({ eventId, onDelete }) {
   const [isPending, startTransition] = useTransition();

   function handleDelete() {
      if (confirm('Are you sure you want to delete this reservation?'))
         startTransition(() => onDelete(eventId));
   }

   return (
      <button
         onClick={handleDelete}
         className="d-flex align-items-center text-uppercase text-text-decoration-none text-primary fw-bold border-0 px-3 py-2 flex-grow-1 text-light bg-transparent"
         style={{
            fontSize: '0.75rem',
            transition: 'background-color 0.3s, color 0.3s',
         }}
      >
         {!isPending ? (
            <>
               <TrashIcon
                  className="me-2"
                  style={{ height: '3.5rem', width: '2rem' }}
               />
               <span className="mt-1">Delete</span>
            </>
         ) : (
            <span className="mx-auto">
               <Spinner />
            </span>
         )}
      </button>
   );
}

export default DeleteYourEvent;
