/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('has a name', () => {
        const port = new Port('Sydney');

        expect(port.name).toEqual('Sydney');
    })

    it('can add a ship', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })
    
    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    })
});

//create new test file Port.test.js which should describe Port