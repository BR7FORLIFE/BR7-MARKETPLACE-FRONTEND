import type{ Styles} from '@customtypes/styles'

type IconsParams = {
  icon?: React.ReactNode;
} & Partial<Styles>

interface Props extends Styles {
  children?: React.ReactNode;
  title?: string;
  iconParams?: IconsParams;
  onclick: () => void;
  backgroundColor?: string;
  color?: string;
}

const Button = ({
  children,
  onclick,
  width = "auto",
  height = "auto",
  backgroundColor,
  iconParams,
  color,
  className,
}: Props) => {
  return (
    <button
      onClick={onclick}
      style={{ width, height, backgroundColor, color }}
      className={`${iconParams?.className || ""} ${className || ""}`}
    >
      {children}
    </button>
  );
};

function ButtonVariants({ iconParams, title, ...rest }: Props) {
  const hasIcon = !!iconParams?.icon;
  const hasTitle = !!title;

  if (!hasIcon && !hasTitle) return null;

  const align = iconParams?.align || "center";

  const content = (
    <div
      className={`flex ${
        align === "left"
          ? "flex-row"
          : align === "right"
            ? "flex-row-reverse"
            : align === "bottom"
              ? "flex-col-reverse"
              : "flex-col items-center"
      }`}
    >
      {hasIcon && <span>{iconParams!.icon}</span>}
      {hasTitle && <span>{title}</span>}
    </div>
  );

  return <Button {...rest}>{content}</Button>;
}

export default ButtonVariants;
