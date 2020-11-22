const { query } = require('express');
const { Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'qwert',
    database: 'familyapi',
    port: '5432'
});

const getPersons = async (req, res) => {
    const response = await pool.query('SELECT * FROM persons');    
    res.status(200).json(response.rows);
}

module.exports = {
    getPersons
}