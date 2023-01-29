const AccountModel = require('../models/account');
const {validationResult} = require('express-validator');

const createAccountController = (req, res) => {
  //validation check
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.json({message: errors.array()[0].msg});
  }

  const {name, number, accountType, bankId} = req.body;
  const account = new AccountModel({name, number, accountType, bankId});
  account.save().then(result => {
    if(result)
      res.json({message:"Account Created", data: result});
    else
      res.json({message: "Failed to Create Account"});   
  });
}

const listAccountController = (req, res) => {
  AccountModel.find()
  .populate("bankId")
  .then(accounts => {
    res.json({data: accounts});
  }).catch(err => console.log(err));
}

module.exports = {
  createAccountController,
  listAccountController
}