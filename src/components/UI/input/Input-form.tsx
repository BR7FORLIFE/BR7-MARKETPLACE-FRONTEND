interface Props {
  id: string;
  title: String;
  typeInput: "text" | "email" | "password";
  value?: string;
  onChange?: (id: string, value: string) => void;
  onFocus?: (value: string) => void;
}

const Input = ({ id, title, typeInput, value, onChange, onFocus }: Props) => {
  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor={id}
        className="text-sm text-neutral-600 font-saira font-semibold uppercase"
      >
        {title}
      </label>
      <input
        placeholder={`ENTER ${id}`}
        className="peer p-4 font-saira uppercase focus:border-b-[50%] outline-none "
        type={typeInput}
        value={value}
        onChange={(e) => onChange?.(id, e.target.value)}
        onFocus={(e) => onFocus?.(e.target.value)}
      />
      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-black transition-all duration-300 peer-focus:w-1/2"></span>
    </div>
  );
}; // peer en tailwind es para cambios de estados de siblings a siblings y group de padre a hijo

export default Input;
