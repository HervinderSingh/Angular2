import { Pipe,PipeTransform } from "angular2/core";

@Pipe({name:'exponential'})

export class exponentialStrength implements PipeTransform{
    transform(value:number,value1:number):number{
        return value + 2;
    }

}