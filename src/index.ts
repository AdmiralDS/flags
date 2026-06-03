export * as FlagsPack from './components.js';
import { COMPONENTS_NAMES } from './constants/components-names.js';
import { ISO_ALPHA3 } from './constants/iso-codes.js';

export type ComponentName = (typeof COMPONENTS_NAMES)[number];
export type CountryAlpha3Code = (typeof ISO_ALPHA3)[number];

export { ComponentsNames } from './constants/alpha3-to-component.js';
export { CountriesRusNames } from './constants/countries-rus-names.js';
export { CountriesEngNames } from './constants/countries-eng-names.js';
