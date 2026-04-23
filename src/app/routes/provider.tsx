import { queryClient } from "@lib/react-query.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@context/AuthContext";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <React.Suspense fallback={<div>cargando...</div>}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default AppProvider;
