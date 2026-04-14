import Footer from '@components/UI/global/footer';
import { Header } from '@components/UI/global/header-nav'

interface Props{
    title: string,
    children: React.ReactNode
}

function ContentLayout({ children }: Props){

    return (
        <section className='w-full min-h-screen flex flex-col justify-between items-center'>
            <Header/>
            <main className='w-full flex-1'>
                {children}
            </main>
            <Footer/>
        </section>
    )

}

export default ContentLayout