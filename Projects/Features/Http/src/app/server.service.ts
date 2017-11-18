import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'companyName': 'Optum', 'employeeName': 'Rahul Choudhary'})
    //return this.http.post('https://angularserver-3be32.firebaseio.com/data.json' , servers, {headers: headers});
    return this.http.put('https://angularserver-3be32.firebaseio.com/data.json' , servers, {headers: headers});
  }

  getServers() {
   // return this.http.get('https://angularserver-3be32.firebaseio.com/data.json')
    return this.http.get('https://angularserver-3be32.firebaseio.com')
      .map(
        (response: Response) => {
          const data = response.json();
          /*for (const server of data) {
            server.name = 'Fetched_' + server.name;
          }*/
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw("Forget to append /.data.json : " + error);
        }
      );
  }

  getAppName() {
      return this.http.get('https://angularserver-3be32.firebaseio.com/appName.json')
        .map((response: Response) => {
            console.log(response);
            const data = response.json();
            /*for (const server of data) {
              server.name = 'Fetched_' + server.name;
            }*/
            return data;
          }
        )
        .catch(
          (error: Response) => {
            console.log(error);
            return Observable.throw("URL is not correct " + error);
          }
        );
    }

}
