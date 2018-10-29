import express from 'express';
import userPlaylist from './../controllers/userplaylist/userplaylist';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.get('/getUserPlaylistId', checkToken.ensureAuth, userPlaylist.getUserPlaylistId);
router.get('/getUserPlaylist', checkToken.ensureAuth, userPlaylist.getUserPlaylist);
router.post('/addUserPlaylist', checkToken.ensureAuth, userPlaylist.addUserPlaylist);
router.delete('/deleteUserPlaylist', checkToken.ensureAuth, userPlaylist.deleteUserPlaylist);
// router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);

module.exports = router;