import type{ Styles} from '@customtypes/styles'

type IconsParams = {
  icon?: React.ReactNode;
} & Partial<Styles>

interface Props extends Styles {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  iconParams?: IconsParams;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  width = "auto",
  height = "auto",
  backgroundColor,
  iconParams,
  color,
  className,
  disabled
}: Props) => {
  return (
    <button
      disabled={disabled}
      type='button'
      onClick={onClick}
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
