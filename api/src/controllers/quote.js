import QuoteModal from "../models/quoteModal"
const QuoteController = {
    getQuotes: async (req, res, next) => {
        try {
            const quotes = await QuoteModal.find({})
            res.status(200).send({ success: true, quotes: quotes })
        } catch (error) {
            res.status(500).send({ success: false, error: error, message: "Something went wrong" })
        }
    },
    addQuote: async (req, res, next) => {
        try {
            const quote = await new QuoteModal(req.body).save()
            res.status(200).send({ success: true, quote: quote })
        } catch (error) {
            res.status(500).send({ success: false, error: error, message: "Something went wrong" })
        }
    },
    updateQuote: async (req, res, next) => {
        try {
            const quote = await QuoteModal.findOneAndUpdate({ _id: req.params.id }, req.body)
            res.status(200).send({ success: true, quote: quote })
        } catch (error) {
            res.status(500).send({ success: false, error: error, message: "Something went wrong" })
        }
    },
    deleteQuote: async (req, res, next) => {
        try {
            const quote = await QuoteModal.findByIdAndDelete(req.params.id)
            res.status(200).send({ success: true, quote: quote })
        } catch (error) {
            res.status(500).send({ success: false, error: error, message: "Something went wrong" })
        }
    },
}
export default QuoteController