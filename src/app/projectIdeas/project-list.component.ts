import { Component, OnInit } from '@angular/core';
import { PIService } from './pi.service';

@Component({
  selector: 'app-pi-list',
  templateUrl: './project-list.component.html',
  styleUrls: [ './project-list.component.scss' ]
})

export class ProjectListComponent implements OnInit {
  pis: Array<any>;

  constructor(private piService: PIService) {  }

  ngOnInit() {
      this.piService.getPIs().subscribe(data => {
        this.pis = data;
      });
  }
}
