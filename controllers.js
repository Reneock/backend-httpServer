const BankModel = require('./model');

//request handlers/controllers
const listBanksController = (req, res) => {
  //list all banks
  const banks = BankModel.all();
  res.json({data: banks});
}

const createBankController = (req, res) => {
  //create a bank
  const {name, location, branch, phone, address, accountNumber} = req.body;

  const bank = new BankModel({name, location, branch, phone, address, accountNumber});

  bank.save();

  res.json({message: "create succesful", data: bank});

}

const updateBankController = (req, res) => {
  //update bank
  const {name, location, branch, phone, address, accountNumber} = req.body;

  const updatedBank = BankModel.update({name, location, branch, phone, address, accountNumber});

  res.json({message: "update successful", data: updatedBank});
}

const deleteBankController = (req, res) => {
  //delete bank
  const {name} = req.body;
  const deletedBank = BankModel.delete({name});
  res.json({message: "bank deleted", data: deletedBank});
}

module.exports = {
  listBanksController,
  createBankController,
  updateBankController,
  deleteBankController
}