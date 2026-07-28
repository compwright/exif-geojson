import dms2dec from './dms2dec'

export default function exifGeojson (exifData = {}) {
  let coordinates, alt
  try {
    const {
      GPSLatitude,
      GPSLatitudeRef,
      GPSLongitude,
      GPSLongitudeRef,
      GPSAltitude,
      GPSAltitudeRef
    } = exifData.gps

    coordinates = dms2dec(GPSLatitude, GPSLatitudeRef, GPSLongitude, GPSLongitudeRef)
    alt = ((0 - GPSAltitudeRef) * GPSAltitude) || GPSAltitude // negate if below sea level
  } catch (e) {
    throw new Error('Location data missing or invalid')
  }

  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: coordinates.reverse().concat(alt)
    }
  }
}
