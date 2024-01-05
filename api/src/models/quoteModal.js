import mongoose from "mongoose"
const Schema = mongoose.Schema

const quoteSchema = new Schema({
    text: {
        type: String
    },
    author: {
        type: String
    },
    isEditable: {
        type: Boolean,
        default: false
    }
})
const quoteModal = mongoose.model("quote", quoteSchema, "quote")

export default quoteModal