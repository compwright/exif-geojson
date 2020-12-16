# exif-geojson

[![Build Status](https://travis-ci.org/compwright/exif-geojson.svg?branch=master)](https://travis-ci.org/compwright/exif-geojson)
[![Dependency Status](https://img.shields.io/david/compwright/exif-geojson.svg?style=flat-square)](https://david-dm.org/compwright/exif-geojson)
[![Download Status](https://img.shields.io/npm/dm/exif-geojson.svg?style=flat-square)](https://www.npmjs.com/package/exif-geojson)
[![Sponsor on GitHub](https://img.shields.io/static/v1?label=Sponsor&message=❤&logo=GitHub&link=https://github.com/sponsors/compwright)](https://github.com/sponsors/compwright)

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
