import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const AppDB = {
    connect: async () => {
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/quote-api")
            console.log("Database connection establish")
        } catch (error) {
            console.log("Database connection error")
            throw new Error(error)            
        }
    }
}
export default AppDB