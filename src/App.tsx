import AppRouter from "./app/routes/router.tsx"
import AppProvider from './app/routes/provider.tsx'
import { Toaster } from "sonner";
function App() {
  
  return (
    <AppProvider>
      <Toaster position="bottom-left"/>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
