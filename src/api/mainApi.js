import { mainInstance } from "./instances"

const mainApi = {
    getQuote: async (category) => {
        try {
            const response = await mainInstance.get(category === 'all' ? `/quote.json` : `/quote.json?orderBy="category"&equalTo="${category}"`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    createQuote: async (info) => {
        try {
            await mainInstance.post(`/quote.json`, info)
        } catch (err) {
            console.log(err)
        }
    },
    removeQuote: async (i) => {
        try {
            await mainInstance.delete(`/quote/${i}.json`)
        } catch (err) {
            console.log(err)
        }
    },
    changeQuote: async (i, info) => {
        try {
            await mainInstance.put(`/quote/${i}.json`, info)
        } catch (err) {
            console.log(err)
        }
    }
}

export default mainApi