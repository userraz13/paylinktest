import { Injectable } from "@angular/core";
import { isFinite as _isFinite } from "underscore";

@Injectable()

export class MathUtilityService {
    private fibMemo: Record<number, number> = {};

    public calculateFibonacciNumber(num: number): number {
        if (!_isFinite(num) || num < 0 || num !== Math.floor(num)) {
            throw Error(`Invalid num provided: ${num}`);
        }

        if (this.fibMemo[num]) {
            return this.fibMemo[num];
        }

        if (num === 0 || num === 1) {
            return num;
        }

        this.fibMemo[num] = this.calculateFibonacciNumber(num - 1) + this.calculateFibonacciNumber(num - 2);

        return this.fibMemo[num];
    }
}
