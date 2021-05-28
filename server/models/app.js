const conn = require('../assets/conn')
const db = process.env.DB

const getConsoles = async () => {
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()
    
    try {
      const data = await client.db(db).collection("consoles").find({}).toArray()
      resolve(data)
    } catch (e) {
      reject(e)
    } finally {
      await client.close()
    }
  });
}

module.exports.getConsoles = getConsoles;
