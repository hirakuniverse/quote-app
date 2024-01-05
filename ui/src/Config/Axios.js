import axios from 'axios'
const AppService = {
    get: async (url) => {
        try {
            return await axios.get(url)
        } catch (error) {
            throw new Error(error)
        }
    },
    post: async (url, payload) => {
        try {
            return await axios.post(url, payload)
        } catch (error) {
            throw new Error(error)
        }
    },
    put: async (url, payload) => {
        try {
            return await axios.put(url, payload)
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (url) => {
        try {
            return await axios.delete(url)
        } catch (error) {
            throw new Error(error)
        }
    }
}
export default AppService