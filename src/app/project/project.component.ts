import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  // selector: 'app-project',
  providers: [ ProjectService ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public userProjects;


  constructor(private projectService: ProjectService, private http: Http) {
    // call create service here
    // console.log('In bookmarks service');
    // this.projectService.getProjects().then(projects => console.info(projects));

  }


  ngOnInit() {

    this.getAllProjects();

  }

  getAllProjects() {
    this.projectService.getProjects().subscribe(
      // the first argument is a function which runs on success
      // data => { console.log(data);},
      data => { this.userProjects = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading projects')
    );

  }


}// end class
