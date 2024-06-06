const myMap = L.map('map').setView([13.0102, 74.7938], 16.5);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tileLayer = L.tileLayer(tileUrl,{});
tileLayer.addTo(myMap);


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

var myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [50,50]
})


const deptsLayer = L.geoJSON(deptList,{
    onEachFeature: onEachFeature,
    pointToLayer: function(feature,latlng) {
        return L.marker(latlng,{icon: myIcon});
    }
});
deptsLayer.addTo(myMap);

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