export interface Direction {
    left(): Direction
    right(): Direction
    toString(): string
    move(): [x: number, y: number]
}