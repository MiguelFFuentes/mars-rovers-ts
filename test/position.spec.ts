import {Position} from "../src/position";

describe('Position', () => {

    let position: Position

    beforeEach(() => {
        position = new Position()
    })

    it('should be created with default values', () => {
        expect(position.x).toBe(0)
        expect(position.y).toBe(0)
    })

    it('should be created with the params given', () => {
        position = new Position(2, 3)
        expect(position.x).toBe(2)
        expect(position.y).toBe(3)
    })

    it('should wrap around the x and y within the upper range', () => {
        position.x += 15
        position.y += 15

        expect(position.x).toBe(5)
        expect(position.y).toBe(5)
    })

    it('should wrap around the x and y within the lower range', () => {
        position.x -= 5
        position.y -= 5

        expect(position.x).toBe(5)
        expect(position.y).toBe(5)
    })

    describe('with different grid size', () => {

        beforeEach(() => {
            position = new Position(0, 0, 100)
        })

        it('should NOT wrap around the x and y values when the movement is within the range', () => {
            position.x += 50
            position.y += 50

            expect(position.x).toBe(50)
            expect(position.y).toBe(50)
        })

        it('should wrap around the x and y values within the range', () => {
            position.x += 150
            position.y += 150

            expect(position.x).toBe(50)
            expect(position.y).toBe(50)
        })
    })
})