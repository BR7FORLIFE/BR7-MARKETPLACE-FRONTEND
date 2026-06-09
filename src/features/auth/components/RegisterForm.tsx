import { Link } from "react-router";
import { useState } from "react";

import Input from "@components/UI/input/Input-form";
import ButtonVariant from "@components/UI/button/button-variant";
import { HeaderTitle } from "../../../components/UI/global/header-nav";

import { registerFetch } from "@lib/api-client";
import { type Register } from "@lib/schemas/auth/auth-schema";

import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../../stores/auth-store";

import { CircleLoader } from "react-spinners";

import {
  SuccessAlert,
  WarningAlert,
} from "../../../components/UI/notifications/notifications";
import { toast } from "sonner";

function RegisterForm({
  verifyFn,
}: {
  verifyFn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const mutation = useMutation({
    mutationFn: registerFetch,
    onError() {
      toast.error("Dicho usuario ya posee una cuenta registrada!, Inicie sesion en cambio");
    },
  });
  const { setUser } = useAuthStore();
  const [repeatPassword, setRepeatPassword] = useState("");
  const [info, setInfo] = useState<Register>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setInfo((prev) => ({ ...prev, [id]: value }));
  };

  const submitRegisterForm = async () => {
    const { user_id, username } = await mutation.mutateAsync(info);
    setUser({ user_id, username, email: info.email });

    setInfo({
      username: "",
      email: "",
      password: "",
    });

    verifyFn(true);

    setRepeatPassword("");
  };

  const passwordsMatch = repeatPassword === info.password;

  return (
    <section className="bg-neutral-100 w-2/3 flex flex-col justify-around items-center rounded-lg">
      <div className="relative flex flex-col group">
        <HeaderTitle title="CREATE ACCOUNT" />
        <span className="w-full border-b-2 transition-all duration-300 ease-in group-hover:w-1/2"></span>
      </div>
      <form className="flex flex-col gap-4 w-2/3">
        <Input
          id="username"
          title="username"
          typeInput="text"
          value={info.username}
          onChange={handleInputChange}
        />

        <Input
          id="email"
          title="email"
          typeInput="email"
          value={info.email}
          onChange={handleInputChange}
        />

        <Input
          id="password"
          title="password"
          typeInput="password"
          value={info.password}
          onChange={handleInputChange}
        />

        <Input
          id="repeat-password"
          title="repeat password"
          typeInput="password"
          onChange={(_, value) => setRepeatPassword(value)}
          value={repeatPassword}
        />

        <ButtonVariant
          title={
            mutation.isPending ? (
              <CircleLoader color="white" size={20} />
            ) : (
              "INITIALIZE ACCOUNT"
            )
          }
          onClick={submitRegisterForm}
          backgroundColor="black"
          color="white"
          className="p-3 rounded-lg"
          disabled={mutation.isPending}
        />
      </form>

      <div className="inline-flex flex-col text-sm text-center gap-2">
        <div className="group flex flex-col items-center">
          <Link to="/auth/login">ALREADY REGISTERED?</Link>
          <span className="mt-1 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </div>
        <div className="group flex flex-col items-center">
          <Link to="">PRIVACY POLICY</Link>
          <span className="mt-1 h-0.5 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </div>
      </div>

      {repeatPassword.length > 0 &&
        (passwordsMatch ? (
          <SuccessAlert content="Passwords match" />
        ) : (
          <WarningAlert content="Passwords do not match" />
        ))}
    </section>
  );
}

export default RegisterForm;
