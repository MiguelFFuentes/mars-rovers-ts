import {Rover} from "./rover";

export class MarsRover {

    private rover: Rover

    constructor() {
        this.rover = new Rover()
    }

    execute(command: string): string {
        [...command].forEach(action => {
            if (action === 'R') {
                this.rover.right()
            } else {
                this.rover.left()
            }
        })
        return this.rover.toString()
    }
}