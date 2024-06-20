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
## Contributing
If you notice any missing routes or places on the map, you can easily update these using the OpenStreetMap (OSM) iD Editor. Here’s a step-by-step guide to help you get started:
### Suggested [Walkthrough for OpenStreetMap](https://www.openstreetmap.org/edit?editor=id#map=17/13.01082/74.79428) 
OR
1. Create an OpenStreetMap Account
     1. Visit [OpenStreetMap](https://www.openstreetmap.org/)
     2. Click on SignUp and create your account.
2. Open the iD Editor
     1. Navigate to the area on the map where you want to add or edit information.
     2. click on the "Edit" button at the top of the page and select "Edit with iD".
4. Add or Edit Map Features
    - Adding a New Place
          1. Click on the point tool in the toolbar on the right.
          2. Click on the map where you want to add the new place.
          3. Choose the type of place you are adding(eg. restautant, school, park) from the options that appear.
          4. Fill in the details such as name, address and any other relevant information.
- Adding a New Route
          1. Click on the "Line" tool in the toolbar on the right.
          2. Click on the map to start drawing the route. Click at each point where the route change direction.
          3. Double click to end the route.
          4. Choose the type of route you are adding (eg. road, footpath, cycleway) from the options that appear.
          5. Fill the details such as the name of the route, surface type, and any other relevant information.
6. Save your changes
   1. Once you've added or edited the information, click on the "Save button".
   2. Add a brief description of your changes in the comment box.
   3. Click "Upload" to submit your changes to OpenStreetMap.

