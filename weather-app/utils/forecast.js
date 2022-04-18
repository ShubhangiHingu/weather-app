const request = require('request')  
const forecast = (latitude,longtitude,callback) =>{
  const url = 'http://api.weatherstack.com/current?access_key=542ce089dd9e8a23efe7b7b0d4ded134&query=' +latitute +','+longtitude+'New%20York'
request({url: url, json: true},(error,response) =>{
if(error){
callback('unable to connect',undefined)
}else if(response.body.error){
callback('unable to find location', undefined)
}else{
callback(undefined,response.body.temperature+ " degrees out. It feels like "+ response.body.currently+" degrees out.")
}
})

}
module.exports = forecast

