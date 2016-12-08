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

@Injectable()
export class ProjectService {


    // private baseUrl = 'http://192.241.209.229/v1/project';
    // private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
  // private baseUrl = 'https://api.myjson.com/bins/yg45';
    private baseUrl = 'https://api.myjson.com/bins/48trl';


    constructor(private http: Http) {
    }

    getProjects() {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json());
    }
}
