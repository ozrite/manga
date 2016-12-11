// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class ProjectService {
//
//   constructor() { }
//
// }



import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';


@Injectable()
export class ProjectService {


    private baseUrl = 'http://192.241.209.229/v1/project';
    // private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  // private baseUrl = 'https://api.myjson.com/bins/yg45';
    // private baseUrl = 'https://api.myjson.com/bins/48trl';


    constructor(private http: Http) {
    }

    getProjects() {
      return this.http.get(this.baseUrl).map((res:Response) => res.json());
        // return this.http.get(this.baseUrl)
        //     .toPromise()
        //     .then(response => response.json());
    }

    createProject(proj) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(proj);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('/api/food/', body, headers).map((res:Response) => res.json());
    }

    updateProject(proj) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(proj);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.put('/api/food/' + proj.id, body, headers).map((res:Response) => res.json());
    }

    deleteProject(proj) {
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.delete('/api/food/' + proj.id);
    }





}
