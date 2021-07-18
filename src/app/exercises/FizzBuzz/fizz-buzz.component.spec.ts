import { TestBed } from '@angular/core/testing';
import { find } from 'underscore';
import { FizzBuzzComponent } from "./fizz-buzz.component";

describe('FizzBuzzComponent', () => {
    it('should have 20 items in fizzBuzzList', () => {
        const fixture = TestBed.createComponent(FizzBuzzComponent);
        const inst = fixture.componentInstance;
        inst.ngOnInit();
        expect(inst.fizzBuzzList.length).toEqual(20);
    });

    it('should print "Fizz" for the number 12', () => {
        const fixture = TestBed.createComponent(FizzBuzzComponent);
        const inst = fixture.componentInstance;
        inst.ngOnInit();
        expect(find(inst.fizzBuzzList, x => x.num === 12)?.result).toEqual("Fizz");
    });

    it('should print "Buzz" for the number 20', () => {
        const fixture = TestBed.createComponent(FizzBuzzComponent);
        const inst = fixture.componentInstance;
        inst.ngOnInit();
        expect(find(inst.fizzBuzzList, x => x.num === 20)?.result).toEqual("Buzz");
    });

    it('should print "FizzBuzz" for the number 15', () => {
        const fixture = TestBed.createComponent(FizzBuzzComponent);
        const inst = fixture.componentInstance;
        inst.ngOnInit();
        expect(find(inst.fizzBuzzList, x => x.num === 15)?.result).toEqual("FizzBuzz");
    });

    it('should print 19 for the number 19', () => {
        const fixture = TestBed.createComponent(FizzBuzzComponent);
        const inst = fixture.componentInstance;
        inst.ngOnInit();
        expect(find(inst.fizzBuzzList, x => x.num === 19)?.result).toEqual("19");
    });
});
