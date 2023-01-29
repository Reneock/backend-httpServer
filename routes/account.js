const express = require('express');
const {body} = require('express-validator');
const {createAccountController, listAccountController} = require('../controllers/accounts');
const AccountModel = require('../models/account');
const router = express.Router();

router.post('/account', [
  body('name').trim().not().isEmpty().withMessage('Name cannot be empty'),
  body('accountType').trim().not().isEmpty().withMessage('Account type cannot be empty'),
  body('number').trim().not().isEmpty().withMessage('This number cannot be empty'),
  body('bankId').trim().not().isEmpty().withMessage('Bank Id must be filled').custom((value, {req}) => {
    return AccountModel.findOne({'bankId': value}).then(
      accountDoc => {
        if (accountDoc)
          return Promise.reject('Bank Id already in use');
      }
    )
  })
], createAccountController);
router.get('/account', listAccountController);

module.exports = router;