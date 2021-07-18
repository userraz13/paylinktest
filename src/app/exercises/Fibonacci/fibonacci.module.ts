import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FibonacciComponent } from "./fibonacci.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ],
    declarations: [
        FibonacciComponent
    ]
})

export class FibonacciModule {}
