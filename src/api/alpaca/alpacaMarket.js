// axiosInstance.js
import axios from 'axios';

const apiKey = 'CKKH0I1K1FDZ7FIQKMDU';
const apiSecretKey = 'c5FGB00h5k6Xq6rzTiQxiD1Grlh2M3lhkgwaE2fR';

const baseURL = 'https://broker-api.sandbox.alpaca.markets';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Authorization': `Basic ${Buffer.from(`${apiKey}:${apiSecretKey}`).toString('base64')}`,
  },
});

// Export the axios instance directly with the getAssets method
export default {
  getAssets: () => axiosInstance.get('/v1/assets?active=true')
};
