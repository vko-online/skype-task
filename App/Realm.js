const Realm = require('realm')
const realm = new Realm()

class Poloniex {}

Poloniex.schema = {
  name: 'Poloniex',
  properties: {
    name: 'string',
    highestBid: 'int',
    percentChange: 'int'
  }
}

exports.addMany = function (list) {
  list.forEach(item => {
    realm.write(() => {
      realm.create('Poloniex', item)
    })
  })
  console.log('Realm', realm.objects('Poloniex'))
}
