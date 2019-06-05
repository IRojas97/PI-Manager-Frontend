import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comment, CommentService } from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  commentForm: FormGroup;
  author: FormControl;
  text: FormControl;
  reply: boolean;
  projectId: string;

  comment: Comment;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.author = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.reply = this.route.snapshot.url[4].toString() === 'reply';
    this.projectId = this.route.snapshot.params.projectId;

    this.commentForm = new FormGroup({
      author: this.author,
      text: this.text,
    });
  }

  saveComment(formValues: any) {
    this.comment = {
      id: undefined,
      author: formValues.author,
      text: formValues.text,
      createdDate: new Date(),
      editedDate: new Date(),
      replies: new Array(),
      parentId: this.route.snapshot.params.parentId
    };

    this.reply ? this.postReply() :
      this.postComment();
  }

  postComment() {
    this.commentService.postComment(this.comment).subscribe(
      res => {
        this.router.navigate(['/dashboard/project', this.projectId]);
      },
      err => {
        console.log(err);
      }
    );
  }

  postReply() {
    this.commentService.postReply(this.comment).subscribe(
      res => {
        this.router.navigate(['/dashboard/project', this.projectId]);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/dashboard/project', this.projectId]);
  }
}
