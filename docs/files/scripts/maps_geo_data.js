var map;
var markers = [];
var infowindow = new google.maps.InfoWindow();
var markerOikopedo;



function initialize() {

	var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(36.769211, 22.79885),
//			mapTypeControlOptions: {
//				mapTypeIds: [google.maps.MapTypeId.SATELLITE, 'pink_parks']
//			},
			mapTypeId: google.maps.MapTypeId.HYBRID,
//			overviewMapControl: true,
//			overviewMapControlOptions: {
//				opened: true
//			},
			zoomControl: true,
//			zoomControlOptions: {
//				//style: google.maps.ZoomControlStyle.SMALL
//			 },
			mapTypeControl: true,
//		    mapTypeControlOptions: {
//		      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
//		    },
			panControl: false,
			streetViewControl: false
			 
			 
	};
	
	map = new google.maps.Map(document.getElementById('map_canvas'),
			mapOptions);
	
	
	//------------------------------------
	//	POLYGONO oikopedo
	//------------------------------------
	
	setupPolygon(map);
	
	//------------------------------------
	//	MARKERS  36.772047,22.803175
	//------------------------------------	                      
	
	
	var latlngOikopedo  = new google.maps.LatLng(36.772047,22.803175);
	markerOikopedo = new google.maps.Marker({
		position: latlngOikopedo,
		title:"Area of interest",
	});
	markerOikopedo.setMap(map);
	
	google.maps.event.addListener(markerOikopedo, 'click', function() {
//		map.setCenter(latlngOikopedo);
//		map.setZoom(15);
		infowindow.setContent('Area of interest<br>click <a href="javascript:zoom(markerOikopedo,15);">here</a> to zoom in<br>  &nbsp;');
		infowindow.open(map,markerOikopedo);
	});
//	
//	var point2 = new google.maps.LatLng(36.769211, 22.19885);
//	marker2 = new google.maps.Marker({
//		position: point2,
//		title:"Hello World 2!"
//	});
//	marker2.setMap(map);
//	
//	google.maps.event.addListener(marker2, 'click', function() {
//		infowindow.setContent('aa');
//		infowindow.open(map,marker2);
//	});
//	markers.push(marker2);
	
	
	
	setupMarkers();
	

}

function launchInfoWindow(x) {
    // window.scroll(0, 0);
    // markers[x].setMap(map);
    google.maps.event.trigger(markers[x], "click");
}

function zoom(marker,  zoomLevel) {
	map.setCenter(marker.getPosition());
    map.setZoom(zoomLevel);
}

function makeInfoWindowEvent(map, infowindow, marker, markerAttributes) {  
	return function() {  
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest(); }
		else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }

		xmlhttp.onreadystatechange=function()
		{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{	
		displayStr=xmlhttp.responseText;
		infowindow.setContent(displayStr);
		infowindow.open(map,marker);
		}
		};

		xmlhttp.open("GET",markerAttributes.contentPath, true);
		xmlhttp.send();
		
		
		var latlng = new google.maps.LatLng(markerAttributes.lat, markerAttributes.lng);
//		map.setZoom(8);
//		map.setCenter(latlng);
//		displayStr = markerAttributes.title;
//		infowindow.setContent(displayStr);
//		infowindow.open(map,marker);

	};  
} 


function setupPolygon(map){
	
	var points =
		[
		new google.maps.LatLng(36.772047,22.803175),
		new google.maps.LatLng(36.771824,22.802703),
		new google.maps.LatLng(36.771643,22.802339),
		new google.maps.LatLng(36.771549,22.802145),
		new google.maps.LatLng(36.771377,22.802242),
		new google.maps.LatLng(36.771261,22.802339),
		new google.maps.LatLng(36.771029,22.802494),
		new google.maps.LatLng(36.770732,22.802666),
		new google.maps.LatLng(36.770393,22.802837),
		new google.maps.LatLng(36.770208,22.802918),
		new google.maps.LatLng(36.77001,22.803047),
		new google.maps.LatLng(36.769963,22.803159),
		new google.maps.LatLng(36.770058,22.803379),
		new google.maps.LatLng(36.770225,22.803546),
		new google.maps.LatLng(36.770384,22.803701),
		new google.maps.LatLng(36.770457,22.803749),
		new google.maps.LatLng(36.770526,22.803825),
		new google.maps.LatLng(36.770621,22.803932),
		new google.maps.LatLng(36.770724,22.804066),
		new google.maps.LatLng(36.77081,22.804093),
		new google.maps.LatLng(36.771123,22.803867),
		new google.maps.LatLng(36.772073,22.803208),
		new google.maps.LatLng(36.771987,22.803052),
		new google.maps.LatLng(36.772047,22.803175),
		new google.maps.LatLng(36.772047,22.803175)
		];
	
	// Construct the polygon
	// Note that we don't specify an array or arrays, but instead just
	// a simple array of LatLngs in the paths property
	oikopedoPolygon = new google.maps.Polygon({
		paths: points,
		strokeColor: "#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0.35
	});
	oikopedoPolygon.setMap(map);
	
}


function setupMarkers() {
    
    var markerAttributesArray = new Array();
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Monemvasia";
    markerAttributes.lat =  36.687847;
    markerAttributes.lng =  23.055861;
    markerAttributes.contentPath="files/location/Monemvasia.html";
    markerAttributesArray[0] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Neapoli";
    markerAttributes.lat =  36.512016;
    markerAttributes.lng =  23.059788;
    markerAttributes.contentPath="files/location/Neapoli.html";
    markerAttributesArray[1] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Elafonisos island";
    markerAttributes.lat =  36.489491;
    markerAttributes.lng =  22.962456;
    markerAttributes.contentPath="files/location/Elafonisos_island.html";
    markerAttributesArray[2] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Gytheio";
    markerAttributes.lat =  36.762096;
    markerAttributes.lng =  22.563686;
    markerAttributes.contentPath="files/location/Gytheio.html";
    markerAttributesArray[3] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Mavrovouni";
    markerAttributes.lat =  36.741085;
    markerAttributes.lng =  22.570038;
    markerAttributes.contentPath="files/location/Mavrovouni.html";
    markerAttributesArray[4] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Gerolimenas";
    markerAttributes.lat =  36.482899;
    markerAttributes.lng =  22.400351;
    markerAttributes.contentPath="files/location/Gerolimenas.html";
    markerAttributesArray[5] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Aeropoli";
    markerAttributes.lat =  36.665405;
    markerAttributes.lng =  22.379772;
    markerAttributes.contentPath="files/location/Aeropoli.html";
    markerAttributesArray[6] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Dyros";
    markerAttributes.lat =  36.642254;
    markerAttributes.lng =  22.386189;
    markerAttributes.contentPath="files/location/Dyros.html";
    markerAttributesArray[7] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Sparta";
    markerAttributes.lat =  37.074558;
    markerAttributes.lng =  22.430820;
    markerAttributes.contentPath="files/location/Sparta.html";
    markerAttributesArray[8] = markerAttributes;
    
    var markerAttributes =  new Object();
    markerAttributes.title = "Mystras";
    markerAttributes.lat =  37.069286;
    markerAttributes.lng =  22.374945;
    markerAttributes.contentPath="files/location/Mystras.html";
    markerAttributesArray[9] = markerAttributes;
	
    var image = 'images/markers/marker_icon_blue-dot.png';
    for (var i = 0; i < markerAttributesArray.length; i++) {
    	var latlng = new google.maps.LatLng(markerAttributesArray[i].lat, markerAttributesArray[i].lng);
        var marker = new google.maps.Marker({ 
        	position: latlng, 
        	title: markerAttributesArray[i].title,
        	icon: image 
        	});
        marker.setMap(map);
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', makeInfoWindowEvent(map, infowindow, marker, markerAttributesArray[i]));
    }

}


//google.maps.event.addListener(marker1, 'click', function() {
//	var displayStr ='empty';
//	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
//	  xmlhttp=new XMLHttpRequest(); }
//	else{// code for IE6, IE5
//	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); }
//	
//	xmlhttp.onreadystatechange=function()
//	  {
//	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
//	    {	
//		  	displayStr=xmlhttp.responseText;
//			infowindow1.setContent(displayStr);
//			infowindow1.open(map,marker1);
//	    }
//	  };
//	  
//	xmlhttp.open("GET","files/test.html", true);
//	xmlhttp.send();
//
//});