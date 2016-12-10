import { Injectable } from '@angular/core';
import { Pin } from './pin';
// import { MYPINS } from './mock-pins';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PinService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pinsUrl = '/app/pins';  // URL to web api

  constructor(private http: Http) { }

  // get pins from the database and send it to display
  getPins(): Promise<Pin[]> {
    return this.http.get(this.pinsUrl)
               .toPromise()
               .then(response => response.json().data as Pin[])
               .catch(this.handleError);
  }

  //gets a single pin
  getPin(id: number): Promise<Pin> {
    return this.getPins()
               .then(pins => pins.find(pin => pin.id === id));
  }

  // creating or adding pin
  create(name: string, x:number, y:number, color:string): Promise<Pin[]> {
  return this.http
    .post(this.pinsUrl, JSON.stringify({name: name, x: x, y: y, color: color}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  // updating a pin
  update(pin: Pin): Promise<Pin> {
    const url = `${this.pinsUrl}/${pin.id}`;
    return this.http
      .put(url, JSON.stringify(pin), {headers: this.headers})
      .toPromise()
      .then(() => pin)
      .catch(this.handleError);
  }

  // deleting the pin service
  delete(id: number): Promise<void> {
    const url = `${this.pinsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  //error handeling and displayig the error in the console
  private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }
}
