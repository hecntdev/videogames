const uri = process.env.URI_MONGO;
const {MongoClient} = require('mongodb');
const client = new MongoClient(uri);

// const doConn = async () => {
//   console.log(colors.green("INIT QUERY SINGLE"));
//   try {
//       await client.connect();
//       await listDatabases(client);
//
//   } catch (e) {
//       console.error(e);
//       console.log(colors.red("ERR:"), e);
//   } finally {
//       await client.close();
//       console.log(colors.green("END QUERY SINGLE"));
//   }
// }

const doConn = async () => {
  console.log(colors.green("INIT CONN MONGO"));
  return client
}

// async function listDatabases(client){
//     databasesList = await client.db(db).collection("consoles").find({}).toArray()
//
//     console.log("Databases:", databasesList);
// };

module.exports.doConn = doConn;
// module.exports.endConn = endConn;
