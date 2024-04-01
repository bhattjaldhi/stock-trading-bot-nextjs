import axios from 'axios'
import https from 'https'

const instance = axios.create({
   //  baseURL: 'http://3.128.172.31',
    baseURL: 'https://06af-99-228-163-90.ngrok-free.app',
    headers: { Authorization: 'Bearer eyJhbGciOiJIUd2VyIn0.NDFAApMqRBwacpLumnyC_p7IWWmmWEFmXJIVkRoIA-I' },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }) 
})

export default {
    chat: (params) => instance.post('/chatbot/ask', params),
    simulate: (params) => instance.get('/bot/simulate', { params }),
}
