import YourEventCard from '@/app/_components/YourEventCard';
import { getYourEvents } from '../_lib/data-service';

export default async function YourEventList() {
   const yourEvents = await getYourEvents();

   return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
         {yourEvents.map((event) => (
            <YourEventCard event={event} key={event.id} />
         ))}
      </div>
   );
}
