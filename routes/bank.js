const express = require('express');
const {body} = require('express-validator');
const {listBanksController, createBankController, updateBankController, deleteBankController} = require('../controllers/banks');
const BankModel = require('../models/bank');
const router = express.Router();

router.get('/bank/:id?', listBanksController);
router.post('/bank', [
  body('name').trim().not().isEmpty().withMessage('Name cannot be empty'),
  body('location').trim().not().isEmpty().withMessage('Location cannot be empty'),
  body('branch').trim().not().isEmpty().withMessage('Branch cannot be empty'),
  body('phone').isMobilePhone("en-GH").custom((value, {req}) => {
    return BankModel.findOne({'phone': value}).then(
      bankDoc => {
        if (bankDoc)
          return Promise.reject('Phone number already taken');
      }
    )
  })
], createBankController);
router.put('/bank', updateBankController);
router.delete('/bank', deleteBankController);

module.exports = router;