import Alpaca from '@alpacahq/alpaca-trade-api'

const alpaca = new Alpaca({
    keyId: 'PKQDTZOY8W9MLWW81LC6',
    secretKey: 'lW0OOIcOxXXDhJfkzWBh2RCXbu0OoHkofhgv6V6c',
    paper: true,
})

export default alpaca