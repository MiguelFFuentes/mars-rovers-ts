import {Rover} from "../src/rover";
import {Coordinate} from "../src/coordinate";

describe('Rover', () => {

    let rover: Rover

    beforeEach(() => {
        rover = new Rover()
    })

    it('should be facing north by default', () => {
        expect(rover.toString()).toBe('0:0:N')
    })

    it('should turn left', () => {
        rover.left()

        expect(rover.toString()).toBe('0:0:W')
    })

    it('should turn right', () => {
        rover.right()

        expect(rover.toString()).toBe('0:0:E')
    })

    it('should move forward', () => {
        rover.move()

        expect(rover.toString()).toBe('0:1:N')
    })

    it('should rotate and move forward', () => {
        rover.right()
        rover.move()

        expect(rover.toString()).toBe('1:0:E')
    })

    it('should return the next position', () => {
        const nextPosition: Coordinate = rover.nextPosition()
        expect(nextPosition).toEqual({x: 0, y: 1})
    })
})