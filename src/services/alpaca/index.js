import Alpaca from '@alpacahq/alpaca-trade-api';
const alpaca = new Alpaca({
  keyId: "CKKH0I1K1FDZ7FIQKMDU",
  secretKey: "c5FGB00h5k6Xq6rzTiQxiD1Grlh2M3lhkgwaE2fR",
  paper: true, // set to false for live trading,
  baseUrl: 'https://broker-api.sandbox.alpaca.markets'
});

export default alpaca;