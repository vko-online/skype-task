import Realm from 'realm'

class Poloniex extends Realm.Object { }

Poloniex.schema = {
  name: 'Poloniex',
  properties: {
    name: 'string',
    highestBid: 'int',
    percentChange: 'int'
  }
}

const realm = new Realm({ schema: [Poloniex] })

exports.addMany = function (list) {
  list.forEach(item => {
    realm.write(() => {
      realm.create('Poloniex', item)
    })
  })
}
