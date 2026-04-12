interface InformationProps{
    img?: React.ReactNode;
    title?: string
    description?: string
    styles?: string
}

function AnnounceCard(
    {
        img, 
        title, 
        description, 
        styles
    }: InformationProps
){
    if(!title && !description) return null

    return (
        <article className={styles}>
            
        </article>
    )
}

function InformationCard(){


}
export { InformationCard, AnnounceCard }