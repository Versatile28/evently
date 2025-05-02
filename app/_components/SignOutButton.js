import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/actions';
import Image from 'next/image';

function SignOutButton() {
   return (
      <div className='mt-5 pt-5'>
         <h2 className="text-accent-50 fw-semibold text-center my-5">
            Sign in to access your events
         </h2>
         <form
            action={signOutAction}
            className="container d-flex align-items-center justify-content-center "
         >
            <button className="d-flex align-items-center text-center gap-3 border-0 px-4 py-2 fs-5 fw-medium btn btn-light">
               <Image
                  src="https://authjs.dev/img/providers/google.svg"
                  alt="Google logo"
                  height="24"
                  width="24"
               />
               <span>Sign Out</span>
            </button>
         </form>
      </div>
   );
}

export default SignOutButton;
