// en este fichero se crearn componentes que ayuden a promocionar o unirse ya sea para iniciar sesion
// o suscribirse a nuevos eventos en la aplicacion

import type { Styles } from "@customtypes/styles";

interface Props {
  title: string;
  description: string;
  component?: React.ReactNode | React.ReactNode[];
  styles?: Styles;
}

function JoinCard({ title, description, component, styles }: Props) {
  const { align = "top", className, ...rest } = styles || {};

  const layout =
    align === "top"
      ? "flex-col"
      : align === "bottom"
        ? "flex-col-reverse"
        : align === "left"
          ? "flex-row"
          : "flex-row-reverse";

  return (
    <div className={`bg-black text-white p-6 ${className || ""}`} style={rest}>
      <h1 className="text-2xl font-inter font-semibold text-center mb-4">
        {title}
      </h1>

      <div className={`flex gap-4 ${layout}`}>
        <div className="flex flex-col gap-3">{component}</div>

        <p className="text-sm opacity-70 text-center">{description}</p>
      </div>
    </div>
  );
}

export { JoinCard };
