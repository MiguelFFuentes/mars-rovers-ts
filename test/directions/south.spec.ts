import {Direction} from "../../src/directions/direction";
import {East} from "../../src/directions/east";
import {West} from "../../src/directions/west";
import {South} from "../../src/directions/south";

describe('South', () => {

    let south: Direction
    beforeEach(() => {
        south = new South()
    })

    it('should rotate left', () => {
        expect(south.left()).toBeInstanceOf(East)
    })

    it('should rotate right', () => {
        expect(south.right()).toBeInstanceOf(West)
    })

    it('should represent itself as an string', () => {
        expect(south.toString()).toBe('S')
    })

    it('should give the movement vector', () => {
        expect(south.vector()).toEqual([0, -1])
    })
})