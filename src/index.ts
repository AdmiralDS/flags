export * as FlagsPack from './components';
import { COMPONENTS_NAMES } from './constants/components-names';
import { ISO_ALPHA3 } from './constants/iso-codes';

export type ComponentName = (typeof COMPONENTS_NAMES)[number];
export type CountryAlpha3Code = (typeof ISO_ALPHA3)[number];

export { ComponentsNames } from './constants/alpha3-to-component';
export { CountriesRusNames } from './constants/countries-rus-names';
export { CountriesEngNames } from './constants/countries-eng-names';
