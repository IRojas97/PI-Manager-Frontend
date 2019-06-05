import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Comment } from '../models';

const routes = {
  comments: '/comments',
  comment: (id: string) => `/comments/${id}`,
  reply: '/comments/reply'
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Comment[]> {
    return this.apiService.get(routes.comments);
  }

  getSingle(id: string): Observable<Comment> {
    return this.apiService.get(routes.comment(id));
  }

  postComment(comment: Comment): Observable<Comment> {
    return this.apiService.post(routes.comments, comment);
  }

  postReply(comment: Comment): Observable<Comment> {
    return this.apiService.post(routes.reply, comment);
  }
}
