import { useState } from 'react'
import { createMenu, addMenuItems } from '../services/menuServices'

interface MenuItem {
  itemName: string
  price: string
  description: string
}

const AddMenu = () => {
  const [menuName, setMenuName] = useState<string>('')

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { itemName: '', price: '', description: '' },
  ])

  const handleMenuNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenuName(e.target.value)
  }

  const handleMenuItemChange = (
    index: number,
    field: keyof MenuItem,
    value: string
  ) => {
    const updatedItems = [...menuItems]
    updatedItems[index][field] = value
    setMenuItems(updatedItems)
  }

  const addMenuItem = () => {
    setMenuItems([...menuItems, { itemName: '', price: '', description: '' }])
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const menuData = await createMenu(menuName)
      const menuId = menuData._id
      await addMenuItems(menuId, menuItems)

      alert('Menu and items added successfully!')
      setMenuName('')
      setMenuItems([{ itemName: '', price: '', description: '' }])
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong!')
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='max-w-2xl mx-auto p-6 shadow-lg rounded-lg bg-white mt-10 flex '>
        <h2 className='text-2xl font-bold mb-4'>Add Menu</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='menuName' className='block text-gray-700'>
              Menu Name
            </label>
            <input
              id='menuName'
              type='text'
              value={menuName}
              onChange={handleMenuNameChange}
              className='w-full p-2 mt-1 border border-gray-300 rounded'
              placeholder='Enter menu name'
              required
            />
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Menu Items</h3>

            {menuItems.map((item, index) => (
              <div
                key={index}
                className='mb-4 p-4 border border-gray-300 rounded-lg'
              >
                <div className='flex gap-4'>
                  <div className='w-1/3'>
                    <label
                      htmlFor={`itemName-${index}`}
                      className='block text-gray-700'
                    >
                      Item Name
                    </label>
                    <input
                      id={`itemName-${index}`}
                      type='text'
                      value={item.itemName}
                      onChange={(e) =>
                        handleMenuItemChange(index, 'itemName', e.target.value)
                      }
                      className='w-full p-2 mt-1 border border-gray-300 rounded'
                      placeholder='Enter item name'
                      required
                    />
                  </div>
                  <div className='w-1/3'>
                    <label
                      htmlFor={`price-${index}`}
                      className='block text-gray-700'
                    >
                      Price
                    </label>
                    <input
                      id={`price-${index}`}
                      type='number'
                      value={item.price}
                      onChange={(e) =>
                        handleMenuItemChange(index, 'price', e.target.value)
                      }
                      className='w-full p-2 mt-1 border border-gray-300 rounded'
                      placeholder='Enter item price'
                      required
                    />
                  </div>
                  <div className='w-1/3'>
                    <label
                      htmlFor={`description-${index}`}
                      className='block text-gray-700'
                    >
                      Description
                    </label>
                    <textarea
                      id={`description-${index}`}
                      value={item.description}
                      onChange={(e) =>
                        handleMenuItemChange(
                          index,
                          'description',
                          e.target.value
                        )
                      }
                      className='w-full p-2 mt-1 border border-gray-300 rounded'
                      placeholder='Enter item description'
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type='button'
              onClick={addMenuItem}
              className='mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg cursor-pointer'
            >
              Add Another Item
            </button>
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='w-full py-2 bg-green-600 text-white rounded-lg cursor-pointer'
            >
              Save Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMenu
