export default interface Config {
    display: DisplayConfig;
    blocks: BlockConfig[];
}
export interface DisplayConfig {
    rows: number;
    cols: number;
    startPoint: PointConfig;
}
export interface PointConfig {
    x: number;
    y: number;
}
export interface BlockConfig {
    type: number[][];
}
