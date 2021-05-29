const conn = require('../../assets/conn')
const db = process.env.DB

const getConsoles = async () => {
  console.log(colors.green('GET CONSOLES'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    try {
      const data = await client.db(db).collection("consoles").find({}).toArray()
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

const getGames = async () => {
  console.log(colors.green('GET GAMES'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    try {
      const data = await client.db(db).collection("videogames").find({}).toArray()
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

const findName = async (d) => {
  console.log(colors.green('GET findName'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    console.log(colors.yellow('OPTIONS:'), d);
    try {
      const obj = d.name.length === 0 ? {} : {"name": new RegExp(d.name, 'i')}
      const data = await client.db(db).collection("videogames").find(obj).toArray()
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

const findYear = async (d) => {
  console.log(colors.green('GET findYear'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    console.log(colors.yellow('OPTIONS:'), d);
    try {
      const obj = {"year": d.year}
      const data = await client.db(db).collection("videogames").find(obj).toArray()
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

const findDevelop = async (d) => {
  console.log(colors.green('GET findDevelop'));
  return new Promise(async (resolve, reject) => {
    const client = await conn.doConn()
    await client.connect()

    console.log(colors.yellow('OPTIONS:'), d);
    try {
      const obj = {"developer.name": d.developer}
      const data = await client.db(db).collection("videogames").find(obj).toArray()
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

module.exports.getConsoles = getConsoles;
module.exports.getGames = getGames;
module.exports.findName = findName;
module.exports.findYear = findYear;
module.exports.findDevelop = findDevelop;
