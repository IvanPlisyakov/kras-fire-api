const router = require('express').Router();
/*const {
  login, createUsers,
} = require('../controllers/users');*/
const routerProducts = require('./products.js');
const routerPhotos = require('./photos.js');
const { auth } = require('../middlewares/auth.js');

router.use('/products', routerProducts);
router.use('/photos', routerPhotos);
router.use(/\//, auth);

module.exports = router;