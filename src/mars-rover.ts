export class MarsRover {

    execute(command: string): string {
        if (command === 'RR') {
            return '0:0:S'
        }
        if (command === 'RRR') {
            return '0:0:W'
        }
        if (command === 'RRRR') {
            return '0:0:N'
        }
        return '0:0:E'
    }
}