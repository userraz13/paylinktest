import { isFunction, isString } from "underscore";

export class MagicGetterSetterClass {

    constructor() {
    }

    private static getPropertyDescriptor(obj: any, prop: string): PropertyDescriptor {
        let desc;
        do {
            desc = Object.getOwnPropertyDescriptor(obj, prop);
        } while (!desc && (obj = Object.getPrototypeOf(obj)));
        return desc;
    }

    public magicGet<T = any>(propName: string): T {
        if (!isString(propName) || !propName.length) {
            throw Error(`Invalid propName provided: ${propName}`);
        }

        if (!isFunction(MagicGetterSetterClass.getPropertyDescriptor(this, propName)?.get)) {
            throw Error(`There is no getter defined with the name: ${propName}`);
        }

        return this[propName];
    }

    public magicSet(propName: string, value: any): void {
        if (!isString(propName) || !propName.length) {
            throw Error(`Invalid propName provided: ${propName}`);
        }

        if (!isFunction(MagicGetterSetterClass.getPropertyDescriptor(this, propName)?.set)) {
            throw Error(`There is no setter defined with the name: ${propName}`);
        }

        this[propName] = value;
    }
}
