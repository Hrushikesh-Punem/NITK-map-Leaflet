# NITK Map with Leaflet
This project demonstrates how to use Leaflet and Leaflet Routing Machine to display a map and calculate routes, including alternative routes, between waypoints. The map is centered on the NITK region and allows users to input source and destination to calculate routes.
## Features
- Display a map centered on NITK.
- Input source and destination to calculate routes.
- Show alternative routes with different styles.
- Drag waypoints to update routes dynamically.
- Customize route and alternative route styles.
## Demo
![Application GIF](https://github.com/Hrushikesh-Punem/NITK-map-Leaflet/blob/main/assets/Application%20GIF.gif)
## Live Demo : https://hrushikesh-punem.github.io/NITK-map-Leaflet/
## Installation
1. Clone the repository.
2. Open index.html in your web browser to view the application.
## Code Explanation
### HTML
#### The HTML file includes:
- Links to Leaflet and Leaflet Routing Machine CSS and JS files.
- A 'div' element to display the map.
- Input fields for source and destination.
- A button to trigger the route calculation.
### JavaScript
#### The JavaScript code initializes the map and sets up the route calculation:
- Initializes the map centered on the NITK region.
- Adds OpenStreetMap tiles.
- Defines the 'calculateRoute' function to handle route calculations using the Leaflet Routing Machine.
- Configures route styles and displays alternative routes.

   
