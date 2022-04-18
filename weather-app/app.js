
// const request = require('request')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// console.log("Starting")


// setTimeout(() => {
//   console.log("2 Second Timer")
// },2000)

// setTimeout(()=>{
//   console.log("0 Second Timer")
// },0)

// console.log("Stopping")

// const url = 'http://api.weatherstack.com/current?access_key=542ce089dd9e8a23efe7b7b0d4ded134&query=New%20York'
// request({url: url,json: true}, (error,response) =>{
//   if(error) {
//     console.log('unable to connect to weather server');
//   }else if(response.body.error){
//     console.log('unable to find location of weather server')
//   }else{
//     console.log(response.body.temperature+ " degrees out. It feels like "+ response.body.currently+" degrees out." )

//   }
// const data = JSON.parse(response.body)
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2h1YmhhbmdpaGluZ3UiLCJhIjoiY2wxcWUyMHFpMDlrbDNjbzl2eGExdGQ3biJ9.8m9k01TP7YhK8b9XXTeHXQ';
// request({url: geocodeURL,json: true},(error,response) => {
//   if(error){
//     console.log('unable to geocode')
//   }else{
//     const latitude = response.body.features[0].center[1]
//     const longtitude = response.body.features[0].center[0]
//     console.log(latitude,longtitude)

//   }

// })


// geocode('Boston', (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
//   forecast(data.latitude,data.longtitude, (error, forecastData) => {
//     if(error){
//       return console.log(error)
//     }

//     console.log(data.location)
//     console.log(forecastData)
//   })
  
// })

const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}






