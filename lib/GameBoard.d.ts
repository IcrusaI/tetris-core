import Config from "~/Config";
import CallbackTetris from "~/CallbackTetris";
export default class GameBoard extends CallbackTetris {
    board: ICell[][];
    private config;
    constructor(config: Config);
    private setFallingBlockDown;
    private getCell;
    private setCell;
    private resetCell;
    private clearBoard;
}
export declare class ICell {
    type: CellTypes;
    constructor(type: CellTypes);
}
export declare enum CellTypes {
    BLOCK = "block",
    EMPTY_BLOCK = "emptyBlock",
    FALLING_BLOCK = "fallingBlock"
}
export interface PointBoard {
    x: number;
    y: number;
}
