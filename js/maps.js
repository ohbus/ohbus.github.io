// Replace with your coordinates
// -----------------------------------

var latitude = 40.7127840;
	longitude = -74.0059410;
	
// -----------------------------------
var myMap = (function(a,b,c){
	var latA = a;
	var latB = b;
	var map1 = c;

	var styles = [
		{
			stylers: [ { saturation: -100 } ]
		},{
		    featureType: 'road',
			elementType: 'geometry',
			stylers: [
				{ hue: "#000000" },
				{ visibility: 'simplified' }
			]
		        },{
		            featureType: 'road',
		            elementType: 'labels',
		            stylers: [
		                { visibility: 'off' }
		            ]
		        }
	],
				
	lat = latA, lng = latB,	
		
	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	customMap = new google.maps.StyledMapType(styles,
		{name: 'Custom Style'}),
		
	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	mapOptions = {
		zoom: 11,
		scrollwheel: false,
		center: new google.maps.LatLng( lat, lng ),
		streetViewControl: true,
		zoomControl: true,
		panControl: true,
		draggable: true,	
		mapTypeControl: true,		
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'custom_style'],
					
		}
	},
	
	map = new google.maps.Map(document.getElementById(map1), mapOptions),
		myLatlng = new google.maps.LatLng( lat, lng ),
	
	marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: "http://webnextbd.net/demo/images/marker.png"
				
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('custom_style', customMap);
	map.setMapTypeId('custom_style');	
});

myMap(latitude, longitude, 'map1');
