export class Position {

    private _x: number = 0
    get x(): number {
        return this._x
    }

    set x(value: number) {
        this._x = this.normalize(value)
    }

    private _y: number = 0
    get y(): number {
        return this._y
    }

    set y(value: number) {
        this._y = this.normalize(value)
    }

    private gridSize: number

    constructor(x: number = 0, y: number = 0, gridSize: number = 10) {
        this.x = x;
        this.y = y;
        this.gridSize = gridSize
    }

    private normalize(value: number): number {
        if (value < 0)
            value += this.gridSize
        if (value >= this.gridSize) {
            value = value % this.gridSize
        }
        return value
    }

}