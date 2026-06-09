import AuthLayout from "@components/layouts/auth-layout";
import { JoinCard } from "../../../components/blocks/PromoCard";
import { LoginForm } from "../../../features/auth/components/LoginForm";

function LoginRoute() {
  return (
    <AuthLayout title="login">
      <section className="flex flex-1 w-full justify-center gap-3 h-[90%]">
         <JoinCard
          title="ACCESS THE ARCHIVE"
          description="Join an ecosystem where architecture eets commerce. BR7-MARKETPLACE is a curated digital archive for those who demand structural integrity in every interaction."
          styles={{
            height: "full",
            width: "50%"
          }}
        />
        <LoginForm/>
      </section>
    </AuthLayout>
  );
}

export default LoginRoute;
