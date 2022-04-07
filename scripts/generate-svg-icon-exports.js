// Этот script запускается автоматически каждый раз перед запуском сторибука

const path = require('path');
const fse = require('fs-extra');
const metadata = require('@admiral-ds/icons/flags-metadata.json');

const generateReactExportFile = () => {
    const exportFileName = path.resolve('src', `components.ts`);
    if (!fse.existsSync(exportFileName)) {
        fse.createFileSync(exportFileName);
    }

    const exportFileContent = metadata
        .map(({name, path}) => `export { ReactComponent as ${name} } from '${path}';`)
        .concat(['']) // add empty lane at the file end
        .join('\n');

    fse.writeFileSync(exportFileName, exportFileContent);
};

generateReactExportFile();
