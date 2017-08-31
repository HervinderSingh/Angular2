import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import{Test} from './testmodel';

@Component({
    selector: 'my-test',
    templateUrl:'./template/from.tpl.html' ,

})

export class FormComponent{
    model = new Test('hervinder1410@gmail','password');
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }
    newClick(){
        console.log('form is called');
        console.log(this.model);
     
    }
    //push opeeration write here for array customer
    get diagnostic(){ return JSON.stringify(this.model)}
}
