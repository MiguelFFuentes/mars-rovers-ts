import {Direction} from "./directions/direction";
import {North} from "./directions/north";
import {Position} from "./position";

export class Rover {
    private position: Position
    private direction: Direction

    constructor() {
        this.position = new Position(0, 0)
        this.direction = new North()
    }

    left(): void {
        this.direction = this.direction.left()
    }

    right(): void {
        this.direction = this.direction.right()
    }

    move(): void {
        const [x, y] = this.direction.vector()
        this.position.x += x
        this.position.y += y
    }

    toString(): string {
        return `${this.position.x}:${this.position.y}:${this.direction}`
    }

}
