import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import YourEventList from "@/app/_components/YourEventList";
import AddEvent from "@/app/_components/AddEvent";
import { getYourEvents } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
   title: 'Events',
};

export default async function Page() {
   const session = await auth();
   const yourEvents = await getYourEvents(session.user.userId);
   return (
      <div>
         <h1 className="text-4xl mb-4 text-accent-400 font-medium px-5 mx-3 mt-5">
            Your Events
         </h1>
         <p className="text-primary-50 text-lg mb-5 px-5 mx-3">
            Imagine having all your important events beautifully organized in
            one place, right at your fingertips. Picture scheduling a birthday
            reminder or a project deadline, then effortlessly scrolling through
            a rich history of everything you’ve achieved—big conferences, family
            gatherings, or personal milestones. Dive into past memories with
            ease, reliving each moment in a clean, intuitive timeline. Stay on
            top of your future plans and celebrate your accomplishments all in
            one seamless experience. Welcome to your personal Events hub—where
            every moment matters.
         </p>
         <AddEvent />
         <Suspense fallback={<Spinner />}>
            <YourEventList yourEvents={yourEvents}/>
         </Suspense>
      </div>
   );
}
