import { resolve } from 'path';
import fsExtra from 'fs-extra';
//import flagsMeta from '@admiral-ds/icons/flags-metadata.json' assert { type: 'json' };
import { ISO_ALPHA3, IsoCodes } from '../src/constants/iso-codes';
import { ComponentsNames } from '../src/constants/alpha3-to-component';
import { CountriesRusNames } from '../src/constants/countries-rus-names';
import { CountriesEngNames } from '../src/constants/countries-eng-names';

// import { readFile } from 'fs/promises';

// const flagsMeta = JSON.parse(
//   await readFile(new URL('../node_modules/@admiral-ds/icons/flags-metadata.json', import.meta.url)),
// );

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const flagsMeta = require('@admiral-ds/icons/flags-metadata.json');

const { existsSync, createFileSync, writeFileSync } = fsExtra;

export const generateReactExportFile = () => {
  const exportFileName = resolve('src', `components.ts`);
  if (!existsSync(exportFileName)) {
    createFileSync(exportFileName);
  }

  const exportFileContent = flagsMeta
    .map(({ name, path }) => `export { ReactComponent as ${name} } from '${path}';`)
    .concat(['']) // add empty lane at the file end
    .join('\n');

  writeFileSync(exportFileName, exportFileContent);
};

const codesInMeta = flagsMeta.map((item) => item.isoCode);
const namesInMeta = flagsMeta.map((item) => item.name);

const checkComponentsInMeta = () => {
  const componentsAlpha3 = Object.keys(ComponentsNames);

  const notInMeta = componentsAlpha3.map((item) => !codesInMeta.includes(item) && item).filter((item) => !!item);

  const notInComponents = codesInMeta.map((item) => !componentsAlpha3.includes(item) && item).filter((item) => !!item);

  if (notInMeta.length === 0 && notInComponents.length === 0) {
    console.info('Metafile codes match to components list');
    return;
  }

  if (notInMeta.length > 0) {
    console.error('Exist in components list and missing in metafile', notInMeta);
  } else {
    console.info('All components in metafile');
  }

  if (notInComponents.length > 0) {
    console.error('Exist in metafile list and missing in components', notInMeta);
  } else {
    console.info('All metafile in components');
  }
};

const checkComponentsNames = () => {
  const componentsNames = Object.values(ComponentsNames);

  const notInMeta = componentsNames.map((item) => !namesInMeta.includes(item) && item).filter((item) => !!item);

  const notInComponents = namesInMeta.map((item) => !componentsNames.includes(item) && item).filter((item) => !!item);

  if (notInMeta.length === 0 && notInComponents.length === 0) {
    console.info('Metafile names match to components list');
    return;
  }

  if (notInMeta.length > 0) {
    console.error('Exist in components list and missing in metafile', notInMeta);
  } else {
    console.info('All components in metafile');
  }

  if (notInComponents.length > 0) {
    console.error('Exist in metafile list and missing in components', notInMeta);
  } else {
    console.info('All metafile in components');
  }
};

const checkShortNames = () => {
  const componentsAlpha3 = Object.keys(ComponentsNames);
  const codesRusShortName = Object.keys(CountriesRusNames);
  const codesEngShortName = Object.keys(CountriesEngNames);

  const missingRus = codesRusShortName.map((item) => !componentsAlpha3.includes(item) && item).filter((item) => !!item);

  const missingEng = codesEngShortName.map((item) => !componentsAlpha3.includes(item) && item).filter((item) => !!item);

  if (missingRus.length > 0) {
    console.error('Has not russian short name', missingRus);
  } else {
    console.info('All components has russian short name');
  }

  if (missingRus.length > 0) {
    console.error('Has not english short name', missingEng);
  } else {
    console.info('All components has english short name');
  }
};

const checkAllCountriesInPack = () => {
  const missingFlags = ISO_ALPHA3.map((item) => {
    const exist = codesInMeta.includes(item);

    return exist ? null : item;
  }).filter((item) => !!item);

  if (missingFlags.length > 0) {
    const countries = missingFlags.map((item) => {
      const country = IsoCodes.find((obj) => obj.alpha3 === item);
      return country ? `${country.engShortName} (${item})` : item;
    });
    console.error('missing flags: ', countries);
  } else {
    console.info('all countries in pack');
  }
};

export const checkCodes = () => {
  checkComponentsInMeta();
  checkComponentsNames();
  checkShortNames();
  checkAllCountriesInPack();
};
