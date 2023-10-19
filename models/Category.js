const { Schema } = require('mongoose')

const categorySchema = new Schema({
  name: String,
  image: String,
  favor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Favor'
  }
})

module.exports = categorySchema
