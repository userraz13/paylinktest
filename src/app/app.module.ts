import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FizzBuzzComponent } from "./exercises/FizzBuzz/fizz-buzz.component";
import { MatButtonModule } from "@angular/material/button";
import { FibonacciComponent } from "./exercises/Fibonacci/fibonacci.component";
import { MagicGetterSetterComponent } from "./exercises/MagicGetterSetter/magic-getter-setter.component";
import { FizzBuzzModule } from "./exercises/FizzBuzz/fizz-buzz.module";
import { FibonacciModule } from "./exercises/Fibonacci/fibonacci.module";
import { MagicGetterSetterModule } from "./exercises/MagicGetterSetter/magic-getter-setter.module";
import { MathUtilityService } from "./core/utilities/math-utility.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const defaultRoutes = [
    {
        path: 'fizz-buzz',
        component: FizzBuzzComponent
    },
    {
        path: 'fibonacci',
        component: FibonacciComponent
    },
    {
        path: 'magic-getter-setter',
        component: MagicGetterSetterComponent
    },
    {
        path: '**',
        component: FizzBuzzComponent,
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        RouterModule.forRoot(defaultRoutes),
        MatButtonModule,
        FizzBuzzModule,
        FibonacciModule,
        MagicGetterSetterModule
    ],
    providers: [
        MathUtilityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
