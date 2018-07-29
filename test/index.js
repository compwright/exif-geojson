const assert = require('assert');
const exifGeojson = require('../');

describe('exifGeojson', () => {
    it('should generate a valid GeoJSON point when exif.gps data is present', done => {
        assert.deepEqual(
            exifGeojson(require('./test-exif.json')),
            require('./test-point.json')
        );
        done();
    });

    it('should throw an error when valid exif.gps data is not present', done => {
        try {
            exifGeojson();
            assert(false, 'expected exception');
        } catch (e) {
            assert(true);
        } finally {
            done();
        }
    });
});
