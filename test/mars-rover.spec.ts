import {MarsRover} from "../src/mars-rover";

describe('MarsRover', () => {

    let marsRover: MarsRover
    beforeEach(() => {
        marsRover = new MarsRover()

    })

    it('should rotate right', () => {
        expect(marsRover.execute('R')).toBe('0:0:E')
    })

    it('should rotate right twice', () => {
        expect(marsRover.execute('RR')).toBe('0:0:S')
    })

    it('should rotate right thrice', () => {
        expect(marsRover.execute('RRR')).toBe('0:0:W')
    })

    it('should rotate four times', () => {
        expect(marsRover.execute('RRRR')).toBe('0:0:N')
    })

    it('should rotate left', () => {
        expect(marsRover.execute('L')).toBe('0:0:W')
    })

    it('should rotate left twice', () => {
        expect(marsRover.execute('LL')).toBe('0:0:S')
    })

    it('should rotate left thrice', () => {
        expect(marsRover.execute('LLL')).toBe('0:0:E')
    })

    it('should rotate left times', () => {
        expect(marsRover.execute('LLLL')).toBe('0:0:N')
    })
})