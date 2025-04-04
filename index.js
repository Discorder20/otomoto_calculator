import * as tf from '@tensorflow/tfjs-node-gpu';
import fetchCars from './fetchcars.js';

console.log('Fetching cars...');
let data = await fetchCars();


