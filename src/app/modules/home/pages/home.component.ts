import { Component, OnInit } from '@angular/core';

import { Project } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects$: Project[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projects$ = this.route.snapshot.data.projects$;
    this.sortByDate();
  }

  sortByDate() {
    this.projects$.sort((a, b) => {
      return a.editedDate > b.editedDate ? -1 : a.editedDate < b.editedDate ? 1 : 0;
    });
  }
}
