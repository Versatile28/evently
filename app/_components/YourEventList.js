"use client"

import YourEventCard from '@/app/_components/YourEventCard';
import { deleteYourEvent } from '@/app/_lib/actions';

import { useOptimistic } from 'react';

export default function YourEventList({ yourEvents }) {
   const [optimisticEvents, optimisticDelete] = useOptimistic(
      yourEvents,
      (curEvents, eventId) => {
         return curEvents.filter((event) => event.id !== eventId);
      }
   );

   async function handleDelete(eventId) {
      optimisticDelete(eventId);
      await deleteYourEvent(eventId);
   }

   return (
      <div>
         {optimisticEvents.map((event) => (
            <YourEventCard
               event={event}
               onDelete={handleDelete}
               key={event.id}
            />
         ))}
      </div>
   );
}
