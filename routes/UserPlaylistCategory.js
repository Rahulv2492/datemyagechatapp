import express from 'express';
import userPlaylistCategory from './../controllers/userPlaylistcategory/userPlaylistcategory';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/getUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.getUserPlaylistCategory);
router.post('/addUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.addUserPlaylistCategory);
router.delete('/deleteUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.deleteUserPlaylistCategory);
router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);


module.exports = router;
