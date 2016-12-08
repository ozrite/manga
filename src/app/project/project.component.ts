import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';

@Component({
  // selector: 'app-project',
  providers: [ ProjectService ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private http: Http) {
    // call create service here
    console.log('In bookmarks service');
    this.projectService.getProjects().then(projects => console.info(projects));

  }


  ngOnInit() {
  }

}
