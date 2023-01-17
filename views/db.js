
{const Pool = require("pg").Pool;
const pool = new Pool({
    user : "postgres",
    password: "Sudha@03",
    host: "localhost",
    database: "sample",
    port: 5432
});

module.exports = pool;}
