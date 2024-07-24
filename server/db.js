const Pool = require("pg").Pool;
const pool = new Pool({      
    host: "localhost",
    port: 5432,
    user: "postgres",     
    database: "your_db",
    password: "your_password",
});

module.exports = pool;