const request = require('request')  
const forecast = (latitude,longtitude,callback) =>{
  const url = 'http://api.weatherstack.com/current?access_key=542ce089dd9e8a23efe7b7b0d4ded134&query=New%20York'
request({url: url, json: true},(error,response) =>{
if(error){
callback('unable to connect',undefined)
}else if(response.body.error){
callback('unable to find location', undefined)
}else{
    // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')

  callback(undefined,response.body.temperature+ " degrees out. It feels like "+ response.body.currently+" degrees out.")
}
})

}
module.exports = forecast


// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//    const url = 'http://api.weatherstack.com/current?access_key=542ce089dd9e8a23efe7b7b0d4ded134&query=New%20York'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast