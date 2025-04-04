import * as tf from '@tensorflow/tfjs-node-gpu';
import fetchCars from './fetchcars.js';
import { tokenizeBrand, tokenizeFuel, tokenizeModel, tokenizeTransmission } from './tokenize.js';

console.log('Fetching cars...');
let data = await fetchCars();
console.log('Cars fetched!, length:', data.length);

console.log('Tokenizing data...');
let tokenizedData = data.map((car) => {
    return {
        brand: tokenizeBrand(car.brand),
        model: tokenizeModel(car.model),
        price: car.price,
        mileage: car.mileage,
        fuel: tokenizeFuel(car.fuel),
        transmission: tokenizeTransmission(car.transmission),
        year: car.year
    };
});

console.log('Data tokenized!');


