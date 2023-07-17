# Cruise Ships

Cruise Ships is a simple JavaScript application that simulates a cruise ship itinerary. It allows you to set sail, visit different ports, and displays information about the current and next ports on a Heads-Up Display (HUD).

## Features

- Set sail from one port to the next in the itinerary
- Display the current and next ports on the HUD
- Render a message box when the ship sets sail, docks, or reaches the end of the itinerary

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To run the Cruise Ships application locally, follow these steps:

1. Clone the repository by running the following command in your terminal or command prompt:

   ```
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the actual URL of the Git repository.

2. Navigate to the project directory. Enter the following command:

   ```
   cd cruise-ships
   ```

3. Open the `index.html` file in your preferred web browser. You can do this by double-clicking the file or using the browser's "Open File" option.

Now you can use the Cruise Ships application in your web browser. Simply click the "Set Sail!" button to start the cruise and navigate through the different ports in the itinerary.

## Usage

- Click the "Set Sail!" button to start the cruise and move the ship to the next port.
- The HUD at the top of the screen displays the current port and the next port on the ship's itinerary.
- When the ship sets sail, docks, or reaches the end of the itinerary, a message box appears briefly on the screen.

## Customization

You can customize the cruise ship itinerary by modifying the `Itinerary` object in the `index.html` file. Add or remove ports as needed to create your desired cruise route.

```javascript
const itinerary = new Itinerary([
  new Port('New York City'),
  new Port('Grand Turk'),
  new Port('San Juan'),
  new Port('Amber Cove')
]);

const ship = new Ship(itinerary);
const controller = new Controller(ship);

controller.renderPorts(itinerary.ports);
controller.renderShip();
```

## License

This project is licensed under the [MIT License](LICENSE).
