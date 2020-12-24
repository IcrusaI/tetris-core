import {DisplayConfig, FigureConfig} from "~/Config";
import CallbackTetris from "~/CallbackTetris";

export default class GameBoard extends CallbackTetris {
    public board: ICell[][] = [];

    public createFigure(figure: FigureConfig) {
        for (let y = 0; y < figure.type.length; y++) {
            for (let x = 0; x < figure.type[y].length; x++) {
                const cell: ICell = new ICell(CellTypes.FALLING_BLOCK);
                const point: PointBoard = { x, y };

                this.setCell(cell, point);
            }
        }
    }

    public moveFailingFigure(direction: MoveDirections) {
        const points: PointBoard[] = this.getCell(CellTypes.FALLING_BLOCK);

        this.moveFigure(points, direction);
    }

    private moveFigure(points: PointBoard[], direction: MoveDirections) {
        const isMove: boolean = this.checkMove(points, direction);

        for (let pointKey = 0; pointKey < points.length; pointKey++) {
            const point = points[pointKey];

            const block: ICell = this.board[point.y][point.x];

            switch (direction) {
                case MoveDirections.LEFT:
                    if (isMove) {
                        this.setCell(block, {y: point.y, x: point.x - 1});
                    }
                    break;
                case MoveDirections.RIGHT:
                    if (isMove) {
                        this.setCell(block, {y: point.y, x: point.x + 1});
                    }
                    break;
                case MoveDirections.DOWN:
                    if (block.type === CellTypes.FALLING_BLOCK && !isMove) {
                        block.type = CellTypes.BLOCK;
                    } else {
                        this.setCell(block, {y: point.y + 1, x: point.x});
                    }
                    break;
            }
            this.resetCell(point);
        }
    }

    private checkMove(points: PointBoard[], direction: MoveDirections): boolean {
        let isMove = true;

        for (let pointKey = 0; pointKey < points.length; pointKey++) {
            const point = points[pointKey];

            switch (direction) {
                case MoveDirections.DOWN:
                    if (utils.config.display.rows <= point.y + 1) {
                        isMove = false;
                        continue;
                    }

                    const cellDown = this.board[point.y + 1][point.x];

                    if (cellDown.type === CellTypes.BLOCK) {
                        isMove = false;
                        continue;
                    }
                    break;
                case MoveDirections.RIGHT:
                    if (utils.config.display.cols <= point.x + 1) {
                        isMove = false;
                        continue;
                    }

                    const cellRight = this.board[point.y][point.x + 1];

                    if (cellRight.type === CellTypes.BLOCK) {
                        isMove = false;
                        continue;
                    }
                    break;
                case MoveDirections.LEFT:
                    if (0 > point.x - 1) {
                        isMove = false;
                        continue;
                    }

                    const cellLeft = this.board[point.y][point.x - 1];

                    if (cellLeft.type === CellTypes.BLOCK) {
                        isMove = false;
                        continue;
                    }
                    break;
            }
        }

        return isMove;
    }

    private getCell(type: CellTypes): PointBoard[] {
        let points: PointBoard[] = [];

        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                const cell = this.board[row][col];

                if (type === cell.type) {
                    points.push({
                        y: row,
                        x: col
                    })
                }
            }
        }

        return points;
    }

    private setCell(cell: ICell, point: PointBoard) {
        this.board[point.y][point.x] = cell;
    }

    private resetCell(point: PointBoard) {
        this.setCell(new ICell(CellTypes.EMPTY_BLOCK), point);
    }

    public clear(config: DisplayConfig) {
        this.board.splice(0, this.board.length);

        for (let rowKey = 0; rowKey < config.rows; rowKey++) {
            this.board[rowKey] = [];

            for (let colKey = 0; colKey < config.cols; colKey++) {
                this.resetCell({
                    y: rowKey,
                    x: colKey
                });
            }
        }

        this.updateBoardCallback(this.board, []);
    }
}

export class ICell {
    public type: CellTypes;

    constructor(type: CellTypes) {
        this.type = type;
    }
}

export enum CellTypes {
    BLOCK = "block",
    EMPTY_BLOCK = "emptyBlock",
    FALLING_BLOCK = "fallingBlock"
}

export interface PointBoard {
    x: number,
    y: number
}

export enum MoveDirections {
    RIGHT = "right",
    LEFT = "left",
    DOWN = "down"
}
