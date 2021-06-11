const exifGeojson = require('..');

test('should generate a valid GeoJSON point when exif.gps data is present', () => {
    expect(exifGeojson(require('./test-exif.json'))).toStrictEqual(require('./test-point.json'));
});

test('should throw an error when valid exif.gps data is not present', () => {
    expect(() => exifGeojson()).toThrow();
});
