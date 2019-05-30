export class Comment {
  id: string;
  author: string;
  text: string;
  createdDate: Date;
  editedDate: Date;
  replies: Array<Comment>;
  parentId: string;
}
