import Link from 'next/link';

export default function Page() {
   return (
      <main>
         <div className="position-relative text-center z-1 h-auto pt-5">
            <h1 className="display-1 text-accent-100 mb-4 fw-normal pt-5">
               Welcome to Evently.
            </h1>
            <Link
               href="/yourevents"
               className="btn bg-accent-500 text-accent-100 fw-semibold px-4 py-3 fs-5 border-0 rounded-0 mb-5"
            >
               Explore all events
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
         </div>
      </main>
   );
}
