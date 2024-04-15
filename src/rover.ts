import {Direction} from "./directions/direction";
import {North} from "./directions/north";

export class Rover {
    private direction: Direction

    constructor() {
        this.direction = new North()
    }

    left(): void {
        this.direction = this.direction.left()
    }

    right(): void {
        this.direction = this.direction.right()
    }

    toString(): string {
        return '0:0:' + this.direction
    }

}
