import axios from 'axios'
import https from 'https'

const instance = axios.create({
   //  baseURL: 'http://3.128.172.31', direct AWS IP
    baseURL: 'https://piglet-moved-yearly.ngrok-free.app', // NGROK free domain with https
    headers: { Authorization: 'Bearer eyJhbGciOiJIUd2VyIn0.NDFAApMqRBwacpLumnyC_p7IWWmmWEFmXJIVkRoIA-I',
              'ngrok-skip-browser-warning': 'true'
             },
    httpsAgent: new https.Agent({ rejectUnauthorized: false }) 
})

export default {
    chat: (params) => instance.post('/chatbot/ask', params),
    // @To Do: remove this comments in case of success =]   
    // simulate: (params) => instance.get('/bot/simulate', { params }),
    // Fabio: trying to bypass ngrok's browser validation by using post instead of get
    simulate: (data) => instance.post('/bot/simulate', data),
}
