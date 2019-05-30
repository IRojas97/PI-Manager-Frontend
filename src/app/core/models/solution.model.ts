import { Comment } from './comment.model';

export class Solution {
  id: string;
  author: string;
  text: string;
  createdDate: Date;
  editedDate: Date;
  accepted: boolean;
  comments: Array<Comment>;
  repository: URL;
  parentId: string;
}
