import Config from "~/Config";
import { ICell } from "~/GameBoard";
import { EventTypesTetris, UpdateBoardCallbackTetris } from "~/CallbackTetris";
declare class Tetris {
    private readonly config;
    private gameBoard;
    constructor(config?: Config);
    on(type: EventTypesTetris, callback: UpdateBoardCallbackTetris): void;
    get board(): ICell[][];
}
export default Tetris;
