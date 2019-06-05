import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';
import { NewSolutionComponent } from './pages/new-solution/new-solution.component';
import { NewCommentComponent } from './pages/new-comment/new-comment.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewSolutionComponent,
    NewCommentComponent
  ],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule {}
