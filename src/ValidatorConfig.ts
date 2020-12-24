import Config, {FigureConfig, DisplayConfig, PointConfig, StageConfig} from "~/Config";
import Validator from "~/Validator";

export const DEFAULT_CONFIG: Config = {
    "display": {
        "rows": 20,
        "cols": 10,
        "startPoint": {
            "x": 4,
            "y": -1
        }
    },
    "figures": [
        {
            "name": "I",
            "type": [
                [1, 1, 1, 1]
            ],
            "center": {
                "x": 2,
                "y": 0
            }
        },
        {
            "name": "J",
            "type": [
                [0, 1, 0],
                [1, 1, 1]
            ],
            "center": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "L",
            "type": [
                [1, 0, 0],
                [1, 1, 1]
            ],
            "center": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "O",
            "type": [
                [0, 0, 1],
                [1, 1, 1]
            ],
            "center": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "S",
            "type": [
                [1, 1, 0],
                [0, 1, 1]
            ],
            "center": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "T",
            "type": [
                [0, 1, 1],
                [1, 1, 0]
            ],
            "center": {
                "x": 1,
                "y": 1
            }
        },
        {
            "name": "Z",
            "type": [
                [1, 1],
                [1, 1]
            ],
            "center": {
                "x": 0,
                "y": 0
            }
        }
    ],
    "stages": [
        {
            delay: 500,
            lines: 0
        },
        {
            delay: 400,
            lines: 5
        }
    ]
}

export default class ValidatorConfig extends Validator {
    public validate(config?: Config): Config {
        if (config === undefined) {
            config = DEFAULT_CONFIG;
            return config;
        }

        ValidatorConfig.validateDisplay(config.display);

        ValidatorConfig.validateFigures(config.figures);

        ValidatorConfig.validateStages(config.stages);

        return config;
    }

    private static validateDisplay(config?: DisplayConfig): DisplayConfig {
        if (config === undefined) {
            return DEFAULT_CONFIG.display;
        }

        if (config.cols === undefined) {
            config.cols = DEFAULT_CONFIG.display.cols;
        } else if (!this.isNumber(config.cols) || !this.min(config.cols, 0)) {
            throw new Error("The variable is not a number, or it is less than 1.");
        }

        if (config.rows === undefined) {
            config.rows = DEFAULT_CONFIG.display.rows;
        } else if (!this.isNumber(config.rows) || !this.min(config.rows, 0)) {
            throw new Error("The variable is not a number, or it is less than 1.");
        }

        if (config.startPoint === undefined) {
            config.startPoint = DEFAULT_CONFIG.display.startPoint;
        } else {
            this.validatePoint(config.startPoint);
        }

        return config;
    }

    private static validatePoint(config: PointConfig): PointConfig {
        if (!this.isNumber(config.x)) {
            throw new Error("The point must have an x-axis");
        }

        if (!this.isNumber(config.y)) {
            throw new Error("The point must have an y-axis");
        }

        return config;
    }

    private static validateFigures(figures?: FigureConfig[]): FigureConfig[] {
        if (figures === undefined) {
            return DEFAULT_CONFIG.figures;
        }

        if (figures.length === 0) {
            throw new Error("There must be at least 1 figure");
        }

        for (const figureKey in figures) {
            let figure: FigureConfig = figures[figureKey];

            figure = this.validateFigure(figure);

            figures[figureKey] = figure;
        }

        return figures;
    }

    private static validateFigure(figure: FigureConfig): FigureConfig {
        if (figure.type === undefined) {
            throw new Error("The figure must have the type");
        }

        if (!this.isArray(figure.type)) {
            throw new Error("The type must be an array");
        }

        for (const figureKey in figure.type) {
            const type: number[] = figure.type[figureKey];

            if (!this.isArray(type)) {
                throw new Error("The type must be an array");
            }

            for (const typeKey in type) {
                const state: number = type[typeKey];

                if (!this.isNumber(state) && state !== 1 && state !== 0) {
                    throw new Error("The state must be either 1 or 0");
                }
            }
        }

        return figure;
    }

    private static validateStages(stages?: StageConfig[]): StageConfig[] {
        if (stages === undefined) {
            return DEFAULT_CONFIG.stages;
        }

        if (stages.length === 0) {
            throw new Error("There must be at least 1 stage");
        }

        for (const stageKey in stages) {
            let stage: StageConfig = stages[stageKey];

            stage = this.validateStage(stage);

            stages[stageKey] = stage;
        }

        return stages;
    }

    private static validateStage(stage: StageConfig): StageConfig {
        if (!this.isNumber(stage.delay) && stage.delay >= 0) {
            throw new Error("The delay must be a number and be greater than or equal to 0");
        }

        if (!this.isNumber(stage.lines) && stage.lines >= 0) {
            throw new Error("The lines must be a number and be greater than or equal to 0");
        }

        return stage;
    }
}
