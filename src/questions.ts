import { EValuesQuestions } from 'enum/QuestionsValues';
import path from 'node:path';
import fs from 'node:fs';
import { EDescription } from 'enum/EDescription';
import { EErrosMessage } from 'enum/ErrosEnum';

export const questions: Array<{}> = [
  {
    type: 'list',
    name: 'tech',
    message: 'Qual setup você deseja iniciar a aplicação? ',
    choices: [
      EValuesQuestions.NODEJS_TS,
      EValuesQuestions.SCSS,
      EValuesQuestions.REACT,
      EValuesQuestions.REACT_NATIVE,
    ],
  },
  {
    type: 'input',
    name: 'dirName',
    message: 'Nome do projeto: ',
    validate(folderName: string) {
      // FolderName - não pode ser null
      if (!folderName) return EErrosMessage.NULL;
      // FolderName não pode possuir caracteres especiais
      if (/[^\w\s-]/.test(folderName)) return EErrosMessage.CHARACTERS_SPECIAL;
      // FolderName - Não pode ter o mesmo nome dos arquivos iniciais
      if (
        folderName === EDescription.NODEJS_BOILERPLATE ||
        folderName === EDescription.SCCS_BOILERPLATE ||
        folderName === EDescription.REACT_BOILERPLATE ||
        folderName === EDescription.REACT_NATIVE_BOILERPLATE
      )
        return EErrosMessage.NAME_IS_EQUAL;

      // FolderName - Não pode existir uma pasta no nosso dir
      try {
        const dir = path.resolve(folderName);
        fs.accessSync(dir, fs.constants.R_OK);
        return EErrosMessage.IS_EXISTS;
      } catch (err) {}
      // FolderName - Pasta já existe

      return true;
    },
  },
  {
    type: 'input',
    name: 'author',
    message: 'Nome do autor do projeto:  ',
  },
];
