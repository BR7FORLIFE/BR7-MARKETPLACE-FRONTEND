import { createBrowserRouter, RouterProvider } from "react-router";
import { ROUTES } from "@config/path";
import { useQueryClient, type QueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

const convert = (queryClient: QueryClient) => (m: any) => {
  const { default: Component, clientLoader, clientAction, ...rest } = m;

  return {
    ...rest,
    Component,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
  };
};

export const createAppRoutes = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: ROUTES.home.path,
      lazy: () => import("./app/landing-page").then(convert(queryClient)),
    },
    {
      path: ROUTES.auth.register.path,
      lazy: () => import("./auth/register-page").then(convert(queryClient)),
    },
    {
      path: ROUTES.auth.login.path,
      lazy: () => import("./auth/login-page").then(convert(queryClient))
    }
  ]);

//este componente tendra acceso a todos los path y componentes a reutilizar
function AppRouter() {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRoutes(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
