import Alpaca from '@alpacahq/alpaca-trade-api';
const alpaca = new Alpaca({
  keyId: process.env.NEXT_PUBLIC_ALPACA_API_KEY,
  secretKey: process.env.NEXT_PUBLIC_ALPACA_API_SECRET,
  paper: true, // set to false for live trading
  usePolygon: false // set to true if you want to use Polygon data
});

export default alpaca;