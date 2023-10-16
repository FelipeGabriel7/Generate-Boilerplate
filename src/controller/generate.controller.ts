// Interfaces
import { EDescription } from 'enum/EDescription';
import { EValuesQuestions } from 'enum/QuestionsValues';
import { IQuestions } from 'interface/IQuestions';
import path from 'node:path';
import shellJs from 'shelljs';
import fs from 'node:fs';

class GenerateFile {
  public gene(res: IQuestions) {
    console.log(res.dirName);

    try {
      switch (res.tech) {
        case EValuesQuestions.NODEJS_TS:
          this._exectPath(
            EDescription.NODEJS_BOILERPLATE,
            res.dirName,
            res.author,
          );
          break;
        case EValuesQuestions.SCSS:
          this._exectPath(
            EDescription.SCCS_BOILERPLATE,
            res.dirName,
            res.author,
          );
          break;
        case EValuesQuestions.REACT:
          this._exectPath(
            EDescription.REACT_BOILERPLATE,
            res.dirName,
            res.author,
          );
          break;
        case EValuesQuestions.REACT_NATIVE:
          this._exectPath(
            EDescription.REACT_NATIVE_BOILERPLATE,
            res.dirName,
            res.author,
          );
          break;
      }
    } catch (e) {
      console.log(e);
    }
  }

  private _exectPath(gitName: string, folderName: string, author: string) {

    console.log(folderName);
    try {
      shellJs.cd(path.resolve());

      if (gitName === EDescription.NODEJS_BOILERPLATE) {
        return shellJs.exec(
          `git clone https://github.com/troquatte/boilerplate-typescript-nodejs`,
        );
      }

      if (gitName === EDescription.SCCS_BOILERPLATE) {
        return shellJs.exec(
          `git clone https://github.com/troquatte/boilerplate-scss`,
        );
      }

      if (gitName === EDescription.REACT_BOILERPLATE) {
        return shellJs.exec(
          `git clone https://github.com/react-boilerplate/react-boilerplate`,
        );
      }

      if (gitName === EDescription.REACT_NATIVE_BOILERPLATE) {
        return shellJs.exec(
          `https://github.com/thecodingmachine/react-native-boilerplate`,
        );
      }

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`,
      );

      console.log(' Projeto criado com sucesso ! ', 'Autor :', author);
      return shellJs.exit();
    } catch (error) {
      console.log(error);
    }
  }
}

export const GenFile = new GenerateFile();
