//este componente mostrara el diseño de muestra de los productos ya sea listas
// mini listas, curiosidades de productos etc etc

interface Product{
    img?: string
    title: string
    price: string
}

interface Props{
    title: string
    subtitle?: string
    products: Product[]
}

function ProductList({title, subtitle, products}: Props){
    if(!title) return;

    return (
        <>
        

        </>
    )
}

export default ProductList