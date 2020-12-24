export default class Validator {
    protected static isNumber(variable: number): boolean {
        return typeof variable === "number";
    }

    protected static isArray(variable: any[]): boolean {
        return Array.isArray(variable);
    }


    protected static min(variable: number, min: number): boolean {
        return min > variable;
    }
}
