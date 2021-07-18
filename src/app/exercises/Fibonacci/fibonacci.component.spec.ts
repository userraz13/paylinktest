import { TestBed } from '@angular/core/testing';
import { FibonacciComponent } from "./fibonacci.component";
import { MathUtilityService } from "../../core/utilities/math-utility.service";

class MockMathUtilityService {
    public calculateFibonacciNumber(num: number): number {
        return new MathUtilityService().calculateFibonacciNumber(num);
    }
}

describe('FibonacciComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                FibonacciComponent
            ],
            providers: [
                {provide: MathUtilityService, useClass: MockMathUtilityService}
            ]
        }).compileComponents();
    });

    it('should set fibNum to 55 when calculating fibonacci number with inputNum = 10', () => {
        const fixture = TestBed.createComponent(FibonacciComponent);
        const inst = fixture.componentInstance;
        inst.inputNum = "10";
        inst.onFibNumCalculateClick();

        expect(inst.fibNum).toBe(55);
    });

    it('should set errorMsg when inputNum = -5', () => {
        const fixture = TestBed.createComponent(FibonacciComponent);
        const inst = fixture.componentInstance;
        inst.inputNum = "-5";
        inst.onFibNumCalculateClick();

        expect(inst.errorMsg).toBe(`Could not produce a Fibonacci number based on the input provided. Only integers bigger than or equal to 0 are allowed.`);
    });

    it('should set errorMsg when inputNum = 7.01', () => {
        const fixture = TestBed.createComponent(FibonacciComponent);
        const inst = fixture.componentInstance;
        inst.inputNum = "7.01";
        inst.onFibNumCalculateClick();

        expect(inst.errorMsg).toBe(`Could not produce a Fibonacci number based on the input provided. Only integers bigger than or equal to 0 are allowed.`);
    });
});
