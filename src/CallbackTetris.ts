import {ICell} from "~/GameBoard";

export default class CallbackTetris {
    private getEventsByType(type: EventTypesTetris) {
        return utils.events.filter((e: EventTetris) => e.type === type);
    }

    public updateBoardCallback(newBoard: ICell[][], oldBoard: ICell[][]) {
       const events = this.getEventsByType(EventTypesTetris.UPDATE);

        for (let eventKey = 0; eventKey < events.length; eventKey++) {
            const event: EventTetris = events[eventKey];

            event.callback(newBoard, oldBoard);
        }
    }
}

export type UpdateBoardCallbackTetris = (newBoard: ICell[][], oldBoard: ICell[][]) => any;

export interface EventTetris {
    type: EventTypesTetris,
    callback: UpdateBoardCallbackTetris
}

export enum EventTypesTetris {
    UPDATE = "updateBoard"
}
