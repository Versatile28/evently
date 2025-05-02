import SignInButton from "@/app/_components/SignInButton";

export const metadata = {
   title: 'Login',
}

export default function Page() {
  return (
    <div className="d-flex flex-column gap-5 mt-5 pt-5">
      <h2 className="text-accent-50 fw-semibold text-center mt-5">
        Sign in to access your events
      </h2>
      <div className="container d-flex justify-content-center">
      <SignInButton />
      </div>
    </div>
  );
}
