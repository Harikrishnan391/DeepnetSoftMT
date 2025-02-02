import { BASE_URL } from '../config/config'

interface MenuItem {
  itemName: string
  price: string
  description: string
}
export const fetchMenus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/menus`)
      if (!response.ok) throw new Error('Failed to fetch menus')
      return await response.json()
    } catch (error) {
      console.error('Error fetching menus:', error)
      throw error
    }
  }
  

  export const fetchMenuItems = async (menuId: string) => {
    try {
      const response = await fetch(`${BASE_URL}/menus/${menuId}`)
      if (!response.ok) throw new Error('Failed to fetch menu items')
      const data = await response.json()
      return data.items // Assuming API returns { items: [...] }
    } catch (error) {
      console.error('Error fetching menu items:', error)
      throw error
    }
  }


export const createMenu = async (menuName: string) => {
  const response = await fetch(`${BASE_URL}/menus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: menuName, description: '' }),
  })

  if (!response.ok) {
    throw new Error('Failed to create menu')
  }

  return response.json()
}



export const addMenuItems = async (menuId: string, menuItems: MenuItem[]) => {
  const itemPromises = menuItems.map((item) =>
    fetch(`${BASE_URL}/menus/${menuId}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.itemName,
        description: item.description,
        price: item.price,
      }),
    })
  )

  await Promise.all(itemPromises)
}
