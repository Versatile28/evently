import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import YourEventList from "../_components/YourEventList";

export const metadata = {
   title: 'Events',
};

export default function Page() {
   return (
      <div>
         <h1 className="text-4xl mb-5 text-accent-400 font-medium px-5 mx-3 mt-5">
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
         <Suspense fallback={<Spinner />}>
            <YourEventList />
         </Suspense>
      </div>
   );
}
