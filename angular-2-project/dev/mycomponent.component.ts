import { Component } from "angular2/core";
import { FormComponent } from "./test-form.component";
import { exponentialStrength } from "./exponential.pipe";

@Component({
  selector: "my-component",
  templateUrl: "./template/template.tpl.html",
  styleUrls: ["src/css/mycss.css"],
  directives: [FormComponent],
  pipes:[exponentialStrength]
})
export class MyComponent {
  name: string = "hervinder";
  clickMessage = "";
  testpipe:number = 200;
  birthday = new Date(1988, 3, 15);
  onClicked() {
    this.clickMessage = "click";
  }
}
