import {MarsRover} from "../src/mars-rover";

describe('MarsRover', () => {

    it.each([
        {command: 'L', result: '0:0:W'},
        {command: 'LL', result: '0:0:S'},
        {command: 'LLL', result: '0:0:E'},
        {command: 'LLLL', result: '0:0:N'},
        {command: 'R', result: '0:0:E'},
        {command: 'RR', result: '0:0:S'},
        {command: 'RRR', result: '0:0:W'},
        {command: 'RRRR', result: '0:0:N'},
        {command: 'M', result: '0:1:N'},
        {command: 'MMMMMMMMMM', result: '0:0:N'},
        {command: 'LM', result: '9:0:W'},
        {command: 'RRM', result: '0:9:S'},
        {command: 'RMMMMMMMMMM', result: '0:0:E'},
        {command: 'MMMM', result: 'O:0:2:N', obstacles: [{x: 0, y: 3}]},
    ])('should rotate with $command to $result', ({command, result, obstacles = []}) => {
        const marsRover: MarsRover = new MarsRover(obstacles)
        expect(marsRover.execute(command)).toBe(result)
    })
})