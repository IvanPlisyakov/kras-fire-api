const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  login,
} = require('../controllers/users');
const routerProducts = require('./products.js');
const routerPhotos = require('./photos.js');
const { auth } = require('../middlewares/auth.js');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    password: Joi.string().required().min(8),
  }),
}), login);
router.use('/products', auth, routerProducts);
router.use('/photos', auth, routerPhotos);
router.use(/\//, auth);

module.exports = router;