import { Component, OnInit } from '@angular/core';

import { Project } from '@app/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.route.snapshot.data.projects$;
  }
}
