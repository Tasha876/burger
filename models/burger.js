const orm = require('../config/orm');

const burger = {

  async selectAll() {
    let all = await orm.selectAll().catch(err => console.log(err));
    return all
  }, 

  async add(burger_name) {
    return await orm.insertOne(['burger_name', burger_name])
  },

  async update(id, devoured) {
    return await orm.updateOne(
      id, ['devoured', devoured]
    )
  }
}

module.exports = burger;