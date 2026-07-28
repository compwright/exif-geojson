/* eslint-env jest */

import assert from 'node:assert'
import dms2dec from './dms2dec'

describe('dms2dec', () => {
  const lat = '60/1, 21/1, 4045/100'
  const latRef = 'N'
  const latDec = 60.36123611111111

  const lon = '5/1, 22/1, 1555/100'
  const lonRef = 'E'
  const lonDec = 5.370986111111111

  test('parses dms strings', function () {
    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses dms strings without commas', function () {
    const lat = '60/1 21/1 4045/100'
    const lon = '5/1 22/1 1555/100'

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses dms strings without spaces', function () {
    const lat = '60/1,21/1,4045/100'
    const lon = '5/1,22/1,1555/100'

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses dms arrays of strings', function () {
    const lat = ['60/1', '21/1', '4045/100']
    const lon = ['5/1', '22/1', '1555/100']

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses dms arrays of numbers', function () {
    const lat = [60, 21, 40.45]
    const lon = [5, 22, 15.55]

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses western coorinates', function () {
    const lonRef = 'W'
    const lonDec = -5.370986111111111

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })

  test('parses southern coorinates', function () {
    const latRef = 'S'
    const latDec = -60.36123611111111

    assert.deepEqual(dms2dec(lat, latRef, lon, lonRef), [latDec, lonDec])
  })
})
