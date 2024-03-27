import axios from 'axios'
import https from 'https'

const instance = axios.create({
    baseURL: 'http://3.128.172.31',
    headers: { Authorization: 'Bearer eyJhbGciOiJIUd2VyIn0.NDFAApMqRBwacpLumnyC_p7IWWmmWEFmXJIVkRoIA-I' },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }) 
})

export default {
    chat: (params) => instance.post('/chatbot/ask', params),
    simulate: (params) => instance.get('/bot/simulate', { params }),
}