export class Rover {
    private direction: Direction

    constructor() {
        this.direction = 'N'
    }

    left(): void {
        switch (this.direction) {
            case 'N':
                this.direction = 'W'
                break;
            case 'E':
                this.direction = 'N'
                break;
            case 'S':
                this.direction = 'E'
                break;
            case 'W':
                this.direction = 'S'
                break;
        }
    }

    right(): void {
        switch (this.direction) {
            case 'N':
                this.direction = 'E'
                break;
            case 'E':
                this.direction = 'S'
                break;
            case 'S':
                this.direction = 'W'
                break;
            case 'W':
                this.direction = 'N'
                break;
        }
    }

    toString(): string {
        return '0:0:' + this.direction
    }

}

type Direction = 'N' | 'S' | 'E' | 'W'
