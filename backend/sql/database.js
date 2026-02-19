const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'iskola',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM exampletable;';
    const [rows] = await pool.execute(query);
    return rows;
}
async function diakok() {
    const query = 'SELECT * FROM diak;';
    const [rows] = await pool.execute(query);
    return rows;
}
//!Export
module.exports = {
    selectall,
    diakok
};
