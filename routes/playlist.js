import express from 'express';
import playlist from './../controllers/playlist/playlist';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });
router.get('/getAllPlaylist', checkToken.ensureAuth, playlist.getAllPlaylist);
router.get('/getAllPlaylistById', checkToken.ensureAuth, playlist.getAllPlaylistById);
router.post('/addPlaylist', checkToken.ensureAuth, playlist.addPlaylist);

module.exports = router;
