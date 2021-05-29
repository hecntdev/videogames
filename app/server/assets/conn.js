const uri = process.env.URI_MONGO;
const {MongoClient} = require('mongodb');

const doConn = async () => {
  console.log(colors.green("INIT CONN MONGO"));
  const client = new MongoClient(uri);
  return client
}

module.exports.doConn = doConn;
