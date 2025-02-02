import mongoose from 'mongoose'

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
})

const Menu = mongoose.model('Menu', menuSchema)

export default Menu
