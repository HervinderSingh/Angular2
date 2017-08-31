import { Injectable } from "angular2/core";
import { Http,Response } from "angular2/http";
import 'rxjs/add/operator/map';
import { Headers } from "angular2/http";

@Injectable()
export class HttpTestService{
    constructor(private http:Http){

    }

    getCurrentTime(){
        return this.http.get('http://date.jsontest.com')
        .map((res:Response)=>res.json());
    }
}