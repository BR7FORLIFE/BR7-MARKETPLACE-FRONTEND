interface Props{
    title?: string,
    icon?: React.ReactNode,
    onclick: () => void
    className?: string
}

function Button({
    title, 
    icon,
    onclick,
    className
}: Props){
    if(!title && !icon) return null;

    return (
        <button onClick={onclick} className={className}>
            {icon && <span>{icon}</span>}
            {title && <span>{title}</span>}
        </button>
    )
}

export { Button }