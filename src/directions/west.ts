import {Direction} from "./direction";
import {South} from "./south";
import {North} from "./north";

export class West implements Direction {
    left(): Direction {
        return new South()
    }

    right(): Direction {
        return new North()
    }

    vector(): [x: number, y: number] {
        return [-1, 0]
    }

    toString(): string {
        return 'W'
    }
}