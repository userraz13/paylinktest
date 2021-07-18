import { Component, OnInit } from "@angular/core";
import { IFizzBuzz } from "./fizz-buzz.interface";
import { FizzBuzzClass } from "./fizz-buzz.class";

@Component({
    templateUrl: "./fizz-buzz.component.html"
})

export class FizzBuzzComponent implements OnInit {
    public fizzBuzzList!: IFizzBuzz[];

    constructor() {
    }

    public ngOnInit(): void {
        this.fizzBuzzList = new FizzBuzzClass()
            .setRange(1, 20)
            .doFizzBuzzProblem();
    }
}
