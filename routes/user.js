import express from 'express';
import user from './../controllers/user/user';
import checkToken from './../middleware/tockenChecker';

const router = express.Router({ caseSensitive: true });

router.post('/addUserDetails',  user.addUserDetails);
router.get('/getAllUsers',  user.getAllUsers);
// router.put('/uploadProfilePicture', checkToken.ensureAuth, user.uploadProfilePicture);

module.exports = router;


