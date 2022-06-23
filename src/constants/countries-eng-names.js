"use strict";
exports.__esModule = true;
exports.CountriesEngNames = void 0;
var iso_codes_1 = require("./iso-codes");
exports.CountriesEngNames = iso_codes_1.IsoCodes.reduce(function (acc, item) {
    acc[item.alpha3] = item.engShortName;
    return acc;
}, {});
