var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LanduseTypes_1 = new ol.format.GeoJSON();
var features_LanduseTypes_1 = format_LanduseTypes_1.readFeatures(json_LanduseTypes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LanduseTypes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LanduseTypes_1.addFeatures(features_LanduseTypes_1);
var lyr_LanduseTypes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LanduseTypes_1, 
                style: style_LanduseTypes_1,
                popuplayertitle: "Landuse Types",
                interactive: true,
    title: 'Landuse Types<br />\
    <img src="styles/legend/LanduseTypes_1_0.png" /> Administration<br />\
    <img src="styles/legend/LanduseTypes_1_1.png" /> Agrarian Services<br />\
    <img src="styles/legend/LanduseTypes_1_2.png" /> Banking<br />\
    <img src="styles/legend/LanduseTypes_1_3.png" /> Coconut<br />\
    <img src="styles/legend/LanduseTypes_1_4.png" /> Commercial<br />\
    <img src="styles/legend/LanduseTypes_1_5.png" /> Health Institutions<br />\
    <img src="styles/legend/LanduseTypes_1_6.png" /> Homestead<br />\
    <img src="styles/legend/LanduseTypes_1_7.png" /> Industry<br />\
    <img src="styles/legend/LanduseTypes_1_8.png" /> Other Crops<br />\
    <img src="styles/legend/LanduseTypes_1_9.png" /> Other Cultural<br />\
    <img src="styles/legend/LanduseTypes_1_10.png" /> Other Urban Uses<br />\
    <img src="styles/legend/LanduseTypes_1_11.png" /> Paddy<br />\
    <img src="styles/legend/LanduseTypes_1_12.png" /> Parks & Playgrounds<br />\
    <img src="styles/legend/LanduseTypes_1_13.png" /> Religious<br />\
    <img src="styles/legend/LanduseTypes_1_14.png" /> Rest Houses<br />\
    <img src="styles/legend/LanduseTypes_1_15.png" /> Rock<br />\
    <img src="styles/legend/LanduseTypes_1_16.png" /> Rubber<br />\
    <img src="styles/legend/LanduseTypes_1_17.png" /> Schools<br />\
    <img src="styles/legend/LanduseTypes_1_18.png" /> Undeveloped Land<br />\
    <img src="styles/legend/LanduseTypes_1_19.png" /> Water Areas<br />\
    <img src="styles/legend/LanduseTypes_1_20.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_LanduseTypes_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_LanduseTypes_1];
lyr_LanduseTypes_1.set('fieldAliases', {'ID': 'ID', 'WARD_NO': 'WARD_NO', 'LU_CODE': 'LU_CODE', 'NAME': 'NAME', 'EXTENT': 'EXTENT', });
lyr_LanduseTypes_1.set('fieldImages', {'ID': 'Range', 'WARD_NO': 'TextEdit', 'LU_CODE': 'TextEdit', 'NAME': 'TextEdit', 'EXTENT': 'TextEdit', });
lyr_LanduseTypes_1.set('fieldLabels', {'ID': 'inline label - always visible', 'WARD_NO': 'inline label - always visible', 'LU_CODE': 'inline label - always visible', 'NAME': 'inline label - always visible', 'EXTENT': 'inline label - always visible', });
lyr_LanduseTypes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});