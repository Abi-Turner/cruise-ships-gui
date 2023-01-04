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
});

//create new test file Port.test.js which should describe Port