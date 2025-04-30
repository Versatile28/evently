"use client"

import Link from 'next/link';

export default function Navigation() {

   return (
      <nav className="position-relative fs-5 z-1">
         <ul className="d-flex gap-4 align-items-center list-unstyled m-0 p-0">
            <li>
               <Link
                  href="/yourevents"
                  className="text-decoration-none text-primary-50"
               >
                  Your Events
               </Link>
            </li>
            <li>
               <Link
                  href="/localevents"
                  className="text-decoration-none text-primary-50"
               >
                  Local Events
               </Link>
            </li>
            <li>
               <Link
                  href="/about"
                  className="text-decoration-none text-primary-50"
               >
                  About
               </Link>
            </li>
         </ul>
      </nav>
   );
}
