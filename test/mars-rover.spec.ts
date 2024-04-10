import {MarsRover} from "../src/mars-rover";

describe('MarsRover', () => {

    it('should rotate right', () => {
        const marsRover: MarsRover = new MarsRover()
        expect(marsRover.execute('R')).toBe('0:0:E')
    })

    it('should rotate right twice', () => {
        const marsRover: MarsRover = new MarsRover()
        expect(marsRover.execute('RR')).toBe('0:0:S')
    })

    it('should rotate right thrice', () => {
        const marsRover: MarsRover = new MarsRover()
        expect(marsRover.execute('RRR')).toBe('0:0:W')
    })

    it('should rotate four times', () => {
        const marsRover: MarsRover = new MarsRover()
        expect(marsRover.execute('RRRR')).toBe('0:0:N')
    })

})