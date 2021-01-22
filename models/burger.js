const orm = require('../config/orm');

const burger = {

  async selectAll() {
    let all = await orm.selectAll().catch(err => console.log(err));
    console.log(all)
    return all
  }, 

  async add(burger_name) {
    return await orm.insertOne(['burger_name', burger_name])
  },

  async update(id, burger_name, devoured) {
    return await orm.updateOne(
      ['id', id], ['burger_name', burger_name], ['devoured', devoured]
    )
  }
}

module.exports = burger;