import {Component} from 'angular2/core';
import{MyComponent} from './mycomponent.component';
import {HighlightDirective} from "./highlight.directive";
import {  HttpTestComponent} from "./http-test.component";
import { HttpTestService } from "./http-test.service";


@Component({
    selector: 'my-app',
    template: `
        <h1 >Angular 2 Boilerplate</h1>
        <p myHighlight>Hello World!</p>
        <my-component></my-component>
        <my-customer></my-customer>
        <http-test></http-test>
    `,
    directives:[MyComponent,HighlightDirective,HttpTestComponent],
    providers: [HttpTestService]
})
export class AppComponent {

}