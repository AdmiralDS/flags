import {COMPONENTS_NAMES} from "../constants/components-names";
import {ISO_ALPHA3} from "../constants/iso-codes";

export type ComponentName = typeof COMPONENTS_NAMES[number];
export type CountryAlpha3Code = typeof ISO_ALPHA3[number];