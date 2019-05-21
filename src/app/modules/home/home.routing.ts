import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListResolver } from './project-list-resolver.service';
import { HomeComponent } from './pages/home.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectDetailsResolver } from './project-details-resolver.service';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        resolve: {
          projects$: ProjectListResolver
        }
      },
      {
        path: 'project/:id',
        component: ProjectDetailsComponent,
        resolve: {
          project$: ProjectDetailsResolver
        }
      },
      {
        path: 'new',
        component: NewProjectComponent
      },
      {
        path: 'project/:id/edit',
        component: EditProjectComponent,
        resolve: {
          project$: ProjectDetailsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
