import {Direction} from "../../src/directions/direction";
import {East} from "../../src/directions/east";
import {North} from "../../src/directions/north";
import {South} from "../../src/directions/south";

describe('East', () => {

    let east: Direction
    beforeEach(() => {
        east = new East()
    })

    it('should rotate left', () => {
        expect(east.left()).toBeInstanceOf(North)
    })

    it('should rotate right', () => {
        expect(east.right()).toBeInstanceOf(South)
    })

    it('should represent itself as an string', () => {
        expect(east.toString()).toBe('E')
    })
})