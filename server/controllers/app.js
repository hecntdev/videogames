const model = require('../models/app')

const health = async () => {
  const d = await model.getConsoles()
  console.log(d);
}

module.exports.health = health;
