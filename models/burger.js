const orm = require('../config/orm');

const burger = {

  selectAll() {
    return orm.selectAll()
  }, 

  add(burger_name) {
    console.log('here')
    return orm.insertOne(['burger_name',burger_name])
  },

  update(id, burger_name, devoured) {
    return orm.updateOne(
      ['id', id], ['burger_name', burger_name], ['devoured', devoured]
    )
  }
}

module.exports = burger;