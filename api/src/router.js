import express from 'express'
import QuoteController from './controllers/quote'
const router = express.Router()

router.get("/quotes", QuoteController.getQuotes)
router.post("/quote", QuoteController.addQuote)
router.put("/quote/:id", QuoteController.updateQuote)
router.delete("/quote/:id", QuoteController.deleteQuote)


export default router