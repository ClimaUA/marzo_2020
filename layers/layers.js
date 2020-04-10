var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Precipitacin_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitación",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacin_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-138050.955070, 4551307.873323, 39701.391706, 4711446.030240]
                            })
                        });var format_Comarcas_1 = new ol.format.GeoJSON();
var features_Comarcas_1 = format_Comarcas_1.readFeatures(json_Comarcas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comarcas_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Comarcas_1.addFeatures(features_Comarcas_1);var lyr_Comarcas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comarcas_1, 
                style: style_Comarcas_1,
                title: '<img src="styles/legend/Comarcas_1.png" /> Comarcas'
            });var format_Datosestaciones_2 = new ol.format.GeoJSON();
var features_Datosestaciones_2 = format_Datosestaciones_2.readFeatures(json_Datosestaciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosestaciones_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Datosestaciones_2.addFeatures(features_Datosestaciones_2);var lyr_Datosestaciones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datosestaciones_2, 
                style: style_Datosestaciones_2,
                title: '<img src="styles/legend/Datosestaciones_2.png" /> Datos estaciones'
            });var format_Lneasprovinciales_3 = new ol.format.GeoJSON();
var features_Lneasprovinciales_3 = format_Lneasprovinciales_3.readFeatures(json_Lneasprovinciales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasprovinciales_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasprovinciales_3.addFeatures(features_Lneasprovinciales_3);var lyr_Lneasprovinciales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasprovinciales_3, 
                style: style_Lneasprovinciales_3,
                title: '<img src="styles/legend/Lneasprovinciales_3.png" /> Líneas provinciales'
            });

lyr_Precipitacin_0.setVisible(true);lyr_Comarcas_1.setVisible(true);lyr_Datosestaciones_2.setVisible(true);lyr_Lneasprovinciales_3.setVisible(true);
var layersList = [baseLayer,lyr_Precipitacin_0,lyr_Comarcas_1,lyr_Datosestaciones_2,lyr_Lneasprovinciales_3];
lyr_Comarcas_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCIA': 'PROVINCIA', 'Area_ha': 'Area_ha', 'Comarca': 'Comarca', 'Cod_Comarc': 'Cod_Comarc', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Datosestaciones_2.set('fieldAliases', {'ESTACION': 'ESTACION', 'X': 'X', 'Y': 'Y', 'PCP': 'PCP', });
lyr_Lneasprovinciales_3.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATIONALLE': 'NATIONALLE', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_Comarcas_1.set('fieldImages', {'OBJECTID': 'Hidden', 'PROVINCIA': 'Hidden', 'Area_ha': 'Hidden', 'Comarca': 'TextEdit', 'Cod_Comarc': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Datosestaciones_2.set('fieldImages', {'ESTACION': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'PCP': 'TextEdit', });
lyr_Lneasprovinciales_3.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATIONALLE': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'TextEdit', 'URL_RESOUR': 'TextEdit', });
lyr_Comarcas_1.set('fieldLabels', {'Comarca': 'no label', });
lyr_Datosestaciones_2.set('fieldLabels', {'ESTACION': 'header label', 'PCP': 'header label', });
lyr_Lneasprovinciales_3.set('fieldLabels', {'INSPIREID': 'no label', 'NATIONALCO': 'no label', 'COUNTRY': 'no label', 'NATIONALLE': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_Lneasprovinciales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});