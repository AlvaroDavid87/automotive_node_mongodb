const Brand = require('../models/Brand'); 
const CarModel = require('../models/CarModel');

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

function carModels() { 
    return CarModel.find({});
}

function carModel(args) {
    return CarModel.findById(args.id)
}

function createCarModel(args) {
    let carModel = new CarModel(args.carModelInput);
    return carModel.save();
}

function deleteCarModel(args) {
    return CarModel.findByIdAndRemove(args.id);
}

function updateCarModel(args) {
    return CarModel.findByIdAndUpdate(args.id, args.carModelInput, { new: true }); 
}

module.exports = { brands, brand, createBrand, deleteBrand, updateBrand, carModels, carModel, createCarModel, deleteCarModel, updateCarModel}