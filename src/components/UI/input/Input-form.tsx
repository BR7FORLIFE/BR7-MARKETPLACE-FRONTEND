import { forwardRef } from "react";

interface Props {
  id: string;
  title: String;
  typeInput: "text" | "email" | "password";
  onChange: (id: string, value: string) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, title, typeInput, onChange }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{title}</label>
        <input
          ref={ref}
          type={typeInput}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </div>
    );
  },
);

export default Input;
