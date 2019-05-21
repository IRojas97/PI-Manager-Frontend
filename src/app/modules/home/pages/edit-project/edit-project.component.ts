import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../../../core/models/project.model';
import { ProjectService } from '../../../../core/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  projectForm: FormGroup;
  name: FormControl;
  author: FormControl;
  description: FormControl;

  project: Project;

  constructor(
    private http: HttpClient,
    private router: Router,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.project = this.route.snapshot.data.project$;
    this.name = new FormControl(this.project.name, Validators.required);
    this.author = new FormControl(this.project.author, Validators.required);
    this.description = new FormControl(
      this.project.description,
      Validators.required
    );

    this.projectForm = new FormGroup({
      name: this.name,
      author: this.author,
      description: this.description
    });
  }

  putProject(formValues: any) {
    this.project = {
      id: this.project.id,
      name: formValues.name,
      author: formValues.author,
      description: formValues.description,
      createdDate: this.project.createdDate
    };

    this.projectService.putProject(this.project.id, this.project).subscribe(
      res => {
        this.router.navigate(['/dashboard/project', res.id]);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/dashboard/project', this.project.id]);
  }
}
