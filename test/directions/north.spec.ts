import {Direction} from "../../src/directions/direction";
import {East} from "../../src/directions/east";
import {North} from "../../src/directions/north";
import {West} from "../../src/directions/west";

describe('North', () => {

    let north: Direction
    beforeEach(() => {
        north = new North()
    })

    it('should rotate left', () => {
        expect(north.left()).toBeInstanceOf(West)
    })

    it('should rotate right', () => {
        expect(north.right()).toBeInstanceOf(East)
    })

    it('should represent itself as an string', () => {
        expect(north.toString()).toBe('N')
    })

    it('should give the movement vector', () => {
        expect(north.vector()).toEqual([0, 1])
    })
})