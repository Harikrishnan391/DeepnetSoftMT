import Menu from '../models/Menu.js'
import MenuItem from '../models/MenuItem.js'

export const createMenu = async (req, res) => {
  try {
    const { name, description, items } = req.body
    const menu = new Menu({ name, description })
    await menu.save()
    res.status(201).json(menu)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price } = req.body
    const { menuId } = req.params

    const menuItem = new MenuItem({ name, description, price, menu: menuId })
    await menuItem.save()

    await Menu.findByIdAndUpdate(menuId, { $push: { items: menuItem._id } })

    res.status(201).json(menuItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Controller to get all menus
export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find().populate('items')
    res.json(menus)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Controller to get a specific menu with items
export const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId).populate('items')
    if (!menu) return res.status(404).json({ message: 'Menu not found' })
    res.json(menu)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
