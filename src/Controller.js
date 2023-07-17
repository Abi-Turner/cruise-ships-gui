(function exportController() {
  function Controller(ship) {
    this.ship = ship;

    this.initialiseSea();

    document.querySelector("#sailbutton").addEventListener("click", () => {
      this.setSail();
    });
  }

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = ['./images/water0.png', './images/water1.png'];
    let backgroundIndex = 0;
    window.setInterval(() => {
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      backgroundIndex += 1;
    }, 1000);
  };

  Controller.prototype.renderPorts = function (ports) {
    const portsElement = document.querySelector("#ports");
    portsElement.style.width = '0px';
    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.className = "port";
      newPortElement.dataset.portName = port.name;
      newPortElement.dataset.portIndex = index;

      portsElement.appendChild(newPortElement);
      const portsElementWidth = parseInt(portsElement.style.width, 10);
      portsElement.style.width = `${portsElementWidth + 256}px`;
    });
  }

  Controller.prototype.renderShip = function () {
    const ship = this.ship;

    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(`[data-port-index="${shipPortIndex}"]`);
    
    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portElement.offsetTop + 32}px`;
    shipElement.style.left = `${portElement.offsetLeft - 32}px`;

    const currentPortElement = document.querySelector('#current-port');
    currentPortElement.textContent = `Current Port: ${ship.currentPort.name}`;
    
    const nextPortIndex = shipPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index="$    {nextPortIndex}"]`);
    const nextPortName = nextPortElement ? nextPortElement.dataset.portName : 'End of the line';
    
    const nextPortElementHUD = document.querySelector('#next-port');
    nextPortElementHUD.textContent = `Next Port: ${nextPortName}`;
  };

  Controller.prototype.renderMessage = function (message) {
    const messageElement = document.createElement("div");
    messageElement.id = "message";
    messageElement.innerHTML = message;

    document.querySelector("#viewport").appendChild(messageElement);

    setTimeout(() => {
      document.querySelector("#viewport").removeChild(messageElement);
    }, 2000);
  };


  Controller.prototype.setSail = function () {
    const ship = this.ship;

    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex + 1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    if (!nextPortElement) {
      this.renderMessage('End of the line!');
      this.renderHUD();
      return;
    }

    this.renderMessage(`Now departing ${ship.currentPort.name}`)

    const shipElement = document.querySelector('#ship');
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (nextPortElement.offsetLeft - 32)) {
        ship.setSail();
        ship.dock();
        clearInterval(sailInterval);
        this.renderMessage(`Ship has arrived at ${ship.currentPort.name}!`);
        this.renderHUD();
      }
      shipElement.style.left = `${shipLeft + 1}px`;
    }, 20);
  };

  Controller.prototype.renderHUD = function () {
    const ship = this.ship;
    const itinerary = ship.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = (currentPortIndex + 1) % itinerary.ports.length;
  
    const currentPort = itinerary.ports[currentPortIndex];
    const nextPort = itinerary.ports[nextPortIndex === 0 ? currentPortIndex : nextPortIndex];
  
    const hudElement = document.querySelector('#hud');
    hudElement.innerHTML = `Current Port: ${currentPort.name} | Next Port: ${nextPort.name}`;
  };
  
  
  
  

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());

