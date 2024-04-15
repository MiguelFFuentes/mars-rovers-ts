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
            if (action === 'R') {
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
            } else {
                switch (this.rover.direction) {
                    case 'N':
                        this.rover.direction = 'W'
                        break;
                    case 'E':
                        this.rover.direction = 'N'
                        break;
                    case 'S':
                        this.rover.direction = 'E'
                        break;
                    case 'W':
                        this.rover.direction = 'S'
                        break;
                }
            }
        })
        return '0:0:' + this.rover.direction
    }
}