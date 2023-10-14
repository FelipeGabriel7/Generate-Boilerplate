//#!/usr/bin/env node

import { GenFile } from 'controller/generate.controller';
import inquirer from 'inquirer';
// interface
import { IQuestions } from 'interface/IQuestions';
import { questions } from 'questions';

class Initial {
  constructor() {
    inquirer.prompt(questions).then((res: IQuestions) => {
      GenFile.gene(res);
    });
  }
}

new Initial();
