import {Direction} from "../../src/directions/direction";
import {North} from "../../src/directions/north";
import {South} from "../../src/directions/south";
import {West} from "../../src/directions/west";

describe('West', () => {

    let west: Direction
    beforeEach(() => {
        west = new West()
    })

    it('should rotate left', () => {
        expect(west.left()).toBeInstanceOf(South)
    })

    it('should rotate right', () => {
        expect(west.right()).toBeInstanceOf(North)
    })

    it('should represent itself as an string', () => {
        expect(west.toString()).toBe('W')
    })

    it('should give the movement vector', () => {
        expect(west.vector()).toEqual([-1, 0])
    })
})