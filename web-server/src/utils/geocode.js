const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1YmhhbmdpaGluZ3UiLCJhIjoiY2wxcWUyMHFpMDlrbDNjbzl2eGExdGQ3biJ9.8m9k01TP7YhK8b9XXTeHXQ'
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('unable to connect location services', undefined)
    } else if (response.body.features.length === 0) {
      callback('unable to find location', undefined)
    }else{
      callback(undefined, {
         latitude : response.body.features[0].center[1],
     longtitude : response.body.features[0].center[0],
        location : response.body.features[0].place_name
    })
    }
  })
}
module.exports = geocode
// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1YmhhbmdpaGluZ3UiLCJhIjoiY2wxcWUyMHFpMDlrbDNjbzl2eGExdGQ3biJ9.8m9k01TP7YhK8b9XXTeHXQ'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode