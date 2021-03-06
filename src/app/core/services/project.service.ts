import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Project } from '../models/project.model';
import { ApiService } from './api.service';

const routes = {
  projects: '/projectIdeas',
  project: (id: string) => `/projectIdeas/${id}`,
  projectComplete: (id: string) => `/projectIdeas/${id}/complete`
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Project[]> {
    return this.apiService.get(routes.projects);
  }

  getSingle(id: string): Observable<Project> {
    return this.apiService.get(routes.project(id));
  }

  getSingleComplete(id: string): Observable<Project> {
    return this.apiService.get(routes.projectComplete(id));
  }

  postProject(project: Project): Observable<Project> {
    return this.apiService.post(routes.projects, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.apiService.delete(routes.project(id));
  }

  putProject(id: string, project: Project): Observable<Project> {
    return this.apiService.put(routes.project(id), project);
  }
}
