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

    toString(): string {
        return 'E'
    }
}