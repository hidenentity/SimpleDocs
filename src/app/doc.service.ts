import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Doc } from './doc';


@Injectable()
export class DocService {
  private docsUrl = 'http://localhost:8080/api/docs';  // URL to web api
//  private docsUrl = 'api/docs';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) {
  }


  getDocs(): Promise<Doc[]> {
    return this.http.get(this.docsUrl)
      .toPromise()
      .then(response => response.json() as Doc[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getDoc(id: number): Promise<Doc> {
    const url = `${this.docsUrl}/${id}`;
    if (id == 0)
        return new Promise(function (resolve, reject) {resolve(new Doc())});
    else
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Doc)
            .catch(this.handleError);
  }

  update(doc: Doc): Promise<Doc> {
    const url = `${this.docsUrl}/${doc.id}`;
    return this.http
      .put(url, JSON.stringify(doc), {headers: this.headers})
      .toPromise()
      .then(() => doc);
//      .catch(this.handleError);
  }

  create(localdoc : Doc): Promise<Doc> {
    return this.http
      .post(this.docsUrl, JSON.stringify(localdoc, (key, value) => {if (key != 'id') return value; else return null; }), {headers: this.headers})
      .toPromise()
      .then(res => res.json());
  //    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.docsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
