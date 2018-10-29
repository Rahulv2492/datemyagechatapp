'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _playlist = require('./../controllers/playlist/playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _tockenChecker = require('./../middleware/tockenChecker');

var _tockenChecker2 = _interopRequireDefault(_tockenChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ caseSensitive: true });
router.get('/getAllPlaylist', _tockenChecker2.default.ensureAuth, _playlist2.default.getAllPlaylist);
router.get('/getAllPlaylistById', _tockenChecker2.default.ensureAuth, _playlist2.default.getAllPlaylistById);
router.post('/addPlaylist', _tockenChecker2.default.ensureAuth, _playlist2.default.addPlaylist);

module.exports = router;