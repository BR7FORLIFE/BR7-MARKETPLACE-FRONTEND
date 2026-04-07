import { queryClient } from "../lib/react-query";
import {QueryClientProvider} from '@tanstack/react-query'

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default AppProvider;
