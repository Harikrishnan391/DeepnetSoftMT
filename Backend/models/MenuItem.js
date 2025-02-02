import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu' },
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)

export default MenuItem
