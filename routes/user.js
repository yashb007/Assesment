const express = require('express');

const router = express.Router();

const controller = require('../controller/user')


router.post('/login', controller.signin);

router.post('/signup', controller.signup);

router.post('/logout', controller.signout);
router.post('/forgetpass', controller.signout);



module.exports = router;