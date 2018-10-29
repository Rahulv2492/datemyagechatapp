import express from 'express';
import subcategory from './../controllers/subcategory/subcategory';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/getAllSubcategory', checkToken.ensureAuth, subcategory.getAllSubcategory);

module.exports = router;