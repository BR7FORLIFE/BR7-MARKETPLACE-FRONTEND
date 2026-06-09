import { Header } from '@components/UI/global/header-nav'

function AuthLayout({
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-screen h-full flex flex-col">
      <Header/>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  );
}

export default AuthLayout;
