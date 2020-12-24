import { ICell } from "~/GameBoard";
export default class CallbackTetris {
    private getEventsByType;
    updateBoardCallback(newBoard: ICell[][], oldBoard: ICell[][]): void;
}
export declare type UpdateBoardCallbackTetris = (newBoard: ICell[][], oldBoard: ICell[][]) => any;
export interface EventTetris {
    type: EventTypesTetris;
    callback: UpdateBoardCallbackTetris;
}
export declare enum EventTypesTetris {
    UPDATE = "updateBoard"
}
