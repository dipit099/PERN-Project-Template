const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "alliswell",
});

module.exports = pool;

// {
//     "previewLimit": 50,
//     "server": "localhost",
//     "port": 5432,
//     "driver": "PostgreSQL",
//     "name": "My_connection",
//     "database": "postgres",
//     "username": "postgres",
//     "password": "alliswell",
//     "connectionTimeout": 30
//   }