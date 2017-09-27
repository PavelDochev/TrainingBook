import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs } from '@angular/http';
//import { AuthHttp } from "shared/auth.http";
import 'rxjs/Rx';
@Injectable()
export class HomeService {

    constructor(private http: Http) {
    }

    getTesting() {
        return this.http.get('api/Home/GetTest', )
            .map(response => {
                let p = response.json();
                return p;
            });
    }
}