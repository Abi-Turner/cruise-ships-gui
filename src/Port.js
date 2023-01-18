(function exportPort() {
    function Port(name) {
        this.name = name;
        this.ships = [];
    };

    Port.prototype.addShip = function (ship) {
        this.ships.push(ship);
    };

    Port.prototype.removeShip = function (ship) {
        this.ships.splice(this.ships.indexOf(ship), 1);
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());



