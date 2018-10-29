import express from 'express';
import uip from './../controllers/uip/uip';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/checkAccess', uip.validateUIP);

module.exports = router;
