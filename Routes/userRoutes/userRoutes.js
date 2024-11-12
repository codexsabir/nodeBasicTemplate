const router = require('express').Router();
const {updateUser,deleteUser,getUser,getUserById} = require('../../controller/userController/userController');
const {protectTo} = require('../../controller/authController/authController');

router.get('/', getUser);
router.get('/:id', getUserById);
router.patch('/:id', protectTo('admin'), updateUser);
router.delete('/:id', protectTo('admin'), deleteUser);


module.exports = router;