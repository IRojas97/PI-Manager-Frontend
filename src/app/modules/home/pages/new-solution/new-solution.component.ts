import { OnInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Solution, SolutionService } from '@app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './new-solution.component.html',
  styleUrls: ['./new-solution.component.scss']
})
export class NewSolutionComponent implements OnInit {
  solutionForm: FormGroup;
  author: FormControl;
  text: FormControl;
  repository: FormControl;

  solution: Solution;
  projectId: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private solutionService: SolutionService
  ) { }

  ngOnInit() {
    this.author = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.repository = new FormControl('', Validators.required);
    this.projectId = this.route.snapshot.params.projectId;

    this.solutionForm = new FormGroup({
      author: this.author,
      text: this.text,
      repository: this.repository
    });
  }

  saveSolution(formValues: any) {
    this.solution = {
      id: undefined,
      author: formValues.author,
      text: formValues.text,
      createdDate: new Date(),
      editedDate: new Date(),
      accepted: false,
      comments: new Array(),
      repository: formValues.repository,
      parentId: this.projectId
    };

    this.solutionService.postSolution(this.solution).subscribe(
      res => {
        this.router.navigate(['/dashboard/project', this.projectId]);
      },
      err => {
        console.log(err);
      }
    );
  }

  cancel() {
    this.router.navigate(['/dashboard/project', this.projectId]);
  }
}
