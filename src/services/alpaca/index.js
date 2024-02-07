import Alpaca from '@alpacahq/alpaca-trade-api'

const alpaca = new Alpaca({
    keyId: 'PKVZ7805H0SR5VOZJJVR',
    secretKey: 'gdP7Ev5ITmQMa7IqWb6KENdSUT4Xrhkz66yU5RuB',
    paper: true,
})

export default alpaca