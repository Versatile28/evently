import Link from 'next/link';
import { auth } from '@/app/_lib/auth';
import Image from 'next/image';

export default async function Navigation() {
   const session = await auth();

   return (
      <nav className="position-relative fs-5 z-1">
         <ul className="d-flex gap-4 align-items-center list-unstyled m-0 p-0">
            <li>
               {session?.user?.image ? (
                  <Link
                     href="/yourevents"
                     className="text-decoration-none text-primary-50 mx-2"
                  >
                     Your Events
                  </Link>
               ) : (
                  <Link
                     href="/login"
                     className="text-primary-50 text-decoration-none mx-2"
                  >
                     Your Events
                  </Link>
               )}
            </li>
            <li>
               {session?.user?.image ? (
                  <Link
                     href="/profile"
                     className="text-primary-50 text-decoration-none flex align-items-cente mx-2"
                  >
                     <Image
                        height="30"
                        width="30"
                        className="rounded-circle"
                        src={session.user.image}
                        alt={session.user.name}
                        referrerPolicy="no-referrer"
                     />
                     <span className="ms-2">User</span>
                  </Link>
               ) : (
                  <Link
                     href="/login"
                     className="text-primary-50 text-decoration-none mx-2"
                  >
                     User
                  </Link>
               )}
            </li>
         </ul>
      </nav>
   );
}
