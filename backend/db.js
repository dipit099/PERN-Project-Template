const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "paste_your_username_here",
    database: "paste_your_database_name_here",
    password: "paste_your_password_here",
});

module.exports = pool;