let mapOptions = {
    center:[10.05375,76.37957],
    zoom:110

}

let map=new L.map('map',mapOptions);

let layer=new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// let marker=new L.Marker([10.05375,76.37957]);
// marker.addTo(map);

let markerCivil=new L.Marker([10.05382,76.37870]);
markerCivil.addTo(map);
markerCivil.url = 'http://www.google.com'

markerCivil.on('click', function(){
window.location = (this.url);
});


let markerMtlab=new L.Marker([10.05451,76.37913]);
markerMtlab.addTo(map);
markerMtlab.addTo(map);
markerMtlab.url = 'http://www.google.com'

markerMtlab.on('click', function(){
window.location = (this.url);
});

let markerFmlab=new L.Marker([10.05472,76.37949]);
markerFmlab.addTo(map);
markerFmlab.addTo(map);
markerFmlab.url = 'http://www.google.com'

markerFmlab.on('click', function(){
window.location = (this.url);
});

