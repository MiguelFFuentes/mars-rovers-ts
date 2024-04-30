import {Rover} from "./rover";
import {Coordinate} from "./coordinate";

export class MarsRover {

    private rover: Rover
    private obstacles: Coordinate[]

    constructor(obstacles: Coordinate[] = []) {
        this.rover = new Rover()
        this.obstacles = obstacles
    }

    execute(command: string): string {
        const actions = [...command]
        for (const action of actions) {
            switch (action) {
                case 'R':
                    this.rover.right()
                    break
                case 'L':
                    this.rover.left()
                    break
                case 'M':
                    if (this.hasObstacle()) {
                        return 'O:' + this.rover.toString()
                    }
                    this.rover.move()
                    break
                case 'S':
                    return this.rover.toString()
            }
        }
        return this.rover.toString()
    }

    private hasObstacle(): boolean {
        const nextPosition: Coordinate = this.rover.nextPosition()
        return this.obstacles.some(obstacle => obstacle.x === nextPosition.x && obstacle.y === nextPosition.y)
    }
}