const { Router } = require('express');
const router = Router();

const { getPersons, createPerson} = require('../controllers/persons.controller');
const { getDomumentTypes} = require('../controllers/document-types.controller');

router.get('/persons', getPersons);
router.post('/persons', createPerson);

router.get('/document_types', getDomumentTypes);

module.exports = router;