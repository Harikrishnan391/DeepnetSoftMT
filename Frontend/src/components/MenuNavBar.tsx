import { useEffect, useState } from 'react'
import Rectangle2 from '../assets/Rectangle 107.png'
import MenuItems from './MenuItems'
import { BASE_URL } from '../config/config'
import { MenuItem } from '../types/types'

interface Menu {
  _id: string
  name: string
}

const MenuNavBar = () => {
  const [menuData, setMenuData] = useState<Menu[]>([])
  const [selectedMenu, setSelectedMenu] = useState<string>('')
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${BASE_URL}/menus`)
        if (!response.ok) throw new Error('Failed to fetch menus')
        const data = await response.json()
        setMenuData(data)
        if (data.length > 0) {
          setSelectedMenu(data[0].name)
          fetchMenuItems(data[0]._id)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchMenus()
  }, [])

  const fetchMenuItems = async (menuId: string) => {
    try {
      setLoading(true)
      const response = await fetch(`${BASE_URL}/menus/${menuId}`)
      if (!response.ok) throw new Error('Failed to fetch menu items')
      const data = await response.json()
      setMenuItems(data.items)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='relative '>
      <img className='w-full' src={Rectangle2} alt='' />
      <div className='absolute top-0 left-0 w-full flex justify-center gap-x-6 mt-3'>
        {menuData.map((menu) => (
          <button
            key={menu._id}
            onClick={() => {
              setSelectedMenu(menu.name)
              fetchMenuItems(menu._id)
            }}
            className={`w-[10%] text-center text-white py-4 px-8 font-Oswald border-4 border-[#0796EF] cursor-pointer
              ${
                selectedMenu === menu.name
                  ? 'bg-[#0796EF]'
                  : 'bg-black hover:bg-[#0796EF]'
              }`}
          >
            {menu.name}
          </button>
        ))}
      </div>
      {!loading && <MenuItems menuTitle={selectedMenu} items={menuItems} />}
    </div>
  )
}

export default MenuNavBar
