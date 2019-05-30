import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '@app/core';
import { ProjectService } from '../../../../core/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.project = this.route.snapshot.data.project$;
  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id).subscribe(res => {
      this.router.navigate(['/dashboard/home']);
    });
  }
}
