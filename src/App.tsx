import AppRouter from "./app/routes/router.tsx"
import AppProvider from './app/routes/provider.tsx'
function App() {
  
  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
