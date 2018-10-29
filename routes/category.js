import express from 'express';
import category from './../controllers/category/category';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/getAllCategory', checkToken.ensureAuth, category.getAllCategory);

module.exports = router;
