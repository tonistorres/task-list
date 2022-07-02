import mysql from 'mysql2/promise';

const { DB_USER, DB_PASS_WORD, DB_NAME } = process.env;

const connection = mysql.createPool({
  host: 'localhost',
  user: DB_USER,
  password: DB_PASS_WORD,
  database: DB_NAME,
});

export default connection;