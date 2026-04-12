import { queryClient } from "../../lib/react-query";
import {QueryClientProvider} from '@tanstack/react-query'
import React from 'react'

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <React.Suspense fallback={<div>cargando...</div>}>
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    </React.Suspense>
  )
}

export default AppProvider;
