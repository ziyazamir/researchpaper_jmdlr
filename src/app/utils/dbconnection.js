import mysql from 'mysql2/promise';

// Create the connection to database
const myconnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_user,
    database: process.env.DB,
    password: process.env.DB_pass,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});
// const myconnection = await mysql.createConnection({
//     host: '193.203.184.105',
//     user: 'u306537374_ijclsi',
//     database: 'u306537374_ijclsi',
//     password: '{{{Password2}}}',
// });
// console.log(myconnection);

export default myconnection;