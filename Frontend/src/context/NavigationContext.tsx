import { createContext, useContext, useState, ReactNode } from 'react'

// Define context type
interface NavigationContextType {
  activePage: string
  setActivePage: (page: string) => void
  selectedMenu: string
  setSelectedMenu: (menu: string) => void
}

// Create context
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
)

// Provider component
export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePage] = useState('HOME')
  const [selectedMenu, setSelectedMenu] = useState('FOOD')

  return (
    <NavigationContext.Provider
      value={{ activePage, setActivePage, selectedMenu, setSelectedMenu }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

// Custom hook to use the context
export const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
