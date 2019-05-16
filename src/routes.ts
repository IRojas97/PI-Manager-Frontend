import { ProjectListComponent } from './app/projectIdeas/project-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'projectIdeas', component: ProjectListComponent },
  { path: '', redirectTo: '/projectIdeas', pathMatch: 'full' }
];
