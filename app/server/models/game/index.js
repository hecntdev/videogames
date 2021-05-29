const conn = require('../../assets/conn')
const db = process.env.DB
const ObjectId = require('mongodb').ObjectID;

const findById = async (d) => {
  console.log(colors.green('GET findById'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    console.log(colors.yellow('OPTIONS:'), d);
    try {
      const obj = { "_id" : new ObjectId(d.id)}
      const data = await client.db(db).collection("videogames").findOne(obj)
      console.log(colors.blue('DATA: '), data);
      resolve(data)
    } catch (e) {
      console.log(colors.red('ERR:'), e);
      reject(e)
    } finally {
      await client.close()
    }
  });
}

const insertOne = async (d) => {
  console.log(colors.green('GET insertOne'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    console.log(colors.yellow('OPTIONS:'), d);
    try {
      const obj = d
      const data = await client.db(db).collection("videogames").insertOne(obj)
      console.log(colors.blue('DATA: '), data);
      resolve(data)
    } catch (e) {
      console.log(colors.red('ERR:'), e);
      reject(e)
    } finally {
      await client.close()
    }
  });
}

module.exports.findById = findById;
module.exports.insertOne = insertOne;
