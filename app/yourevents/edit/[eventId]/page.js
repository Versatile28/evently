import SubmitButton from '@/app/_components/SubmitButton';
import { updateEvent } from '@/app/_lib/actions';
import { getYourEvent } from '@/app/_lib/data-service';

export default async function Page({ params }) {
   const { eventId } = params;
   const { name, duration, description, location } = await getYourEvent(
      eventId
   );

   return (
      <div className="container mt-4 mb-4">
         <h2 className="fw-semibold fs-2 text-accent-400 mb-4">
            Edit Event #{eventId}
         </h2>

         <form action={updateEvent} className="bg-accent-50 p-4 rounded shadow">
            <input type="hidden" value={eventId} name="eventId" />

            <div className="mb-3">
               <label htmlFor="name" className="form-label">
                  Update your name
               </label>
               <input
                  name="name"
                  id="name"
                  defaultValue={name}
                  className="form-control"
                  placeholder={name}
               />
            </div>

            <div className="mb-3">
               <label htmlFor="duration" className="form-label">
                  Update your duration
               </label>
               <input
                  name="duration"
                  id="duration"
                  defaultValue={duration}
                  className="form-control"
                  placeholder={duration}
               />
            </div>

            <div className="mb-3">
               <label htmlFor="location" className="form-label">
                  Update your location
               </label>
               <input
                  name="location"
                  id="location"
                  defaultValue={location}
                  className="form-control"
                  placeholder={location}
               />
            </div>

            <div className="mb-3">
               <label htmlFor="description" className="form-label">
                  Update your description
               </label>
               <textarea
                  name="description"
                  defaultValue={description}
                  className="form-control"
                  rows="4"
               />
            </div>

            <div className="d-flex justify-content-end gap-3">
               <SubmitButton pendingLabel="Updating...">
                  Update Event
               </SubmitButton>
            </div>
         </form>
      </div>
   );
}
