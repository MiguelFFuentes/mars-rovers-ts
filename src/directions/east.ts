import {Direction} from "./direction";
import {North} from "./north";
import {South} from "./south";

export class East implements Direction {
    left(): Direction {
        return new North()
    }

    right(): Direction {
        return new South()
    }

    move(): [x: number, y: number] {
        return [1, 0]
    }

    toString(): string {
        return 'E'
    }
}