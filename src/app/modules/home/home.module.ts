import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    NewProjectComponent,
    EditProjectComponent
  ],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
  providers: [],
  entryComponents: []
})
export class HomeModule {}
