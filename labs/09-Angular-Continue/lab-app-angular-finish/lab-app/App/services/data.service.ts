import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private _http: Http) {

    }

    getHobbies() {
        return this._http.get('/hobbies.json').
            map(res => res.json().hobbies);
    }
}