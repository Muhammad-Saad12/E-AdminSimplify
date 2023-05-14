const express = require('express');
const router = express.Router();
const login=require('../controller/login');

router.get('/', login.mainPage);

router.get('/admin-portal', login.isLoggedIn,login.adminPortal);

router.get('/logout', login.logout);

router.get('/admin-panel',login.adminPanel)

router.get('/auth/admin',login.authAdmin)

router.get('/failed',login.failed)

router.get('/check',login.isLoggedIn,login.check)

module.exports = router;
