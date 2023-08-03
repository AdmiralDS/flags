import type { CountryAlpha3Code } from '../index';
import { IsoCodes } from './iso-codes';

type Dictionary = { [key in CountryAlpha3Code]: string };

export const CountriesEngNames: Dictionary = IsoCodes.reduce((acc: Dictionary, item) => {
  acc[item.alpha3] = item.engShortName;
  return acc;
}, {});
