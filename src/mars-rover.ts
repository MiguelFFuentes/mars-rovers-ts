import {Rover} from "./rover";

export class MarsRover {

    rover: Rover

    constructor() {
        this.rover = {
            direction: 'N'
        }
    }

    execute(command: string): string {

        [...command].forEach(action => {
            switch (this.rover.direction) {
                case 'N':
                    this.rover.direction = 'E'
                    break;
                case 'E':
                    this.rover.direction = 'S'
                    break;
                case 'S':
                    this.rover.direction = 'W'
                    break;
                case 'W':
                    this.rover.direction = 'N'
                    break;
            }
        })
        return '0:0:' + this.rover.direction
    }
}