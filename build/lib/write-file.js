/* eslint-disable */
import { appendFile, readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';

const fsAppendFile = promisify(appendFile);

export const writeStaticFile = (file, content) => {
  writeFileSync(file, '', 'utf-8');
  return fsAppendFile(file, content, 'utf-8')
    .then(() => {
      const fileData = readFileSync(file, 'utf-8');
      return { file, data: fileData };
    })
    .catch(err => console.log(err));
};
