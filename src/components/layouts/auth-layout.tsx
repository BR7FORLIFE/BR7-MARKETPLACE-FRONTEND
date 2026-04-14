import { Fragment } from "react/jsx-runtime";

function AuthLayout({
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
}

export default AuthLayout;
