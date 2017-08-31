import { Component } from "angular2/core";
import { HttpTestService } from "./http-test.service";


@Component({
    selector: 'http-test',
    template: `
        <h1>httpcomponent</h1>
        <button (click)="onTestGet()">Get Request</button>
        <p>Output :{{getData}}</p>
    
       `,
    providers: [HttpTestService]
})
export class HttpTestComponent {

   getData:String;
 //  postData:String;
 constructor(private _httpService:HttpTestService){}

  onTestGet(){

  	this._httpService.getCurrentTime()
  	.subscribe(
          data =>this.getData=JSON.stringify(data),
          error =>alert(error),
          ()=>console.log("finished") 

  		);
}
} 