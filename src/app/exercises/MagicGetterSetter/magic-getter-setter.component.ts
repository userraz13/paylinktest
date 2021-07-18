import { Component } from "@angular/core";
import { MagicGetterSetterClass } from "./magic-getter-setter.class";

@Component({
    templateUrl: "./magic-getter-setter.component.html",
    styleUrls: ["./magic-getter-setter.component.scss"]
})

export class MagicGetterSetterComponent extends MagicGetterSetterClass {
    private testProp: string = "Just a test string";
    private privTestSet: string = "";

    private get testGet(): string {
        console.log("testGet getter called");
        return `${this.testProp} in a getter`;
    }

    private set testSet(value: string) {
        console.log("testSet setter called");
        this.privTestSet = value;
    }

    constructor() {
        super();

        try {
            console.log("1. ", this.magicGet("testProp"));
        } catch (e: any) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }

        try {
            console.log("2. ", this.magicGet("testGet"));
        } catch (e: any) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }

        try {
            console.log("3. ", this.magicGet("testProppppp"));
        } catch (e: any) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }

        try {
            this.magicSet("testSet", "some value");
            console.log("4. Setter called");
        } catch (e: any) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }

        try {
            this.magicSet("randomText", "");
            console.log("5. Setter called");
        } catch (e: any) {
            if (e instanceof Error) {
                console.error(e.message);
            } else {
                console.log(e);
            }
        }
    }
}
