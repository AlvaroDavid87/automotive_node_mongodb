const Brand = require('../models/Brand'); 

function brands() { 
  return Brand.find({});
}

function brand(args) {
  return Brand.findById(args.id)
}

function createBrand(args) {
  let brand = new Brand(args.brandInput);
  return brand.save();
}

function deleteBrand(args) {
  return Brand.findByIdAndRemove(args.id);
}

function updateBrand(args) {
  return Brand.findByIdAndUpdate(args.id, args.brandInput, { new: true }); 
}

module.exports = { brands, brand, createBrand, deleteBrand, updateBrand }