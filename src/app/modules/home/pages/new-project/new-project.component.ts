import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../../../core/models/project.model';
import { ProjectService } from '../../../../core/services/project.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectForm: FormGroup;
  name: FormControl;
  author: FormControl;
  description: FormControl;
  difficulty: FormControl;

  project: Project;

  constructor(
    private http: HttpClient,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);
    this.difficulty = new FormControl('', Validators.required);

    this.projectForm = new FormGroup({
      name: this.name,
      author: this.author,
      description: this.description,
      difficulty: this.difficulty
    });
  }

  saveProject(formValues: any) {
    this.project = {
      id: undefined,
      name: formValues.name,
      author: formValues.author,
      description: formValues.description,
      createdDate: new Date(),
      editedDate: new Date(),
      difficulty: formValues.difficulty,
      solutionList: new Array()
    };

    this.projectService.postProject(this.project).subscribe(
      res => {
        this.router.navigate(['/dashboard/project', res.id]);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/dashboard/home']);
  }
}
