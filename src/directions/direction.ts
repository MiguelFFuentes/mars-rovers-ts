export interface Direction {
    left(): Direction
    right(): Direction
    toString(): string
    vector(): [x: number, y: number]
}