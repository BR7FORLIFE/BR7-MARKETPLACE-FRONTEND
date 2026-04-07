import AppRouter from "./routes/router.tsx"
import AppProvider from './routes/provider.tsx'
function App() {
  
  return (
    <AppProvider>
      <AppRouter/>
    </AppProvider>
  )
}

export default App
