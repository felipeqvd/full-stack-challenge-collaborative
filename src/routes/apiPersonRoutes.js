const { Router } = require('express');
const router = Router();

const { getPersons, createPerson} = require('../controllers/persons.controller');

router.get('/persons', getPersons);
router.post('/persons', createPerson);

module.exports = router;