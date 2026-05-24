import AuthLayout from "@components/layouts/auth-layout";
import RegisterForm from "@features/auth/components/RegisterForm";

import { JoinCard } from "../../../components/blocks/PromoCard";
import { useState } from "react";
import { VerificationEmailRoute } from "./verification-email";

function RegisterRoute() {

  const [verifyEmail, setVerifyEmail] = useState(false)

  return (
    <AuthLayout title="register">
      <section className="flex flex-col md:flex-row gap-3 justify-center w-[80%] h-[90%]">
        <JoinCard
          title="THE MONOLITHIC STANDARD."
          description="Join an ecosystem where architecture eets commerce. BR7-MARKETPLACE is a curated digital archive for those who demand structural integrity in every interaction."
          styles={{
            height: "100%",
          }}
        />
        {verifyEmail ? <VerificationEmailRoute/> : <RegisterForm  verifyFn={setVerifyEmail}/> }
      </section>
    </AuthLayout>
  );
}

export default RegisterRoute;
