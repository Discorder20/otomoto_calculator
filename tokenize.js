let BRANDS = {};
let MODELS = {};
let FUELS = {};
let TRANSMISSIONS = {};

function tokenizeBrand(brand) {
    if (!BRANDS[brand]) {
        BRANDS[brand] = Object.keys(BRANDS).length + 1;
    }
    return BRANDS[brand];
}

function tokenizeModel(model) {
    if (!MODELS[model]) {
        MODELS[model] = Object.keys(MODELS).length + 1;
    }
    return MODELS[model];
}

function tokenizeFuel(fuel) {
    if (!FUELS[fuel]) {
        FUELS[fuel] = Object.keys(FUELS).length + 1;
    }
    return FUELS[fuel];
}

function tokenizeTransmission(transmission) {
    if (!TRANSMISSIONS[transmission]) {
        TRANSMISSIONS[transmission] = Object.keys(TRANSMISSIONS).length + 1;
    }
    return TRANSMISSIONS[transmission];
}

export {tokenizeBrand, tokenizeModel, tokenizeFuel, tokenizeTransmission}

