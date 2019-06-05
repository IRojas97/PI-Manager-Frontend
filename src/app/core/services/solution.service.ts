import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Solution } from '../models';

const routes = {
  solutions: '/solutions',
  solution: (id: string) => `/solutions/${id}`
};

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  constructor(
    private apiService: ApiService
    ) { }

    getAll(): Observable<Solution[]> {
      return this.apiService.get(routes.solutions);
    }

    getSingle(id: string): Observable<Solution> {
      return this.apiService.get(routes.solution(id));
    }

    postSolution(solution: Solution): Observable<Solution> {
      return this.apiService.post(routes.solutions, solution);
    }
}
