const model = require('../../models/game')

const findById = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.findById(d)
    resolve(res)
  });
}

const insertOne = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.insertOne(d)
    resolve(res)
  });
}

module.exports.findById = findById;
module.exports.insertOne = insertOne;
