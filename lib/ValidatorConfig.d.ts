import Config from "~/Config";
import Validator from "~/Validator";
export declare const DEFAULT_CONFIG: Config;
export default class ValidatorConfig extends Validator {
    validate(config?: Config): Config;
    private static validateDisplay;
    private static validatePoint;
    private static validateBlocks;
    private static validateBlock;
}
