import Link from 'next/link';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, isPast, isToday,formatDistance, parseISO } from 'date-fns';

function YourEventCard({ event }) {
   const {
      id,
      name,
      startDate,
      endDate,
      duration,
      description,
      location,
      created_at,
   } = event;

   const safeDate = (dateStr) =>
      typeof dateStr === 'string' ? new Date(dateStr.replace(' ', 'T')) : null;

   const start = safeDate(startDate);
   const end = safeDate(endDate);
   const created = safeDate(created_at);

const formatDistanceFromNow = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return '';
  try {
    const formatted = formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    });
    return formatted.replace('about ', '');
  } catch (error) {
    console.error('Invalid date passed to formatDistanceFromNow:', dateStr);
    return '';
  }
};


   return (
      <div className="d-flex border border-primary m-5">
         <div className="flex-grow-1 px-4 py-3 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
               <h3 className="h4 text-accent-400 fw-bold">{name}</h3>
               {start ? (
                  isPast(start) ? (
                     <span className="bg-warning text-accent-50 px-2 py-1 text-uppercase small fw-bold rounded">
                        Past
                     </span>
                  ) : (
                     <span className="bg-success text-accent-50 px-2 py-1 text-uppercase small fw-bold rounded">
                        Upcoming
                     </span>
                  )
               ) : null}
            </div>

            <p className="text-accent-50 mt-1">
               {start ? (
                  <>
                     {format(start, 'EEE, MMM dd yyyy, HH:mm')}{' '}
                     ({isToday(start) ? 'Today' : formatDistanceFromNow(startDate)
                     })
                     {end && (
                        <>
                           {' '}
                           — {format(end, 'EEE, MMM dd yyyy, HH:mm')}
                        </>
                     )}
                  </>
               ) : (
                  'Date not available'
               )}
            </p>

            <div className="d-flex gap-3 mt-auto align-items-baseline">
               <p className="h5 text-accent-50 fw-semibold">Duration: {duration}</p>
               <p className="h5 text-accent-50 fw-semibold">{event?.location ? `•   Location: ${location}` : ''}</p>
               <p className="ms-auto small text-secondary">
                  {created ? format(created, 'EEE, MMM dd yyyy, p') : ''}
               </p>
            </div>
         </div>

         <div
            className="d-flex flex-column border-start border-primary"
            style={{ width: '100px' }}
         >
            <Link
               href={`/event/edit/${id}`}
               className="text-uppercase text-accent-50 text-decoration-none border-bottom border-primary px-3 py-2 d-flex align-items-center gap-2"
            >
               <PencilSquareIcon
                  className="me-2"
                  style={{ height: '1.25rem', width: '1.25rem' }}
               />
               <span>Edit</span>
            </Link>
         </div>
      </div>
   );
}

export default YourEventCard;
