'use client';

import { useEvent } from './EventContext';
import { createEvent } from '../_lib/actions';
import SubmitButton from './SubmitButton';
import Image from 'next/image';

function EventForm({ event, user }) {
   const { range, resetRange } = useEvent();

   const startDate = range.from;
   const endDate = range.to;

   const eventData = {
      startDate,
      endDate,
   };

   const createEventWithData = createEvent.bind(null, eventData);


   return (
      <div>
         <div className="bg-dark text-light px-4 py-2 d-flex justify-content-between align-items-center">
            <p className="mb-0">Logged in as</p>

            <div className="d-flex gap-3 align-items-center">
               <Image
                  height="30"
                  width="30"
                  className="rounded-circle"
                  src={user.image}
                  alt={user.name}
                  referrerPolicy="no-referrer"
               />
               <p className="mb-0">{user.name}</p>
            </div>
         </div>

         <form
            action={async (formData) => {
               await createEventWithData(formData);
               resetRange();
               console.log(formData)
            }}
            className="bg-secondary py-4 px-4 fs-5 d-flex flex-column gap-4"
         >
            
            <div className="mb-3">
               <label htmlFor="name" className="form-label text-light">
                  Name
               </label>
               <input
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
               ></input>
            </div>
            
            <div className="mb-3">
               <label htmlFor="duration" className="form-label text-light">
                  Duration
               </label>
               <input
                  name="duration"
                  id="duration"
                  className="form-control"
                  placeholder="Duration"
               ></input>
            </div>
            
            <div className="mb-3">
               <label htmlFor="location" className="form-label text-light">
                  Location
               </label>
               <input
                  name="location"
                  id="location"
                  className="form-control"
                  placeholder="Location"
               ></input>
            </div>

            <div className="mb-3">
               <label htmlFor="description" className="form-label text-light">
                  Description
               </label>
               <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  placeholder="Describe your event"
               ></textarea>
            </div>

            <div className="d-flex justify-content-end align-items-center gap-3">
               {!(startDate && endDate) ? (
                  <p className="text-light small m-0">
                     Start by selecting dates
                  </p>
               ) : (
                  <SubmitButton pendingLabel="Adding...">
                     Add now
                  </SubmitButton>
               )}
            </div>
         </form>
      </div>
   );
}

export default EventForm;
