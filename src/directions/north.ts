import {Direction} from "./direction";
import {West} from "./west";
import {East} from "./east";

export class North implements Direction {
    left(): Direction {
        return new West()
    }

    right(): Direction {
        return new East()
    }

    toString(): string {
        return 'N'
    }
}