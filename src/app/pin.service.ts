import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/timer';
import { Pin } from './pin';
// import { MYPINS } from './mock-pins';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PinService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pinsUrl = '/app/pins.json';  // URL to web api

  constructor(private http: Http) { }

  // get pins from the database and send it to display
  // getPins(): Promise<Pin[]> {
  //   return this.http.get(this.pinsUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Pin[])
  //              .catch(this.handleError);
  // }
  getPins() {
      return this.http.get(this.pinsUrl).map((res:Response) => res.json());
      // return this.http.get('https://jsonplaceholder.typicode.com/posts')
      //    .toPromise()
      //    .then(response => response.json())
  }

  //gets a single pin
  // getPin(id: number): Promise<Pin> {
  //   return this.getPins()
  //              .then(pins => pins.find(pin => pin.id === id));
  // }
  //gets a single project
  getPin(id: number)  { // fix the link and pass the id to catch the single project later
    return this.http.get(this.pinsUrl).map((res:Response) => res.json());

  }

  // creating or adding pin
  // create(name: string, x:number, y:number, color:string): Promise<Pin[]> {
  // return this.http
  //   .post(this.pinsUrl, JSON.stringify({name: name, x: x, y: y, color: color}), {headers: this.headers})
  //   .toPromise()
  //   .then(res => res.json().data)
  //   .catch(this.handleError);
  // }

  createPin(name: string, x:number, y:number, color:string) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = JSON.stringify({name: name, x: x, y: y, color: color});
      // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
      return this.http.post(this.pinsUrl, body, headers).map((res:Response) => res.json());
  }

  // updating a pin
  // update(pin: Pin): Promise<Pin> {
  //   const url = `${this.pinsUrl}/${pin.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(pin), {headers: this.headers})
  //     .toPromise()
  //     .then(() => pin)
  //     .catch(this.handleError);
  // }

  updatePin(pin: Pin) {
      const url = `${this.pinsUrl}/${pin.id}`;
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let body = JSON.stringify(pin);
      // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
      return this.http.put(this.pinsUrl + pin.id, body, headers).map((res:Response) => res.json());
  }

  // deleting the pin service
  // delete(id: number): Promise<void> {
  //   const url = `${this.pinsUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  deletePin(id: number) {
    const url = `${this.pinsUrl}/${id}`;
      // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
      return this.http.delete(url);
  }


  //error handeling and displayig the error in the console
  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }
}
