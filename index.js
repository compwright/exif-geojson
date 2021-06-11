const dms2dec = require('dms2dec');

function exifGeojson (exifData = {}) {
    try {
        const {
            GPSLatitude,
            GPSLatitudeRef,
            GPSLongitude,
            GPSLongitudeRef,
            GPSAltitude,
            GPSAltitudeRef
        } = exifData.gps;
        
        var coordinates = dms2dec(GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef);
        var alt = ((0 - GPSAltitudeRef) * GPSAltitude) || GPSAltitude; // negate if below sea level
    } catch (e) {
        throw new Error('Location data missing or invalid');
    }
            
    return {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: coordinates.reverse().concat(alt)
        }
    };
}

module.exports = exifGeojson;
