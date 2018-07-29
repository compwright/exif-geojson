# exif-geojson

A ES2017 function to generate a [GeoJSON Point](https://tools.ietf.org/html/rfc7946#appendix-A.1) from [EXIF GPS data](https://sno.phy.queensu.ca/~phil/exiftool/TagNames/GPS.html).

This function is meant to be used with [exif](https://github.com/gomfunkel/node-exif) or [exif-async](https://github.com/jacekwasowski/exif-async).

## Installation

```
npm install --save exif-geojson exif-async
```

## Usage

```javascript
const exifGeojson = require('exif-geojson');
const getExif = require('exif-async');

(async function() {
    try {
        const exif = await getExif('./photo_exif.jpg');
        const point = exifGeojson(exif);
        console.log(point);
    } catch {
        console.log('No location data found');
    }
})();
```

## License

MIT
