import {MarsRover} from "../src/mars-rover";

describe('MarsRover', () => {

    it('should rotate right', () => {
        const marsRover: MarsRover = new MarsRover()
        expect(marsRover.execute('R')).toBe('0:0:E')
    })

})