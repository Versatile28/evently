import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/_styles/globals.css';
// import { Josefin_Sans } from 'next/font/google';
import Header from '@/app/_components/Header';
import Spinner from './_components/Spinner';
// import Spinner from './_components/Spinner';

// const josefin = Josefin_Sans({
//    subsets: ['latin'],
//    display: 'swap',
// });

export const metadata = {
   title: {
      template: '%s: Evently',
      default: 'Welcome - Evently',
   },
   icons: {
      icon: '/icon.png',
   },
   description:
      'Discover events that matter to you — from local art shows and music nights to professional workshops and community meetups. Evently helps you explore what’s happening around you, all in one place, with easy browsing and clear details for every occasion.',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head></head>
         <body className="bg-primary-900">
            <header>
               <Header />
            </header>
            {/* <Spinner /> */}
            <main style={{ maxWidth: '80rem' }}>{children}</main>
         </body>
      </html>
   );
}
