import { Solution } from './solution.model';

export class Project {
  id: string;
  name: string;
  author: string;
  description: string;
  createdDate: Date;
  editedDate: Date;
  difficulty: string;
  solutionList: Array<Solution>;
}
