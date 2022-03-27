import {CountryIso3Code} from "./@types/country";

export const getComponent = (country: CountryIso3Code) => {
    // import(`./icons/${name}.svg`)
    //     .then((module) => {
    //         /* Persist data in state */
    //         setIconModule(module);
    //     })
    //     .catch((error) => {
    //         /* Do not forget to handle errors */
    //         console.error(`Icon with name: ${name} not found!`);
    //     });
}

export const getComponentList = (countries: Array<CountryIso3Code>) => {

}

export const getAllComponents = () => {

}

// import metadata from '@openvtb/admiral-icons/metadata.json';
// import * as FlagsIcons from '#ui-kit3/icons/IconComponents-flags';
// import { ElementType } from 'react';
// import { CountryName } from '#ui-kit3/components/input/PhoneNumberInput/constants';
//
// type IconMeta = {
//     name: string;
//     path: string;
//     svg: string;
//     type: string;
// };
//
// type IconComponents = {
//     name: string;
//     SvgComponent: ElementType;
// };
//
// type Metadata = Record<string, Array<IconMeta>>;
//
// const iconsPack: Array<IconComponents> = (metadata as Metadata)['flags'].map((iconMetaInfo: IconMeta) => {
//     return {
//         name: iconMetaInfo.name,
//         SvgComponent: (FlagsIcons as { [key: string]: ElementType })[iconMetaInfo.name],
//     };
// });
//
// export const getIcon = (name: CountryName): ElementType | null => {
//     const item = iconsPack.find((flag: IconComponents) => flag.name === name);
//
//     return item ? item.SvgComponent : null;
// };