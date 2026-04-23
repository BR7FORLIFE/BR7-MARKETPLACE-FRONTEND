import { Fragment } from "react/jsx-runtime";
import { Header } from '@components/UI/global/header-nav'

function AuthLayout({
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header/>
      <main>{children}</main>
    </Fragment>
  );
}

export default AuthLayout;
