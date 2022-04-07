import {ISO3_CODES, NAMES} from "../constants/countries";

export type CountryName = typeof NAMES[number];
export type CountryIso3Code = typeof ISO3_CODES[number];