import { auth } from '../_lib/auth';
import DateSelector from './DateSelector';
// import LoginMessage from './LoginMessage';
import EventForm from './EventForm';

export default async function Event({ event }) {
   const session = await auth();

   return (
      <div className="row m-5" style={{ minHeight: '400px' }}>
         <div className="col-md-6">
            <DateSelector />
         </div>
         <div className="col-md-6">
            {session?.user ? (
               <EventForm event={event} user={session.user} />
            ) : (
               <p>Please log in to create an event.</p>
            )}
         </div>
      </div>
   );
}
