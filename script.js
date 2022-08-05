alert("DISCLAIMER\n"+
"This webpage contain a map of KMEA engineering college integrated with 2D block view and details of stalls developed by IEDC KMEA\n"+
"This product is developed and owned by TinkerHub KMEA and EDC KMEA");

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
markerCivil.url = 'civilblock.html'

markerCivil.on('click', function(){
window.location = (this.url);
});


let markerMtlab=new L.Marker([10.05451,76.37913]);
markerMtlab.addTo(map);
markerMtlab.addTo(map);
markerMtlab.url = 'https://www.notion.so/Heat-engine-workshop-7633dcf162664e1a8d41ee3a640fb862'

markerMtlab.on('click', function(){
window.location = (this.url);
});

let markerFmlab=new L.Marker([10.054160685588075, 76.37900794795912]);
markerFmlab.addTo(map);
markerFmlab.addTo(map);
markerFmlab.url = 'https://www.notion.so/Electrical-workshop-00a13cdb82444ad19ad2560a57e1a62a'

markerFmlab.on('click', function(){
window.location = (this.url);
});

