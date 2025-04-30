import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
   return (
     <header className="border-bottom border-dark px-4 py-3">
       <div className="d-flex justify-content-between align-items-center container">
         <Logo />
         <Navigation />
       </div>
     </header>
   );
 }
 
 export default Header;
 