const {Router} = require('express');
const {check} = require('express-validator');

// Controller
const {getUser,
       postUser,
       putUser} = require('../controllers/users.controller');

// Middlewares
const {validationFiled} = require('../middlewares/validar-campos');

const router = Router();



// Petición GET
router.get('/', getUser);


router.post('/', [
   

     validationFiled,
],  postUser);


router.put('/:id', putUser)

module.exports = router;