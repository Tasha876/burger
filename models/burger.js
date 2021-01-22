const orm = require('../config/orm');

const burger = {

  async selectAll() {
    return await orm.selectAll().catch(err => console.log(err));
  }, 

  async add(burger_name) {
    return await orm.insertOne(['burger_name', burger_name])
  },

  async update(id, devoured) {
    return await orm.updateOne(
      id, ['devoured', devoured]
    )
  },

  async delete(id) {
    return await orm.deleteOne(id);
  }
}

module.exports = burger;