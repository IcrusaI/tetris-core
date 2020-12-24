import Config from "~/Config";
import ValidatorConfig from "~/ValidatorConfig";
import GameBoard, {ICell, MoveDirections} from "~/GameBoard";
import {EventTypesTetris, UpdateBoardCallbackTetris} from "~/CallbackTetris";

class Tetris {
    private gameBoard: GameBoard;

    constructor(config?: Config) {
        const validator: ValidatorConfig = new ValidatorConfig();

        utils.config = validator.validate(config);

        this.gameBoard = new GameBoard();
    }

    public on(type: EventTypesTetris, callback: UpdateBoardCallbackTetris): void {
        utils.events.push({
                type,
                callback
            });
    }

    public start() {
        this.gameBoard.clear(utils.config.display);

        this.gameBoard.createFigure(utils.config.figures[2]);

        setInterval(() => {
            this.gameBoard.moveFailingFigure(MoveDirections.DOWN)
        }, 1000);
    }

    get board(): ICell[][] {
        return this.gameBoard.board;
    }

    get config(): Config {
        return utils.config;
    }
}

export default Tetris;
