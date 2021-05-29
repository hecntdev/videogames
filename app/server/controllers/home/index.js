const model = require('../../models/home')

const getGames = async () => {
  return new Promise(async (resolve, reject) => {
    let d = await model.getGames()
    resolve(d)
  });
}

const findName = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.findName(d)
    resolve(res)
  });
}

const findYear = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.findYear(d)
    resolve(res)
  });
}

const findDevelop = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.findDevelop(d)
    resolve(res)
  });
}

const deleteOne = async (d) => {
  return new Promise(async (resolve, reject) => {
    let res = await model.deleteOne(d)
    resolve(res)
  });
}

module.exports.getGames = getGames;
module.exports.findName = findName;
module.exports.findYear = findYear;
module.exports.findDevelop = findDevelop;
module.exports.deleteOne = deleteOne;
