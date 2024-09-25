const {Client} = require('pg');
require('dotenv').config();

 async function dbConnect(){
    const client = new Client(process.env.secret)
    await client.connect();
    return client;
}

module.exports = {dbConnect}