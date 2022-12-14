const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { login } = require('../controllers/users');
const { sendOrder } = require('../controllers/orders');
const { getProducts } = require('../controllers/products');
const { getPhotos } = require('../controllers/photos');
const routerProducts = require('./products.js');
const routerPhotos = require('./photos.js');
const { auth } = require('../middlewares/auth.js');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    password: Joi.string().required().min(8),
  }),
}), login);
router.post('/orders', celebrate({
  body: Joi.object().keys({
    text: Joi.string().required(),
  }),
}), sendOrder);

router.get('/products', getProducts);
router.use('/products', auth, routerProducts);

router.get('/photos', getPhotos);
router.use('/photos', auth, routerPhotos);
router.use(/\//, auth);

module.exports = router;