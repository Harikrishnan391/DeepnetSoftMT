import express from 'express'
import {
  createMenu,
  createMenuItem,
  getMenus,
  getMenuById,
} from '../controllers/menuController.js'
const router = express.Router()

// Create a new menu
router.post('/menus', createMenu)

// Create a new menu item under a menu
router.post('/menus/:menuId/items', createMenuItem)

// Get all menus
router.get('/menus', getMenus)

// Get a specific menu with items
router.get('/menus/:menuId', getMenuById)

export default router
