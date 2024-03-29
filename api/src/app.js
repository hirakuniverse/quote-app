import express from "express"
import AppDB from "./config/db"
import AppRouter from "./router"
const app = express()
const PORT = 3001

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
})

app.use("/api", AppRouter)
AppDB.connect()
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})