import Link from 'next/link';
import Image from 'next/image';
import icon from '@/public/icon.png';

function Logo() {
  return (
    <Link href="/" className="d-flex align-items-center gap-3 position-relative z-1 text-decoration-none">
      <Image
        src={icon}
        height={60}
        width={60}
        quality={100}
        alt="Evently Logo"
      />
      <span className="fs-4 fw-semibold text-primary-50">Evently</span>
    </Link>
  );
}

export default Logo;
