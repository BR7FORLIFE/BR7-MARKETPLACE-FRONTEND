interface Props{
    img: string
    title: string
    paragraph: string
    component?: React.ReactNode
}

/* este componente me ayuda a mostrar informacion de un nuevo producto o descubrir algo nuevo que se lanzará */
function Herobanner({img, title, paragraph, component}: Props) {
    return (
        <div className="relative group overflow-hidden rounded-xl p-2 hover:cursor-pointer">
            <img
              src={img}
              alt="shoes image"
              className="w-full max-w-xl h-auto object-cover z-0 transition-transform duration-300 ease-in-out group-hover:scale-110 rounded-xl"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-8 hidden transition-transform duration-400 ease-in group-hover:block">
              <h2 className="text-7xl font-saira text-white">
                {title}
              </h2>
              <p className="text-center text-neutral-200">
                {paragraph}
              </p>
                {component}
            </div>
        </div>
    )
}

export { Herobanner };
