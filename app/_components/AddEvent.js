'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function AddEvent() {

   return (
      <div className='text-center'>
         <Link
            href="/yourevents/eventform"
            className="btn bg-accent-500 text-accent-100 fw-semibold px-4 py-3 fs-5 border-0 rounded-0 mb-3"
         >
            Add a Event
         </Link>
      </div>
   );
}