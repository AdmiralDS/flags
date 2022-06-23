import {CountryAlpha3Code} from "../@types/country";
import {IsoCodes} from "./iso-codes";

type Dictionary = { [key in CountryAlpha3Code]: string }

export const CountriesEngNames: Dictionary = IsoCodes.reduce((acc: Dictionary, item) => {
    acc[item.alpha3] = item.engShortName;
    return acc;
}, {})