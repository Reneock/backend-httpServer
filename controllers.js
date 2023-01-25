const AccountModel = require('./accountModel');
const BankModel = require('./model');

const listBanksController = (req, res) => {
  const{id} = req.params;
  if (id){
    BankModel.find({_id: id}).then (banks => {
      res.json({data: banks});
    }).catch(err => console.log(err));
  }else{
    BankModel.find().then (banks => {
      res.json({data: banks});
    }).catch(err => console.log(err));
  } 
}

const createBankController = (req, res) => {
  const {name, location, branch, phone, address, accountNumber} = req.body;

  const bank = new BankModel({name, location, branch, phone, address, accountNumber});

  bank.save().then(result => {
    res.json({message: "create succesful", data: result});
  }).catch(error => console.log(error));
}

const updateBankController = (req, res) => {
  const {id, name, location, branch, phone, address, accountNumber} = req.body;

  BankModel.findById(id).then( bank => {
    if(bank){
      bank.name = name;
      bank.location = location;
      bank.branch = branch;
      bank.phone = phone;
      bank.address = address;
      bank.accountNumber = accountNumber;

      bank.save();

      res.json({message: "update successful", data: bank});
    }
    res.json({message: "update not successful"});
  }).catch(err => console.log(err));
  // const updatedBank = BankModel.update({name, location, branch, phone, address, accountNumber}); 
}

const deleteBankController = (req, res) => {
  const {id} = req.body;
  const deletedBank = BankModel.findByIdAndRemove(id).then(deletedBank => {
    if(deletedBank){
      AccountModel.deleteMany({bankId: deletedBank._id}).then(result => {
        res.json({message: "bank deleted", data: deletedBank});
      }).catch(err => console.log(err));
      return;
    }
  res.json({message: "bank not found"});

  });
}

const createAccountController = (req, res) => {
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
  listBanksController,
  createBankController,
  updateBankController,
  deleteBankController,
  createAccountController,
  listAccountController
}