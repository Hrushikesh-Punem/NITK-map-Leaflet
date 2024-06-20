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
Or follow these Steps:
#### Step 1: Create an OpenStreetMap Account

1. Visit [OpenStreetMap](https://www.openstreetmap.org/).
2. Click on "Sign Up" in the top right corner.
3. Fill in the required information and create your account.

#### Step 2: Open the iD Editor

1. Log in to your OpenStreetMap account.
2. Navigate to the area on the map where you want to add or edit information.
3. Click on the "Edit" button at the top of the page and select "Edit with iD (in-browser editor)".

#### Step 3: Add or Edit Map Features

##### Adding a New Place

1. Click on the "Point" tool in the toolbar on the right.
2. Click on the map where you want to add the new place.
3. Choose the type of place you are adding (e.g., restaurant, school, park) from the options that appear.
4. Fill in the details such as name, address, and any other relevant information.

##### Adding a New Route

1. Click on the "Line" tool in the toolbar on the right.
2. Click on the map to start drawing the route. Click at each point where the route changes direction.
3. Double-click to end the route.
4. Choose the type of route you are adding (e.g., road, footpath, cycleway) from the options that appear.
5. Fill in the details such as the name of the route, surface type, and any other relevant information.

#### Step 4: Save Your Changes

1. Once you’ve added or edited the information, click on the "Save" button at the top right corner.
2. Add a brief description of your changes in the comment box.
3. Click "Upload" to submit your changes to OpenStreetMap.

### Adding a New Location to Department List
To add a new location to the map displayed in this project, follow these steps:
1. Edit 'deptList' Array:
   - Open the 'dept.js' file in your code editor.
   - Locate the 'deptList' array, which contains GeoJSON objects representing locations.
   - Open [geojson.io](https://geojson.io/#map=2/0/20) and click on the location you want to add (by 'drawpoint tool' on right)
   - Copy the geojson object of that location and paste it in the deptList Array. Add the attribute values accordingly. 
2. Save the File:
   - Save the 'dept.js' file after adding the new GeoJSON object.
### 'Modifying the Popup Content'
The makePopupContent function is used to dynamically generate HTML content for popups displayed when interacting with markers on the map. It takes a building object as a parameter, typically representing a GeoJSON feature, and constructs a popup based on its properties.
#### How to Customize
1. **Edit HTML Structure**: Modify the HTML template inside the makePopupContent function to change the structure and styling of the popup content.
2. **Update GeoJSON Properties**: Ensure ${building.properties.name}, ${building.properties.aboutdept}, and ${building.properties['get-directions']} correspond correctly to the properties defined in your GeoJSON data.
3. **Save Changes**: Save the changes made to the makePopupContent function in your JavaScript file.
