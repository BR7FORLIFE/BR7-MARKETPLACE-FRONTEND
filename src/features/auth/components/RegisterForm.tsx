import { Link } from "react-router";
import { useRef, useState } from "react";

import Input from "@components/UI/input/Input-form";
import ButtonVariant from "@components/UI/button/button-variant";

import { registerFetch } from "@lib/api-client";
import { type Register } from "@lib/schemas/auth/auth-schema";
import { useQuery } from "@tanstack/react-query";

function RegisterForm() {
  const [info, setInfo] = useState<Register>({
    username: "",
    email: "",
    password: "",
  });

  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (id: string, value: string) => {
    setInfo((prev) => ({ ...prev, [id]: value }));
  };

  const submitRegisterForm = () => {};

  return (
    <section className="bg-neutral-300">
      <h2>CREATE ACCOUNT</h2>
      <form action="">
        <Input
          id="username"
          title="username"
          typeInput="text"
          onChange={handleInputChange}
        />

        <Input
          id="email"
          title="email"
          typeInput="email"
          onChange={handleInputChange}
        />

        <Input
          id="password"
          title="password"
          typeInput="password"
          onChange={handleInputChange}
        />

        <Input
          id="repeat-password"
          title="repeat password"
          typeInput="password"
          onChange={handleInputChange}
        />

        <ButtonVariant
          title="INITIALIZE ACCOUNT"
          onclick={() => null}
          backgroundColor="black"
          color="white"
        />
      </form>

      <div>
        <Link to="">ALREADY REGISTERED?</Link>
        <Link to="">PRIVACY POLICY</Link>
      </div>
    </section>
  );
}

export default RegisterForm;
