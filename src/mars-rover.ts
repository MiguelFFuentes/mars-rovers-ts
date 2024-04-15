import {Rover} from "./rover";

export class MarsRover {

    private rover: Rover

    constructor() {
        this.rover = new Rover()
    }

    execute(command: string): string {
        [...command].forEach(action => {
            switch (action) {
                case 'R':
                    this.rover.right()
                    break
                case 'L':
                    this.rover.left()
                    break
                case 'M':
                    this.rover.move()
                    break
            }
        })
        return this.rover.toString()
    }
}