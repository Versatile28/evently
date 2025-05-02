import { signInAction } from "@/app/_lib/actions";
import Image from "next/image";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button type="submit" className="d-flex align-items-center text-center gap-3 border-0 px-4 py-2 fs-5 fw-medium btn btn-light">
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
