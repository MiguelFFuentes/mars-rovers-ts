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

    vector(): [x: number, y: number] {
        return [0, 1]
    }

    toString(): string {
        return 'N'
    }
}