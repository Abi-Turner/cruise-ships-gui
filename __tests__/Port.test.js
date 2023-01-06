/* globals describe it expect */

const Port = require('../src/Port.js');

describe('Port', () => {
    describe('port with ships', () => {
        let port

        beforeEach(() => {
            port = new Port('Dover')

        })

    
        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        })

        it('has a name', () => {

            expect(port.name).toEqual('Dover');
        })

        it('can add a ship', () => {
            const ship = jest.fn();

            port.addShip(ship);

            expect(port.ships).toContain(ship);
        })
    
        it('can remove a ship', () => {
            const titanic = jest.fn();
            const queenMary = jest.fn();

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        })
    })
});