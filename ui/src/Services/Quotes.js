import AppService from "../Config/Axios"
const baseUrl = "http://localhost:3001/api"
const QuoteService = {
    getQuotes: async () => {
        try {
            const url = `${baseUrl}/quotes`
            const response = await AppService.get(url)
            if(response && response.data.success){
                return response.data
            }
        } catch (error) {
            throw new Error(error)
        }

    },
    addQuote: async (payload) => {
        try {
            const url = `${baseUrl}/quote`
            const response =await AppService.post(url,payload)
            if(response && response.data.success){
                return response.data
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    updateQuote: async (id, payload) => {
        try {
            const url = `${baseUrl}/quote/${id}`
            const response = await AppService.put(url, payload)
            if(response && response.data.success){
                return response.data
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteQuote: async(id)=>{
        try {
            const url = `${baseUrl}/quote/${id}`
            const response = await AppService.delete(url)
            if(response && response.data.success){
                return response.data
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default QuoteService