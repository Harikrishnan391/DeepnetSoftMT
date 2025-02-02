import { NavigationProvider } from './context/NavigationContext'
import Routers from './routes/Router'

const App = () => {
  return (
    <>
      <NavigationProvider>
        <Routers />
      </NavigationProvider>
    </>
  )
}

export default App
