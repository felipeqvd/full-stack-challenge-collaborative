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

const createPerson = async (req, res) => {
    const { fullname, birth } = req.body;
    
    const reponse = await pool.query('INSERT INTO persons (fullname, birth) VALUES ($1, $2)', [fullname, birth]);
    res.send('Persona creada');
}

module.exports = {
    getPersons,
    createPerson
}