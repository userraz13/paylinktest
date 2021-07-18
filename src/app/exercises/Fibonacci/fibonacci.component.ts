import { Component } from "@angular/core";
import { map as _map } from "underscore";
import { MathUtilityService } from "../../core/utilities/math-utility.service";

@Component({
    templateUrl: "./fibonacci.component.html",
    styleUrls: ["./fibonacci.component.scss"]
})

export class FibonacciComponent {
    public inputNum: string = "0";
    public fibNum!: number;
    public errorMsg: string | undefined;
    public examples!: string[];

    constructor(private readonly mathUtilityService: MathUtilityService) {
        this.fibNum = this.mathUtilityService.calculateFibonacciNumber(+this.inputNum);

        this.examples = _map([5, 10, 1], num => `fibonacci(${num}): ${this.mathUtilityService.calculateFibonacciNumber(num)}`);
    }

    public onFibNumCalculateClick(): void {
        this.errorMsg = undefined;

        try {
            this.fibNum = this.mathUtilityService.calculateFibonacciNumber(+this.inputNum);
        } catch {
            this.errorMsg = `Could not produce a Fibonacci number based on the input provided. Only integers bigger than or equal to 0 are allowed.`;
        }
    }
}
