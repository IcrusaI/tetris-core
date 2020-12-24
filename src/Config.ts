export default interface Config {
    display: DisplayConfig,
    figures: FigureConfig[],
    stages: StageConfig[]
}

export interface DisplayConfig {
    rows: number,
    cols: number,
    startPoint: PointConfig
}

export interface PointConfig {
    x: number,
    y: number
}

export interface FigureConfig {
    name: string,
    type: number[][],
    center: PointConfig
}

export interface StageConfig {
    delay: number, // задержка между движениями блока
    lines: number
}
