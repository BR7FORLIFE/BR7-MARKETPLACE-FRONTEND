import Footer from '../UI/global/footer';
import { Header } from '../UI/global/header-nav'

interface Props{
    title: string,
    children: React.ReactNode
}

function ContentLayout({ children }: Props){

    return (
        <section className='w-full h-full flex flex-col justify-between items-center'>
            <Header/>
            <main className='w-full h-full'>
                {children}
            </main>
            <Footer/>
        </section>
    )

}

export default ContentLayout