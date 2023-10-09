const express = require('express');
const { adminCreate, adminLogin, adminAllUserGet } = require('../controller/adminControl');
const { isAuthenticated, isAthorizedRole } = require('../middleware/AdminAutheticated');

const router = express.Router();

router.route('/adregister').post(adminCreate);
router.route('/adlogin').post(adminLogin);
router.route('/alluser').get(isAuthenticated,isAthorizedRole('user'),adminAllUserGet);
module.exports = router;