import { chain, range } from "underscore";
import { IFizzBuzz } from "./fizz-buzz.interface";

export class FizzBuzzClass {
    private range: number[] = [1, 10];

    constructor() {
    }

    public setRange(min: number, max: number): FizzBuzzClass {
        if (min > max) {
            throw Error("Min should be less than max");
        }

        this.range = [min, max];

        return this;
    }

    public doFizzBuzzProblem(): IFizzBuzz[] {
        const rangeList: number[] = range(this.range[0], this.range[1] + 1);
        return chain(rangeList)
            .map((num: number) => {
                let result: string = "";

                if (num % 3 === 0) {
                    result += "Fizz";
                }

                if (num % 5 === 0) {
                    result += "Buzz"
                }

                if (!result) {
                    result = `${num}`;
                }

                return {
                    num,
                    result
                };
            })
            .value();
    }
}
