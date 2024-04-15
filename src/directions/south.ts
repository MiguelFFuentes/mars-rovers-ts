import {Direction} from "./direction";
import {West} from "./west";
import {East} from "./east";

export class South implements Direction {
    left(): Direction {
        return new East()
    }

    right(): Direction {
        return new West()
    }

    vector(): [x: number, y: number] {
        return [0, -1]
    }

    toString(): string {
        return 'S'
    }
}