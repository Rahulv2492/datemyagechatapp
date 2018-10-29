'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _likes = require('./../controllers/likes/likes');

var _likes2 = _interopRequireDefault(_likes);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });

router.get('/getAllLikesId', _tockenChecker2.default.ensureAuth, _likes2.default.getAllLikesId);
router.get('/getAlllikedAlbum', _tockenChecker2.default.ensureAuth, _likes2.default.getAlllikedAlbum);
router.post('/addLikesAlbum', _tockenChecker2.default.ensureAuth, _likes2.default.addLikesAlbum);
router.get('/getLikesExist', _tockenChecker2.default.ensureAuth, _likes2.default.getLikesExist);
router.delete('/deleteLikesAlbum', _tockenChecker2.default.ensureAuth, _likes2.default.deleteLikesAlbum);
// router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);


module.exports = router;