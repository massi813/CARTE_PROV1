var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_provincespop2006_1 = new ol.format.GeoJSON();
var features_provincespop2006_1 = format_provincespop2006_1.readFeatures(json_provincespop2006_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincespop2006_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincespop2006_1.addFeatures(features_provincespop2006_1);
var lyr_provincespop2006_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincespop2006_1, 
                style: style_provincespop2006_1,
                popuplayertitle: 'provinces pop 2006',
                interactive: true,
    title: 'provinces pop 2006<br />\
    <img src="styles/legend/provincespop2006_1_0.png" /> 70036 - 346262<br />\
    <img src="styles/legend/provincespop2006_1_1.png" /> 346262 - 622487<br />\
    <img src="styles/legend/provincespop2006_1_2.png" /> 622487 - 898713<br />\
    <img src="styles/legend/provincespop2006_1_3.png" /> 898713 - 1174939<br />\
    <img src="styles/legend/provincespop2006_1_4.png" /> 1174939 - 1451164<br />\
    <img src="styles/legend/provincespop2006_1_5.png" /> 1451164 - 1727390<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_provincespop2006_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_provincespop2006_1];
lyr_provincespop2006_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_2': 'NAME_2', 'POP2006_PO': 'POP2006_PO', });
lyr_provincespop2006_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_2': 'TextEdit', 'POP2006_PO': 'TextEdit', });
lyr_provincespop2006_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_2': 'inline label - always visible', 'POP2006_PO': 'inline label - always visible', });
lyr_provincespop2006_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});