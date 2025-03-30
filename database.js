// require("dotenv").config();
// // const { Pool } = require("pg");
// // const isProduction=process.env.NODE_ENV==="production";
// // const connectionstring=""
// // const pool=new Pool({
// //     connectionString: isProduction?process.env.DATABASE_URL:connectionstring
// // });
// // module.exports={pool};

// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = "" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });
// module.exports=pg







require("dotenv").config();
const { Pool } = require("pg");

const config = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

module.exports = pool;