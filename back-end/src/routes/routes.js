const express = require('express');
const ProductController = require('../controllers/product.controller');
const SaleController = require('../controllers/sale.controller');
const UserController = require('../controllers/user.controller');
const JWT = require('../middlewares/auth.middleware');

const router = express.Router();
const productController = new ProductController();
const saleController = new SaleController();
const userController = new UserController();
router.get('/sellers', (req, res, next) => userController.getSellers(req, res, next));
router.get('/products', (req, res, next) => productController.getAll(req, res, next));
router.get('/orders', JWT, (req, res, next) => saleController.getAll(req, res, next));
router.get('/users', JWT, (req, res, next) => userController.getUsers(req, res, next));
router.get('/orders/:id', JWT, (req, res, next) => saleController.getOne(req, res, next));
router.post('/admregister', JWT, (req, res, next) => userController.admRegister(req, res, next));
router.post('/login', (req, res, next) => userController.login(req, res, next));
router.post('/register', (req, res, next) => userController.register(req, res, next));
router.post('/orders', JWT, (req, res, next) => saleController.create(req, res, next));
router.put('/orders/:id', JWT, (req, res, next) => saleController.update(req, res, next));
router.delete('/users/:id', JWT, (req, res, next) => userController.deleteUser(req, res, next));
module.exports = router;