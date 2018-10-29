import express from 'express';
import likes from './../controllers/likes/likes';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/getAllLikesId', checkToken.ensureAuth, likes.getAllLikesId);
router.get('/getAlllikedAlbum', checkToken.ensureAuth, likes.getAlllikedAlbum);
router.post('/addLikesAlbum', checkToken.ensureAuth, likes.addLikesAlbum);
router.get('/getLikesExist', checkToken.ensureAuth, likes.getLikesExist);
router.delete('/deleteLikesAlbum', checkToken.ensureAuth, likes.deleteLikesAlbum);
// router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);


module.exports = router;