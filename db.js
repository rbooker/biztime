/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  //connectionString: "postgresql:///biztime",
  host: 'localhost',
  user: 'ryanb',
  password: '*********',
  database: 'biztime'
});

client.connect();


module.exports = client;