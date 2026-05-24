import { Link } from "react-router";
import { useAuthStore } from "../../../stores/auth-store";

export function VerificationEmailRoute() {
  const { email } = useAuthStore();

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <section className="w-full max-w-md bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-2xl">
            ✉
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold uppercase tracking-wide">
              Check your email
            </h1>

            <p className="text-sm text-neutral-500 leading-relaxed">
              We sent a verification link to your email address. Please verify
              your account before signing in.
            </p>
          </div>

          <div className="w-full bg-neutral-100 border border-neutral-200 rounded-xl py-3 px-4">
            <p className="text-sm font-medium break-all">{email}</p>
          </div>

          <Link
            to="/auth/login"
            className="
              text-xs
              uppercase
              tracking-widest
              text-neutral-500
              hover:text-black
              transition-colors
            "
          >
            Back to login
          </Link>
        </div>
      </section>
    </main>
  );
}
