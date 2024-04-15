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

    toString(): string {
        return 'W'
    }
}