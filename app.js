const myMap = L.map('map').setView([13.0102, 74.7938], 16.5);

//Using CDN's
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//Using local files
//const tileUrl = './map.geojson';
//Using server
//const tileUrl = 'http://10.100.15.184:8000/NITK_map.geojson';
//const tileUrl = './map_geojson';


const tileLayer = L.tileLayer(tileUrl,{maxzoom:19,});
tileLayer.addTo(myMap);


fetch('./map.geojson')
.then(response => response.json())
.then(data => {
    L.geoJSON(data).addTo(myMap);
});






const locations = [
    { label: "NITK Beach Gate", value: "13.014246932489755, 74.7885676920037" },
    { label: "CPWD Office", value: "13.015148961785732, 74.7890692979664" },
    { label: "Vikram Sarabhai Guest House", value: "13.01382139954483, 74.79193389715611" },
    { label: "Computer Science and Engineering", value: "13.012744709986611, 74.79137599768846" },
    { label: "NITK Bus Stop", value: "13.011762096017637, 74.79311406910693" },
    { label: "Deepak Restaurant(NITK Canteen)", value: "13.012124525338482, 74.79218541601098" },
    { label: "Electronics & Communication Department NITK", value: "13.01158559151246, 74.79217739954088" },
    { label: "Department of Information Technology, NITK", value: "13.010947484674064, 74.79238272554652" },
    { label: "LHC", value: "13.010452594194774, 74.79238359196648" },
    { label: "LHC Parking lot", value: "13.00984603791965, 74.79234860096597" },
    { label: "Department of Mining Engineering", value: "13.011927887506307, 74.79404554012125" },
    { label: "Department of Civil Engineering NITK", value: "13.012284644810316, 74.79393212793052" },
    { label: "Department of water Resources and Engineering", value: "13.012018912317577, 74.79428538940785" },
    { label: "Fluid Mechanics Lab", value: "13.011573535145072, 74.79485950409577" },
    { label: "Pavillion", value: "13.011088033312602, 74.7946606230838" },
    { label: "NITK Main Building", value: "13.010935523926488, 74.79429663827234" },
    { label: "Reading Room", value: "13.009946255859502, 74.79412310954649" },
    { label: "NITK Central Library", value: "13.010014396833402, 74.79486181044948" },
    { label: "Department of Mathematical & Computational Sciences NITK", value: "13.009609209044385, 74.79457758510848" },
    { label: "Additional Teaching Block", value: "13.009602537630947, 74.79394341310237" },
    { label: "SBI ATM", value: "13.008992207052026, 74.79418033541725" },
    { label: "Hair Cutting Saloon", value: "13.008756118892718, 74.79415520729259" },
    { label: "Canara Bank", value: "13.008670427576188, 74.79416059189057" },
    { label: "Mudrika Prints", value: "13.008555006576627, 74.79415700215849" },
    { label: "Shiwalik Boys Hostel", value: "13.008304927550954, 74.7940834126504" },
    { label: "Tripthi night canteen block 8", value: "13.007337836372878, 74.79380161868134" },
    { label: "Gymnasium", value: "13.007154046654474, 74.79471643969859" },
    { label: "Mega Hostel tower2", value: "13.006926895009359, 74.79528829695782" },
    { label: "NITK power house", value: "13.006867270917315, 74.79578440673812" },
    { label: "Mega mess", value: "13.007548688324198, 74.7953014099958" },
    { label: "Nilgiri Hostel", value: "13.005482617638341, 74.79470634908252" },
    { label: "Block 4 satpura", value: "13.006034294001388, 74.7956174219356" },
    { label: "Block 3 Vindhya", value: "13.006476304629343, 74.79650851771996" },
    { label: "Block 2 Aravalli", value: "13.007211934869579, 74.7971792698324" },
    { label: "Block 1 Karavalli", value: "13.008064379197048, 74.7973445275977" },
    { label: "Hostel office", value: "13.007876619320358, 74.79626853648173" },
    { label: "Brahmagiri hostel", value: "13.008795563643117, 74.79706681565384" },
    { label: "Pushpagiri hostel", value: "13.008527202650855, 74.79830138836691" },
    { label: "Lal chowk", value: "13.009133382361563, 74.79657428271943" },
    { label: "HCC", value: "13.00950908675576, 74.79627617066704" },
    { label: "Students Activity center", value: "13.010757015529602, 74.79574872499687" },
    { label: "Department of Chemical Engineering", value: "13.011168354725626, 74.7962734880142" },
    { label: "Metallurgy and material Department", value: "13.01099920597997, 74.79493987974463" }
];

$(function() {
    $("#source, #destination").autocomplete({
        source: locations,
        select: function(event, ui) {
            $(this).val(ui.item.label);
            $(this).attr("data-value", ui.item.value);
            return false;
        }
    });

    
});



var routingControl;




function calculateRoute() {
    // Get source and destination values
    var source = document.getElementById('source').getAttribute('data-value').split(',');
    var destination =document.getElementById('destination').getAttribute('data-value').split(',');
    if (routingControl) {
        myMap.removeControl(routingControl);
    }

    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(source[0], source[1]),
            L.latLng(destination[0], destination[1])
        ],
        routeWhileDragging: true,
        showAlternatives: true,
        lineOptions: {
            styles: [
                { color: 'black', opacity: 1, weight: 7 },
                { color: 'white', opacity: 0.8, weight: 6 },
                { color: 'blue', opacity: 0.7, weight: 4 }
            ]
        },
        altLineOptions: {
            styles: [
                { color: 'black', opacity: 0.7, weight: 7 },
                { color: 'white', opacity: 0.6, weight: 6 },
                { color: 'red', opacity: 0.5, weight: 4 }
            ],
            
            missingRouteStyles: [
                { color: 'gray', opacity: 0.5, weight: 5 }
            ]
        }
    }).addTo(myMap);
}




function generateList() {
    const ul = document.querySelector('.list');
    deptList.forEach((dept) => {
        const li = document.createElement('li');
        const div = document.createElement('li');
        const a = document.createElement('a');
        const p = document.createElement('p');
        a.addEventListener('click',()=>{
            flyToDept(dept);
        })

        div.classList.add('dept-item');
        a.innerText = dept.properties.name;
        a.href = '#';
        p.innerText = dept.properties.aboutdept;

        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    });
}

generateList();

function makePopupContent(building){

    return `
           <div>
               <h4>${building.properties.name}</h4>
               <p>${building.properties.aboutdept}</p>
               <div class="Get-directions">
                   <a href="${building.properties['get-directions']}">${building.properties['get-directions']}</a>
               </div>
           </div>
       `;

    
}


function onEachFeature(feature, layer){
    layer.bindPopup(makePopupContent(feature),{closeButton:false, offset: L.point(0,-10)});
}


//adding markers to the map

// var myIcon = L.icon({
//     iconUrl: 'marker.png',
//     iconSize: [50,50]
// })


// const deptsLayer = L.geoJSON(deptList,{
//     onEachFeature: onEachFeature,
//     pointToLayer: function(feature,latlng) {
//         return L.marker(latlng,{icon: myIcon});
//     }
// });
// deptsLayer.addTo(myMap);

function flyToDept(dept){
    const lat = dept.geometry.coordinates[1];
    const lng = dept.geometry.coordinates[0];
    myMap.flyTo([lat, lng], 18, {
        duration: 3
    });
    setTimeout(() => {
        L.popup({closeButton: false, offset: L.point(0, -8)})
        .setLatLng([lat, lng])
        .setContent(makePopupContent(dept))
        .openOn(myMap);
    }, 3000);
}

